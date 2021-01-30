const path = require("path");
const fs = require("fs").promises;
const camelcase = require("camelcase");

const { icons } = require("../src/icons");

const { iconRowTemplate } = require("./templates");
const { getIconFiles, convertIconData, rmDirRecursive } = require("./logics");
const { svgo } = require("./svgo");

async function dirInit({ DIST, LIB, rootDir }) {
  const ignore = (err) => {
    if (err.code === "EEXIST") return;
    throw err;
  };

  await rmDirRecursive(DIST).catch((err) => {
    if (err.code === "ENOENT") return;
    throw err;
  });
  await fs.mkdir(DIST, { recursive: true }).catch(ignore);
  await fs.mkdir(LIB).catch(ignore);
  await fs.mkdir(path.resolve(LIB, "esm")).catch(ignore);
  await fs.mkdir(path.resolve(LIB, "cjs")).catch(ignore);

  const write = (filePath, str) =>
    fs.writeFile(path.resolve(DIST, ...filePath), str, "utf8").catch(ignore);

  const initFiles = ["index.d.ts", "index.esm.js", "index.js"];

  for (const icon of icons) {
    await fs.mkdir(path.resolve(DIST, icon.id)).catch(ignore);
  }

  for (const file of initFiles) {
    await write([file], "// THIS FILE IS AUTO GENERATED\n");
  }
}
async function writeIconModuleFiles(icon, { DIST, LIB, rootDir }) {
  const exists = new Set(); // for remove duplicate

  for (const content of icon.contents) {
    const files = await getIconFiles(content);

    for (const file of files) {
      const svgStrRaw = await fs.readFile(file, "utf8");
      const svgStr = content.processWithSVGO
        ? await svgo.optimize(svgStrRaw).then((result) => result.data)
        : svgStrRaw;

      const iconData = await convertIconData(svgStr, content.multiColor);

      const rawName = path.basename(file, path.extname(file));
      const pascalName = camelcase(rawName, { pascalCase: true });
      const name =
        (content.formatter && content.formatter(pascalName, file)) ||
        pascalName;
      if (exists.has(name)) continue;
      exists.add(name);

      // write like: module/fa/FaBeer.esm.js
      const modRes = iconRowTemplate(icon, name, iconData, "module");
      const modHeader =
        "// THIS FILE IS AUTO GENERATED\nimport { GenIcon } from '../lib';\n";
      await fs.writeFile(
        path.resolve(DIST, icon.id, `${name}.esm.js`),
        modHeader + modRes,
        "utf8"
      );
      const comRes = iconRowTemplate(icon, name, iconData, "common");
      const comHeader =
        "// THIS FILE IS AUTO GENERATED\nvar GenIcon = require('../lib').GenIcon\n";
      await fs.writeFile(
        path.resolve(DIST, icon.id, `${name}.js`),
        comHeader + comRes,
        "utf8"
      );
      const dtsRes = iconRowTemplate(icon, name, iconData, "dts");
      const dtsHeader =
        "// THIS FILE IS AUTO GENERATED\nimport { IconTree, IconType } from '../lib'\n";
      await fs.writeFile(
        path.resolve(DIST, icon.id, `${name}.d.ts`),
        dtsHeader + dtsRes,
        "utf8"
      );

      exists.add(file);
    }
  }
}

module.exports = {
  dirInit,
  writeIconModuleFiles,
};
