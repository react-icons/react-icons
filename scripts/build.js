const cheerio = require("cheerio");
const glob = require("glob-promise");
const path = require("path");
const fs = require("fs");
const { promisify } = require("util");
const camelcase = require("camelcase");

const { icons } = require("../src/icons");

// file path
const rootDir = path.resolve(__dirname, "../");
const DIST = path.resolve(rootDir, "dist");

// logic

async function getIconFiles(icon) {
  return glob(icon.files);
}
async function convertIconData(svg) {
  const $svg = cheerio.load(svg, { xmlMode: true })("svg");
  const viewBox = $svg.attr("viewBox");
  const path = $svg
    .children("path")
    .map((_, d) => d.attribs)
    .toArray();
  return {
    viewBox, // like: '0 0 448 512',
    path: path // like: [ { d: 'M436 160c6.6 ....
  };
}
function generateIconRow(icon, formattedName, iconData, module = true) {
  if (module) {
    return `export const ${formattedName} = ${JSON.stringify(iconData)}\n`;
  } else {
    return `module.exports.${formattedName} = ${JSON.stringify(iconData)}\n`;
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
    await writeFile(
      path.resolve(DIST, icon.id, "data.js"),
      "/* eslint-disable */\n// THIS FILE IS AUTO GENERATED\n",
      "utf8"
    ).catch(ignore);
    await writeFile(
      path.resolve(DIST, icon.id, "data.mjs"),
      "/* eslint-disable */\n// THIS FILE IS AUTO GENERATED\n",
      "utf8"
    ).catch(ignore);
  }
}
async function writeIconModule(icon) {
  const appendFile = promisify(fs.appendFile);
  const files = await getIconFiles(icon);
  const exists = new Set(); // for remove duplicate
  for (const file of files) {
    const svgStr = await promisify(fs.readFile)(file, "utf8");
    const iconData = await convertIconData(svgStr);

    const name = path.basename(file, path.extname(file));
    const pascalName = camelcase(name, { pascalCase: true });
    const formattedName =
      (icon.formatter && icon.formatter(pascalName)) || pascalName;
    if (exists.has(formattedName)) continue;
    exists.add(formattedName);

    // write like: module/fa/data.mjs
    const modRes = generateIconRow(icon, formattedName, iconData);
    appendFile(path.resolve(DIST, icon.id, "data.mjs"), modRes, "utf8");
    const commonRes = generateIconRow(icon, formattedName, iconData, false);
    appendFile(path.resolve(DIST, icon.id, "data.js"), commonRes, "utf8");
    exists.add(file); // todo
  }
}

async function main() {
  try {
    await dirInit();
    for (const icon of icons) {
      await writeIconModule(icon);
    }
    console.log("done");
  } catch (e) {
    console.error(e);
  }
}
main();
