const path = require("path");
const fs = require("fs").promises;
const findPackage = require("find-package");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

const { icons } = require("../src/icons");

const { getIconFiles } = require("./logics");

async function writeIconsManifest({ DIST, LIB, rootDir }) {
  const writeObj = icons.map((icon) => ({
    id: icon.id,
    name: icon.name,
    projectUrl: icon.projectUrl,
    license: icon.license,
    licenseUrl: icon.licenseUrl,
  }));
  const manifest = JSON.stringify(writeObj, null, 2);
  await fs.writeFile(
    path.resolve(LIB, "esm", "iconsManifest.js"),
    `export var IconsManifest = ${manifest}`,
    "utf8"
  );
  await fs.writeFile(
    path.resolve(LIB, "cjs", "iconsManifest.js"),
    `module.exports.IconsManifest = ${manifest}`,
    "utf8"
  );
  await fs.copyFile(
    "src/iconsManifest.d.ts",
    path.resolve(LIB, "esm", "iconsManifest.d.ts")
  );
  await fs.copyFile(
    "src/iconsManifest.d.ts",
    path.resolve(LIB, "cjs", "iconsManifest.d.ts")
  );
  await fs.copyFile("src/package.json", path.resolve(LIB, "package.json"));
}

async function writeLicense({ DIST, LIB, rootDir }) {
  const iconLicenses =
    icons
      .map((icon) =>
        [
          `${icon.name} - ${icon.projectUrl}`,
          `License: ${icon.license} ${icon.licenseUrl}`,
        ].join("\n")
      )
      .join("\n\n") + "\n";

  await fs.copyFile(
    path.resolve(rootDir, "LICENSE_HEADER"),
    path.resolve(DIST, "LICENSE")
  );
  await fs.appendFile(path.resolve(DIST, "LICENSE"), iconLicenses, "utf8");
}

async function writeEntryPoints({ DIST, LIB, rootDir }) {
  const generateEntryCjs = function () {
    return `module.exports = require('./lib/cjs/index.js');`;
  };
  const generateEntryMjs = function (filename = "index.js") {
    return `import * as m from './lib/esm/${filename}'
export default m
    `;
  };
  await fs.appendFile(
    path.resolve(DIST, "index.js"),
    generateEntryCjs(),
    "utf8"
  );
  await fs.appendFile(
    path.resolve(DIST, "index.esm.js"),
    generateEntryMjs(),
    "utf8"
  );
  await fs.appendFile(
    path.resolve(DIST, "index.d.ts"),
    generateEntryMjs("index.d.ts"),
    "utf8"
  );
}

async function writeIconVersions({ DIST, LIB, rootDir }) {
  const versions = [];

  // searching for icon versions from package.json and git describe command
  for (const icon of icons) {
    const files = (
      await Promise.all(icon.contents.map((content) => getIconFiles(content)))
    ).flat();

    const firstDir = path.dirname(files[0]);
    const packageJson = findPackage(firstDir, true);

    let gitVersion;
    if (!packageJson.version) {
      const { stdout } = await exec(
        `cd ${firstDir} && git describe --tags || cd ${firstDir} && git rev-parse HEAD`
      );
      gitVersion = stdout.trim();
    }

    versions.push({
      icon,
      version: packageJson.version || gitVersion,
      count: files.length,
    });
  }

  const versionsStr =
    "Icon Library|License|Version|Count\n" +
    "---|---|---|---\n" +
    versions
      .map((v) =>
        [
          `[${v.icon.name}](${v.icon.projectUrl})`,
          `[${v.icon.license}](${v.icon.licenseUrl})`,
          v.version,
          v.count,
        ].join("|")
      )
      .join("\n") +
    "\n";

  await fs.writeFile(path.resolve(rootDir, "VERSIONS"), versionsStr, "utf8");
}

async function writePackageJson(override, { DIST, LIB, rootDir }) {
  const packageJsonStr = await fs.readFile(
    path.resolve(rootDir, "package.json"),
    "utf-8"
  );
  let packageJson = JSON.parse(packageJsonStr);

  delete packageJson.private;
  delete packageJson.dependencies;
  delete packageJson.devDependencies;
  delete packageJson.scripts;

  packageJson = {
    ...packageJson,
    ...override,
  };

  const editedPackageJsonStr = JSON.stringify(packageJson, null, 2);
  fs.writeFile(path.resolve(DIST, "package.json"), editedPackageJsonStr);
}

module.exports = {
  writeIconsManifest,
  writeLicense,
  writeEntryPoints,
  writeIconVersions,
  writePackageJson,
};
