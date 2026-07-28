import path from "path";
import { performance } from "perf_hooks";
import { promises as fs } from "fs";
import { buildPackageExports } from "./logics";
import { icons } from "../src/icons";
import * as taskCommon from "./task_common";
import * as taskAll from "./task_all";
import { TaskContext } from "./_types";
import {
  getGeneratedPackageName,
  writeCorePackage,
  writeGeneratedIconFilesPackage,
  writeGeneratedIconPackage,
} from "./task_packages";

// file path
const _rootDir = path.resolve(__dirname, "../");
const _generatedPackagesDir = path.resolve(
  _rootDir,
  "../../generated-packages",
);
const _generatedPackagesFilesDir = path.resolve(
  _rootDir,
  "../../generated-packages-files",
);

async function getPackageVersion() {
  const packageJson = JSON.parse(
    await fs.readFile(path.resolve(_rootDir, "package.json"), "utf8"),
  );
  return packageJson.version as string;
}

async function task(name: string, fn: () => Promise<void> | void) {
  const start = performance.now();
  console.log(`================= ${name} =================`);
  await fn();
  const end = performance.now();
  console.log(`${name}: `, Math.floor(end - start) / 1000, "sec\n\n");
}

async function main() {
  try {
    const version = await getPackageVersion();
    const reactIconsIcons = icons.filter((icon) => icon.isIncludedInReactIcons);

    // @react-icons/all
    const allOpt: TaskContext = {
      rootDir: _rootDir,
      DIST: path.resolve(_rootDir, "../_react-icons_all"),
      LIB: path.resolve(_rootDir, "../_react-icons_all/lib"),
    };
    await task("@react-icons/all initialize", async () => {
      await taskAll.dirInit(allOpt, reactIconsIcons);
      await taskCommon.writeProxyEntryPoints({
        DIST: allOpt.DIST,
        source: "@react-icons/core",
      });
      await taskCommon.writeIconsManifest(allOpt, reactIconsIcons);
      await taskCommon.writeLicense(allOpt, reactIconsIcons);
      await taskCommon.writePackageJson(
        {
          name: "react-icons",
          main: "index.js",
          module: "index.mjs",
          types: "index.d.ts",
          files: [
            "index.js",
            "index.mjs",
            "index.d.ts",
            "lib",
            ...reactIconsIcons.map((icon) => icon.id),
          ],
          exports: buildPackageExports(reactIconsIcons),
          dependencies: Object.fromEntries(
            [
              ["@react-icons/core", version],
              ...reactIconsIcons.map((icon) => [
                `@react-icons/${getGeneratedPackageName(icon)}`,
                version,
              ]),
            ].sort(([left], [right]) => left.localeCompare(right)),
          ),
        },
        allOpt,
      );
      await taskCommon.copyReadme(allOpt);
    });
    await task("@react-icons/all write icons", async () => {
      await Promise.all(
        reactIconsIcons.map((icon) => taskAll.writeIconModule(icon, allOpt)),
      );
    });

    // write to VERSIONS file
    await task("react-icons_builders write icon versions", async () => {
      await taskCommon.writeIconVersions(allOpt);
    });

    // write to d.ts files
    await task("react-icons_builders build common library", async () => {
      await taskCommon.buildLib(allOpt);
      await taskCommon.copyLib(allOpt);
    });

    await task("react-icons_builders generate scoped packages", async () => {
      await writeCorePackage(
        path.resolve(_generatedPackagesDir, "core"),
        _rootDir,
        version,
      );
      await taskCommon.writeProxyEntryPoints({
        DIST: allOpt.LIB,
        source: "@react-icons/core",
      });

      for (const icon of icons) {
        await writeGeneratedIconPackage(
          icon,
          path.resolve(_generatedPackagesDir, getGeneratedPackageName(icon)),
          _rootDir,
          version,
        );
        await writeGeneratedIconFilesPackage(
          icon,
          path.resolve(
            _generatedPackagesFilesDir,
            `${getGeneratedPackageName(icon)}_files`,
          ),
          _rootDir,
          version,
        );
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
