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
function generateIconDataRow(icon, formattedName, iconData, type = "module") {
  switch (type) {
    case "module":
      return `export const ${formattedName} = ${JSON.stringify(iconData)};\n`;
    case "common":
      return `module.exports.${formattedName} = ${JSON.stringify(iconData)};\n`;
    case "dts":
      return `export declare const ${formattedName}: IconData;\n`;
  }
}
function generateIconIndexRow(icon, formattedName, iconData, type = "module") {
  switch (type) {
    case "module":
      return `export const ${formattedName} = GenIcon(IconData.${formattedName});\n`;
    case "common":
      return `module.exports.${formattedName} = GenIcon(IconData.${formattedName});\n`;
    case "dts":
      return `export declare const ${formattedName}: IconType;\n`;
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
      [icon.id, "data.js"],
      "/* eslint-disable */\n// THIS FILE IS AUTO GENERATED\n"
    );
    await write(
      [icon.id, "data.mjs"],
      "/* eslint-disable */\n// THIS FILE IS AUTO GENERATED\n"
    );
    await write(
      [icon.id, "data.d.ts"],
      "import { IconData } from '../IconBase'\n// THIS FILE IS AUTO GENERATED\n"
    );

    await write(
      [icon.id, "index.js"],
      "/* eslint-disable */\n// THIS FILE IS AUTO GENERATED\nconst IconData = require('./data');\nconst { GenIcon } = require('../IconBase')\n"
    );
    await write(
      [icon.id, "index.mjs"],
      "/* eslint-disable */\n// THIS FILE IS AUTO GENERATED\nimport * as IconData from './data';\nimport { GenIcon } from '../IconBase';\n"
    );
    await write(
      [icon.id, "index.d.ts"],
      "import { IconType } from '../IconBase'\n// THIS FILE IS AUTO GENERATED\n"
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
  appendFile(path.resolve(DIST, "index.mjs"), entryModule, "utf8");
  const entryDts = generateIconsEntry(icon.id, "dts");
  appendFile(path.resolve(DIST, "index.d.ts"), entryDts, "utf8");

  for (const file of files) {
    const svgStr = await promisify(fs.readFile)(file, "utf8");
    const iconData = await convertIconData(svgStr);

    const rawName = path.basename(file, path.extname(file));
    const pascalName = camelcase(rawName, { pascalCase: true });
    const name = (icon.formatter && icon.formatter(pascalName)) || pascalName;
    if (exists.has(name)) continue;
    exists.add(name);

    // write like: module/fa/data.mjs
    const modRes = generateIconDataRow(icon, name, iconData, "module");
    appendFile(path.resolve(DIST, icon.id, "data.mjs"), modRes, "utf8");
    const commonRes = generateIconDataRow(icon, name, iconData, "common");
    appendFile(path.resolve(DIST, icon.id, "data.js"), commonRes, "utf8");
    const dtsRes = generateIconDataRow(icon, name, iconData, "dts");
    appendFile(path.resolve(DIST, icon.id, "data.d.ts"), dtsRes, "utf8");

    const indMod = generateIconIndexRow(icon, name, iconData, "module");
    appendFile(path.resolve(DIST, icon.id, "index.mjs"), indMod, "utf8");
    const indCom = generateIconIndexRow(icon, name, iconData, "common");
    appendFile(path.resolve(DIST, icon.id, "index.js"), indCom, "utf8");
    const indDts = generateIconIndexRow(icon, name, iconData, "dts");
    appendFile(path.resolve(DIST, icon.id, "index.d.ts"), indDts, "utf8");

    exists.add(file);
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
