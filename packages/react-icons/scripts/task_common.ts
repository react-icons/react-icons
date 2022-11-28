/* eslint-disable @typescript-eslint/no-unused-vars */

import path from "path";
import { promises as fs } from "fs";
import findPackage from "find-package";
import { promisify } from "util";
const exec = promisify(require("child_process").exec);
import { icons } from "../src/icons";
import { getIconFiles, copyRecursive, rmDirRecursive } from "./logics";
import { IconDefinition } from "./_types";

export async function writeIconsManifest({ DIST, LIB, rootDir }) {
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

export async function writeLicense({ DIST, LIB, rootDir }) {
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

export async function writeEntryPoints({ DIST, LIB, rootDir }) {
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

interface IconsetVersion {
  icon: IconDefinition;
  version: string;
  count: number;
}

export async function writeIconVersions({ DIST, LIB, rootDir }) {
  const versions: IconsetVersion[] = [];

  // searching for icon versions from package.json and git describe command
  for (const icon of icons) {
    const files = (
      await Promise.all(icon.contents.map((content) => getIconFiles(content)))
    ).flat();

    if (files.length === 0) {
      throw new Error(`Missing path for: ${icon.name}`);
    }

    const firstDir = path.dirname(files[0]);
    const packageJson = findPackage(firstDir, true);

    let version: string;
    if (packageJson.version && !packageJson.name.includes("react-icons")) {
      version = packageJson.version;
    } else {
      const { stdout } = await exec(
        `git describe --tags || git rev-parse HEAD`,
        {
          cwd: firstDir,
        }
      );
      version = stdout.trim();
    }

    versions.push({
      icon,
      version,
      count: files.length,
    });
  }

  const emptyVersions = versions.filter((v) => v.count === 0);
  if (emptyVersions.length !== 0) {
    throw Error(
      `empty icon sets: ${emptyVersions.map((v) => v.icon).join(", ")}`
    );
  }

  const versionsStr =
    "| Icon Library | License | Version | Count |\n" +
    "| --- | --- | --- | ---: |\n" +
    versions
      .map(
        (v) =>
          `| ${[
            `[${v.icon.name}](${v.icon.projectUrl})`,
            `[${v.icon.license}](${v.icon.licenseUrl})`,
            v.version,
            v.count,
          ].join(" | ")} |`
      )
      .join("\n") +
    "\n";

  await fs.writeFile(path.resolve(rootDir, "VERSIONS"), versionsStr, "utf8");
}

export async function writePackageJson(override, { DIST, LIB, rootDir }) {
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

  const editedPackageJsonStr = JSON.stringify(packageJson, null, 2) + "\n";
  await fs.writeFile(path.resolve(DIST, "package.json"), editedPackageJsonStr);
}

export async function copyReadme({ DIST, LIB, rootDir }) {
  await fs.copyFile(
    path.resolve(rootDir, "../../README.md"),
    path.resolve(DIST, "README.md")
  );
}

export async function buildLib({ DIST, LIB, rootDir }) {
  await rmDirRecursive(path.resolve(rootDir, "build/lib"));

  const execOpt = {
    cwd: rootDir,
  };
  await Promise.all([
    exec("yarn tsc && yarn babel ./build/lib/esm -d ./build/lib/esm", execOpt),
    exec("yarn tsc -p ./tsconfig.commonjs.json", execOpt),
  ]);
}

export async function copyLib({ DIST, LIB, rootDir }) {
  await copyRecursive(path.resolve(rootDir, "build/lib"), LIB);
}
