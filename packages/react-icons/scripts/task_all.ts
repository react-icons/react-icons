import path from "path";
import { promises as fs } from "fs";
import { icons } from "../src/icons";
import { rmDirRecursive } from "./logics";
import { writeProxyEntryPoints } from "./task_common";
import { TaskContext } from "./_types";
import { getGeneratedPackageName } from "./task_packages";

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

  const write = (filePath: string[], str: string) =>
    fs.writeFile(path.resolve(DIST, ...filePath), str, "utf8").catch(ignore);

  const initFiles = ["index.d.ts", "index.mjs", "index.js"];

  for (const icon of icons) {
    await fs.rm(path.resolve(DIST, icon.id), {
      recursive: true,
      force: true,
    });
    await fs.mkdir(path.resolve(DIST, icon.id)).catch(ignore);

    await write(
      [icon.id, "package.json"],
      JSON.stringify(
        {
          sideEffects: false,
          module: "./index.mjs",
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

export async function writeIconModule(
  icon: (typeof icons)[number],
  { DIST }: TaskContext,
) {
  await fs.mkdir(path.resolve(DIST, icon.id), { recursive: true });
  await writeProxyEntryPoints({
    DIST: path.resolve(DIST, icon.id),
    source: `@react-icons/${getGeneratedPackageName(icon)}`,
  });
}
