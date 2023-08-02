import path from "path";
import { promises as fs } from "fs";
import camelcase from "camelcase";
import snakecase from "snakecase";
import svg2vectordrawable from "svg2vectordrawable";
import { icons } from "../src/icons";
import { getIconFiles, rmDirRecursive } from "./logics";
import { svgo } from "./svgo";
import { IconDefinition } from "./_types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function dirInit({ SVG_DIR, XML_DIR, rootDir }) {
  const ignore = (err) => {
    if (err.code === "EEXIST") return;
    throw err;
  };

  await rmDirRecursive(SVG_DIR).catch((err) => {
    if (err.code === "ENOENT") return;
    throw err;
  });
  await rmDirRecursive(XML_DIR).catch((err) => {
    if (err.code === "ENOENT") return;
    throw err;
  });

  await fs.mkdir(XML_DIR, { recursive: true }).catch(ignore);
  await fs.mkdir(SVG_DIR, { recursive: true }).catch(ignore);

  for (const icon of icons) {
    await fs.mkdir(path.resolve(XML_DIR, icon.id)).catch(ignore);
    await fs.mkdir(path.resolve(SVG_DIR, icon.id)).catch(ignore);
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function writeIconSvgFiles(
  icon: IconDefinition,
  { SVG_DIR, XML_DIR, rootDir }
) {
  const exists = new Set(); // for remove duplicate

  for (const content of icon.contents) {
    const files = await getIconFiles(content);

    for (const file of files) {
      const svgStrRaw = await fs.readFile(file, "utf8");
      const svgStr = content.processWithSVGO
        ? await svgo.optimize(svgStrRaw).then((result) => result.data)
        : svgStrRaw;

      const rawName = path.basename(file, path.extname(file));
      const pascalName = camelcase(rawName, { pascalCase: true });
      const name =
        (content.formatter && content.formatter(pascalName, file)) ||
        pascalName;

      const snakeName = snakecase(name);
      if (exists.has(name)) continue;
      exists.add(name);

      const options = {
        fillBlack: true,
      };
      const drawableData = await svg2vectordrawable(svgStr, options);

      // write like: fa/FaBeer.svg
      await fs.writeFile(
        path.resolve(SVG_DIR, icon.id, `${name}.svg`),
        svgStr,
        "utf8"
      );

      // write like: fa/fa_beer.xml
      await fs.writeFile(
        path.resolve(XML_DIR, icon.id, `${snakeName}.xml`),
        drawableData,
        "utf8"
      );

      exists.add(file);
    }
  }
}
