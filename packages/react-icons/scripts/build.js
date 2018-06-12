const cheerio = require("cheerio");
const glob = require("glob-promise");
const path = require("path");
const fs = require("fs");
const { promisify } = require("util");
const camelcase = require("camelcase");

const { icons } = require("../src/icons");

// file path
const rootDir = path.resolve(__dirname, "../");
const DIST = path.resolve(rootDir, "module");

// logic

async function getIconFiles(icon) {
  return glob(icon.files);
}
async function convertIconData(svg) {
  const $svg = cheerio.load(svg, { xmlMode: true })("svg");

  // filter/convert attributes
  // 1. remove class attr
  // 2. convert to camelcase ex: fill-opacity => fillOpacity
  const attrConverter = (
    /** @type {{[key: string]: string}} */ attribs,
    /** @type string */ tagName
  ) =>
    attribs &&
    Object.keys(attribs)
      .filter(
        name =>
          ![
            "class",
            ...(tagName === "svg" ? ["xmlns", "width", "height"] : []) // if tagName is svg remove size attributes
          ].includes(name)
      )
      .reduce((obj, name) => {
        const newName = camelcase(name);
        obj[newName] = attribs[name];
        return obj;
      }, {});

  // convert to [ { tag: 'path', attr: { d: 'M436 160c6.6 ...', ... }, child: { ... } } ]
  const elementToTree = (/** @type {Cheerio} */ element) =>
    element
      .filter((_, e) => e.tagName && !["style"].includes(e.tagName))
      .map((_, e) => ({
        tag: e.tagName,
        attr: attrConverter(e.attribs, e.tagName),
        child:
          e.children && e.children.length
            ? elementToTree(cheerio(e.children))
            : undefined
      }))
      .get();

  const tree = elementToTree($svg);
  return tree[0]; // like: [ { tag: 'path', attr: { d: 'M436 160c6.6 ...', ... }, child: { ... } } ]
}
function generateIconRow(icon, formattedName, iconData, type = "module") {
  switch (type) {
    case "module":
      return (
        `export const Data${formattedName} = ${JSON.stringify(iconData)};\n` +
        `export const ${formattedName} = function (props) { return GenIcon(Data${formattedName})(props); };\n`
      );
    case "common":
      return (
        `module.exports.Data${formattedName} = ${JSON.stringify(iconData)};\n` +
        `module.exports.${formattedName} = function (props) { return GenIcon(module.exports.Data${formattedName})(props); };\n`
      );
    case "dts":
      return (
        `export declare const Data${formattedName}: IconData;\n` +
        `export declare const ${formattedName}: IconType;\n`
      );
  }
}
function generateIconsEntry(iconId, type = "module") {
  switch (type) {
    case "module":
      return `export * from './${iconId}';\n`;
    case "dts":
      return `export * from './${iconId}';\n`;
  }
}

