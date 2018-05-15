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
const MODULE_DIST = path.resolve(rootDir, "module");

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
function generateIconRow(icon, filePath, iconData, module = true) {
  const name = path.basename(filePath, path.extname(filePath));
  const pascalName = camelcase(name, { pascalCase: true });
  if (module) {
    return `export const ${pascalName} = ${JSON.stringify(iconData)}\n`;
  } else {
    return `module.exports.${pascalName} = ${JSON.stringify(iconData)}\n`;
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
  await mkdir(MODULE_DIST).catch(ignore);
  for (const icon of icons) {
    await mkdir(path.resolve(DIST, icon.id)).catch(ignore);
    await mkdir(path.resolve(MODULE_DIST, icon.id)).catch(ignore);
    await writeFile(
      path.resolve(DIST, icon.id, "data.js"),
      "/* eslint-disable */\n// THIS FILE IS AUTO GENERATED\n",
      "utf8"
    ).catch(ignore);
    await writeFile(
      path.resolve(MODULE_DIST, icon.id, "data.mjs"),
      "/* eslint-disable */\n// THIS FILE IS AUTO GENERATED\n",
      "utf8"
    ).catch(ignore);
  }
}
async function writeIconModule(icon) {
  const appendFile = promisify(fs.appendFile);
  const files = await getIconFiles(icon);
  for (const file of files) {
    const svgStr = await promisify(fs.readFile)(file, "utf8");
    const iconData = await convertIconData(svgStr);

    // write like: module/fa/data.mjs
    const modRes = generateIconRow(icon, file, iconData);
    appendFile(path.resolve(MODULE_DIST, icon.id, "data.mjs"), modRes, "utf8");
    const commonRes = generateIconRow(icon, file, iconData, false);
    appendFile(path.resolve(DIST, icon.id, "data.js"), commonRes, "utf8");
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
