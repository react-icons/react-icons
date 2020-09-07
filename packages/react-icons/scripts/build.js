const path = require("path");
const performance = require("perf_hooks").performance;

const { icons } = require("../src/icons");

const taskCommon = require("./task_common");
const taskAll = require("./task_all");
const taskFiles = require("./task_files");

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
    // @react-icons/all
    const allOpt = {
      rootDir: _rootDir,
      DIST: path.resolve(_rootDir, "../_react-icons_all"),
      LIB: path.resolve(_rootDir, "../_react-icons_all/lib"),
    };
    await task("@react-icons/all initialize", async () => {
      await taskAll.dirInit(allOpt);
      await taskCommon.writeEntryPoints(allOpt);
      await taskCommon.writeIconsManifest(allOpt);
      await taskCommon.writeLicense(allOpt);
      await taskCommon.writePackageJson({ name: "react-icons" }, allOpt);
    });
    await task("@react-icons/all write icons", async () => {
      for (const icon of icons) {
        await taskAll.writeIconModule(icon, allOpt);
      }
    });

    // @react-icons/all-files
    const opt = {
      rootDir: _rootDir,
      DIST: path.resolve(_rootDir, "../_react-icons_all-files"),
      LIB: path.resolve(_rootDir, "../_react-icons_all-files/lib"),
    };
    await task("@react-icons/all-files initialize", async () => {
      await taskFiles.dirInit(opt);
      await taskCommon.writeEntryPoints(opt);
      await taskCommon.writeIconsManifest(opt);
      await taskCommon.writeLicense(opt);
      await taskCommon.writePackageJson(
        { name: "@react-icons/all-files" },
        opt
      );
    });
    await task("@react-icons/all-files write icons", async () => {
      for (const icon of icons) {
        await taskFiles.writeIconModuleFiles(icon, opt);
      }
    });

    // write to VERSIONS file
    await task("react-icons_builders write icon versions", async () => {
      await taskCommon.writeIconVersions(opt);
    });
    console.log("done");
  } catch (e) {
    console.error(e);
  }
}
main();
