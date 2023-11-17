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
  const ignore = (err: any) => {
    if (err?.code === "EEXIST") return;
    throw err;
  };

  await rmDirRecursive(DIST);
  await fs.mkdir(DIST, { recursive: true }).catch(ignore);
  await fs.mkdir(LIB).catch(ignore);
  await fs.mkdir(path.resolve(LIB, "esm")).catch(ignore);
  await fs.mkdir(path.resolve(LIB, "cjs")).catch(ignore);

  const write = (filePath: string[], str: string) =>
    fs.writeFile(path.resolve(DIST, ...filePath), str, "utf8").catch(ignore);

  const initFiles = ["index.d.ts", "index.esm.js", "index.js"];

  for (const icon of icons) {
    await fs.mkdir(path.resolve(DIST, icon.id)).catch(ignore);

    await write(
      [icon.id, "index.js"],
      "// THIS FILE IS AUTO GENERATED\nvar GenIcon = require('../lib').GenIcon\n",
    );
    await write(
      [icon.id, "index.esm.js"],
      "// THIS FILE IS AUTO GENERATED\nimport { GenIcon } from '../lib';\n",
    );
    await write(
      [icon.id, "index.d.ts"],
      "// THIS FILE IS AUTO GENERATED\nimport { IconTree, IconType } from '../lib'\n",
    );
    await write(
      [icon.id, "package.json"],
      JSON.stringify(
        {
          sideEffects: false,
          module: "./index.esm.js",
        },
        null,
        2,
      ) + "\n",
    );
  }

  for (const file of initFiles) {
    await write([file], "// THIS FILE IS AUTO GENERATED\n");
  }
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function writeIconModule(
  icon: IconDefinition,
  { DIST, LIB, rootDir }: TaskContext,
) {
  const exists = new Set(); // for remove duplicate
  for (const content of icon.contents) {
    const files = await getIconFiles(content);

    for (const file of files) {
      const svgStrRaw = await fs.readFile(file, "utf8");
      const svgStr = content.processWithSVGO
        ? svgoOptimize(svgStrRaw, svgoConfig).data
        : svgStrRaw;

      const iconData = await convertIconData(svgStr, content.multiColor);

      const rawName = path.basename(file, path.extname(file));
      const pascalName = camelcase(rawName, { pascalCase: true });
      const name =
        (content.formatter && content.formatter(pascalName, file)) ||
        pascalName;
      if (exists.has(name)) continue;
      exists.add(name);

      // write like: module/fa/index.esm.js
      const modRes = iconRowTemplate(icon, name, iconData, "module");
      await fs.appendFile(
        path.resolve(DIST, icon.id, "index.esm.js"),
        modRes,
        "utf8",
      );
      const comRes = iconRowTemplate(icon, name, iconData, "common");
      await fs.appendFile(
        path.resolve(DIST, icon.id, "index.js"),
        comRes,
        "utf8",
      );
      const dtsRes = iconRowTemplate(icon, name, iconData, "dts");
      await fs.appendFile(
        path.resolve(DIST, icon.id, "index.d.ts"),
        dtsRes,
        "utf8",
      );

      exists.add(file);
    }
  }
}
