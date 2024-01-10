import path from "path";
import { promises as fs } from "fs";
import camelcase from "camelcase";
import { icons } from "../src/icons";
import { iconRowTemplate } from "./templates";
import { getIconFiles, convertIconData, rmDirRecursive } from "./logics";
import { svgoConfig } from "./svgo";
import { optimize as svgoOptimize } from "svgo";
import { IconDefinition, TaskContext } from "./_types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function dirInit({ DIST, LIB, rootDir }: TaskContext) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function ignore(err: any) {
    if (err?.code === "EEXIST") return;
    throw err;
  }

  await rmDirRecursive(DIST).catch((err) => {
    if (err.code === "ENOENT") return;
    throw err;
  });
  await fs.mkdir(DIST, { recursive: true }).catch(ignore);
  await fs.mkdir(LIB).catch(ignore);

  const write = (filePath: string[], str: string) =>
    fs.writeFile(path.resolve(DIST, ...filePath), str, "utf8").catch(ignore);

  const initFiles = ["index.d.ts", "index.mjs", "index.js"];

  for (const icon of icons) {
    await fs.mkdir(path.resolve(DIST, icon.id)).catch(ignore);
  }

  for (const file of initFiles) {
    await write([file], "// THIS FILE IS AUTO GENERATED\n");
  }
}
export async function writeIconModuleFiles(
  icon: IconDefinition,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { DIST, LIB, rootDir }: TaskContext,
) {
  const exists = new Set(); // for remove duplicate

  for (const content of icon.contents) {
    const files = await getIconFiles(content);

    for (const file of files) {
      const svgStrRaw = await fs.readFile(file, "utf8");
      const svgStr = content.processWithSVGO
        ? await svgoOptimize(svgStrRaw, svgoConfig).data
        : svgStrRaw;

      const iconData = await convertIconData(svgStr, content.multiColor);

      const rawName = path.basename(file, path.extname(file));
      const pascalName = camelcase(rawName, { pascalCase: true });
      const name =
        (content.formatter && content.formatter(pascalName, file)) ||
        pascalName;
      if (exists.has(name)) continue;
      exists.add(name);

      // write like: module/fa/FaBeer.mjs
      const modRes = iconRowTemplate(icon, name, iconData, "module");
      const modHeader =
        "// THIS FILE IS AUTO GENERATED\nimport { GenIcon } from '../lib/index.mjs';\n";
      await fs.writeFile(
        path.resolve(DIST, icon.id, `${name}.mjs`),
        modHeader + modRes,
        "utf8",
      );
      const comRes = iconRowTemplate(icon, name, iconData, "common");
      const comHeader =
        "// THIS FILE IS AUTO GENERATED\nvar GenIcon = require('../lib').GenIcon\n";
      await fs.writeFile(
        path.resolve(DIST, icon.id, `${name}.js`),
        comHeader + comRes,
        "utf8",
      );
      const dtsRes = iconRowTemplate(icon, name, iconData, "dts");
      const dtsHeader =
        "// THIS FILE IS AUTO GENERATED\nimport { IconTree, IconType } from '../lib/index.mjs'\n";
      await fs.writeFile(
        path.resolve(DIST, icon.id, `${name}.d.ts`),
        dtsHeader + dtsRes,
        "utf8",
      );

      exists.add(file);
    }
  }
}