async function dirInit() {
  const ignore = err => {
    if (err.code === "EEXIST") return;
    throw err;
  };

  const mkdir = promisify(fs.mkdir);
  const writeFile = promisify(fs.writeFile);

  await mkdir(DIST).catch(ignore);
  for (const icon of icons) {
    await mkdir(path.resolve(DIST, icon.id)).catch(ignore);

    const write = (filePath, str) =>
      writeFile(path.resolve(DIST, ...filePath), str, "utf8").catch(ignore);

    await write(
      [icon.id, "index.js"],
      "/* eslint-disable */\n// THIS FILE IS AUTO GENERATED\nconst { GenIcon } = require('../IconBase')\n"
    );
    await write(
      [icon.id, "index.mjs"],
      "/* eslint-disable */\n// THIS FILE IS AUTO GENERATED\nimport { GenIcon } from '../IconBase';\n"
    );
    await write(
      [icon.id, "index.d.ts"],
      "import { IconData, IconType } from '../IconBase'\n// THIS FILE IS AUTO GENERATED\n"
    );

    await write(["index.d.ts"], "// THIS FILE IS AUTO GENERATED\n");
    await write(["index.mjs"], "// THIS FILE IS AUTO GENERATED\n");
  }
}
async function writeIconModule(icon) {
  const appendFile = promisify(fs.appendFile);
  const files = await getIconFiles(icon);
  const exists = new Set(); // for remove duplicate

  const entryModule = generateIconsEntry(icon.id, "module");
  await appendFile(path.resolve(DIST, "index.mjs"), entryModule, "utf8");
  const entryDts = generateIconsEntry(icon.id, "dts");
  await appendFile(path.resolve(DIST, "index.d.ts"), entryDts, "utf8");

  for (const file of files) {
    const svgStr = await promisify(fs.readFile)(file, "utf8");
    const iconData = await convertIconData(svgStr);

    const rawName = path.basename(file, path.extname(file));
    const pascalName = camelcase(rawName, { pascalCase: true });
    const name = (icon.formatter && icon.formatter(pascalName)) || pascalName;
    if (exists.has(name)) continue;
    exists.add(name);

    // write like: module/fa/data.mjs
    const modRes = generateIconRow(icon, name, iconData, "module");
    await appendFile(path.resolve(DIST, icon.id, "index.mjs"), modRes, "utf8");
    const comRes = generateIconRow(icon, name, iconData, "common");
    await appendFile(path.resolve(DIST, icon.id, "index.js"), comRes, "utf8");
    const dtsRes = generateIconRow(icon, name, iconData, "dts");
    await appendFile(path.resolve(DIST, icon.id, "index.d.ts"), dtsRes, "utf8");

    exists.add(file);
  }
}

async function writeIconsManifest() {
  const writeFile = promisify(fs.writeFile);
  const copyFile = promisify(fs.copyFile);
  const appendFile = promisify(fs.appendFile);

  const writeObj = icons.map(icon => ({
    id: icon.id,
    name: icon.name,
    projectUrl: icon.projectUrl,
    license: icon.license,
    licenseUrl: icon.licenseUrl
  }));
  const manifest = JSON.stringify(writeObj, null, 2);
  await writeFile(
    path.resolve(DIST, "IconsManifest.mjs"),
    `export const IconsManifest = ${manifest}`,
    "utf8"
  );
  await writeFile(
    path.resolve(DIST, "IconsManifest.js"),
    `module.exports.IconsManifest = ${manifest}`,
    "utf8"
  );
  await copyFile(
    "src/IconsManifest.d.ts",
    path.resolve(DIST, "IconsManifest.d.ts")
  );

  const manifestExport = `export * from './IconsManifest';\n`;
  await appendFile(path.resolve(DIST, "index.mjs"), manifestExport, "utf8");
  await appendFile(path.resolve(DIST, "index.d.ts"), manifestExport, "utf8");
}

async function writeLicense() {
  const copyFile = promisify(fs.copyFile);
  const appendFile = promisify(fs.appendFile);

  const iconLicenses =
    icons
      .map(icon =>
        [
          `${icon.name} - ${icon.projectUrl}`,
          `License: ${icon.license} ${icon.licenseUrl}`
        ].join("\n")
      )
      .join("\n\n") + "\n";

  await copyFile(
    path.resolve(rootDir, "LICENSE_HEADER"),
    path.resolve(rootDir, "LICENSE")
  );
  await appendFile(path.resolve(rootDir, "LICENSE"), iconLicenses, "utf8");
}

async function writeImports() {
  const appendFile = promisify(fs.appendFile);
  const imports = `export {IconContext, IconBaseProps, IconType} from './IconBase';\n`;
  await appendFile(path.resolve(DIST, "index.mjs"), imports, "utf8");
}

async function main() {
  try {
    await dirInit();
    await writeLicense();
    await writeIconsManifest();
    await writeImports();
    for (const icon of icons) {
      await writeIconModule(icon);
    }
    console.log("done");
  } catch (e) {
    console.error(e);
  }
}
main();
