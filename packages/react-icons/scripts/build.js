const path = require("path");

const { icons } = require("../src/icons");

const taskAll = require("./task_all");
const taskFiles = require("./task_files");

// file path
const _rootDir = path.resolve(__dirname, "../");
const _DIST = path.resolve(_rootDir, "../_react-icons_all");
const _LIB = path.resolve(_rootDir, "../_react-icons_all/lib");

async function main() {
  try {
    // react-icons@all
    const allOpt = { DIST: _DIST, LIB: _LIB, rootDir: _rootDir };
    await taskAll.dirInit(allOpt);
    await taskAll.writeEntryPoints(allOpt);
    await taskAll.writeLicense(allOpt);
    await taskAll.writeIconsManifest(allOpt);
    for (const icon of icons) {
      await taskAll.writeIconModule(icon, allOpt);
    }
    await taskAll.writeIconVersions(allOpt); // depend by writeIconModule
    await taskAll.writePackageJson(allOpt);

    // react-icons@all-files
    const filesDist = path.resolve(_rootDir, "../_react-icons_all-files");
    const filesLib = path.resolve(_rootDir, "../_react-icons_all-files/lib");
    const opt = { DIST: filesDist, LIB: filesLib, rootDir: _rootDir };
    await taskFiles.dirInit(opt);
    // await writeEntryPoints(opt);
    // await writeLicense(opt);
    // await writeIconsManifest(opt);
    for (const icon of icons) {
      await taskFiles.writeIconModuleFiles(icon, opt);
    }
    // await writeIconVersions(opt); // depend by writeIconModule
    // await writePackageJson(opt);
    console.log("done");
  } catch (e) {
    console.error(e);
  }
}
main();
