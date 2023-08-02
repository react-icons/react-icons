import path from "path";
import { performance } from "perf_hooks";
import { icons } from "../src/icons";
import * as taskSvgs from "./task_svgs";

// file path
const _rootDir = path.resolve(__dirname, "../");

async function task(name, fn) {
  const start = performance.now();
  console.log(`================= ${name} =================`);
  await fn();
  const end = performance.now();
  console.log(`${name}: `, Math.floor(end - start) / 1000, "sec\n\n");
}

async function main() {
  try {
    // @react-icons/all-svgs
    const fileOpt = {
      rootDir: _rootDir,
      SVG_DIR: path.resolve(_rootDir, "../_react-icons_all-svgs"),
      XML_DIR: path.resolve(_rootDir, "../_react-icons_all-xmls"),
    };
    await task("@react-icons/all-svgs initialize", async () => {
      await taskSvgs.dirInit(fileOpt);
    });
    await task("@react-icons/all-svgs write icons", async () => {
      for (const icon of icons) {
        await taskSvgs.writeIconSvgFiles(icon, fileOpt);
      }
    });

    console.log("done");
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
main();

export {};
