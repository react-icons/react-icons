const path = require("path");
const fs = require("fs");
const { promisify } = require("util");
const camelcase = require("camelcase");
const findPackage = require("find-package");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

const { icons } = require("../src/icons");

const { iconRowTemplate, iconsEntryTemplate } = require("./templates");
const { getIconFiles, convertIconData } = require("./logics");

export async function dirInit({ DIST, LIB, rootDir }) {
  const ignore = err => {
    if (err.code === "EEXIST") return;
    throw err;
  };

  const mkdir = promisify(fs.mkdir);
  const writeFile = promisify(fs.writeFile);

  await mkdir(DIST, { recursive: true }).catch(ignore);
  await mkdir(LIB).catch(ignore);
  await mkdir(path.resolve(LIB, "esm")).catch(ignore);
  await mkdir(path.resolve(LIB, "cjs")).catch(ignore);

  const write = (filePath, str) =>
    writeFile(path.resolve(DIST, ...filePath), str, "utf8").catch(ignore);

  const initFiles = [
    "index.d.ts",
    "index.esm.js",
    "index.js",
    "all.js",
    "all.d.ts"
  ];

  for (const icon of icons) {
    await mkdir(path.resolve(DIST, icon.id)).catch(ignore);

    await write(
      [icon.id, "index.js"],
      "// THIS FILE IS AUTO GENERATED\nvar GenIcon = require('../lib').GenIcon\n"
    );
    await write(
      [icon.id, "index.esm.js"],
      "// THIS FILE IS AUTO GENERATED\nimport { GenIcon } from '../lib';\n"
    );
    await write(
      [icon.id, "index.d.ts"],
      "import { IconTree, IconType } from '../lib'\n// THIS FILE IS AUTO GENERATED\n"
    );
    await write(
      [icon.id, "package.json"],
      JSON.stringify(
        {
          sideEffects: false,
          module: "./index.esm.js"
        },
        null,
        2
      ) + "\n"
    );
  }

  for (const file of initFiles) {
    await write([file], "// THIS FILE IS AUTO GENERATED\n");
  }
}
export async function writeIconModuleFiles(icon, { DIST, LIB, rootDir }) {
  const appendFile = promisify(fs.appendFile);
  const exists = new Set(); // for remove duplicate
  for (const content of icon.contents) {
    const files = await getIconFiles(content);
    icon._count = files.length;

    const entryModule = iconsEntryTemplate(icon.id, "module");
    await appendFile(path.resolve(DIST, "all.js"), entryModule, "utf8");
    const entryDts = iconsEntryTemplate(icon.id, "dts");
    await appendFile(path.resolve(DIST, "all.d.ts"), entryDts, "utf8");

    for (const file of files) {
      const svgStr = await promisify(fs.readFile)(file, "utf8");
      const iconData = await convertIconData(svgStr, content.multiColor);

      const rawName = path.basename(file, path.extname(file));
      const pascalName = camelcase(rawName, { pascalCase: true });
      const name =
        (content.formatter && content.formatter(pascalName)) || pascalName;
      if (exists.has(name)) continue;
      exists.add(name);

      // write like: module/fa/index.esm.js
      const modRes = iconRowTemplate(icon, name, iconData, "module");
      await appendFile(
        path.resolve(DIST, icon.id, "index.esm.js"),
        modRes,
        "utf8"
      );
      const comRes = iconRowTemplate(icon, name, iconData, "common");
      await appendFile(path.resolve(DIST, icon.id, "index.js"), comRes, "utf8");
      const dtsRes = iconRowTemplate(icon, name, iconData, "dts");
      await appendFile(
        path.resolve(DIST, icon.id, "index.d.ts"),
        dtsRes,
        "utf8"
      );

      exists.add(file);
    }
  }
}

// export async function writeIconsManifest({ DIST, LIB, rootDir }) {
//   const writeFile = promisify(fs.writeFile);
//   const copyFile = promisify(fs.copyFile);

//   const writeObj = icons.map(icon => ({
//     id: icon.id,
//     name: icon.name,
//     projectUrl: icon.projectUrl,
//     license: icon.license,
//     licenseUrl: icon.licenseUrl
//   }));
//   const manifest = JSON.stringify(writeObj, null, 2);
//   await writeFile(
//     path.resolve(LIB, "esm", "iconsManifest.js"),
//     `export var IconsManifest = ${manifest}`,
//     "utf8"
//   );
//   await writeFile(
//     path.resolve(LIB, "cjs", "iconsManifest.js"),
//     `module.exports.IconsManifest = ${manifest}`,
//     "utf8"
//   );
//   await copyFile(
//     "src/iconsManifest.d.ts",
//     path.resolve(LIB, "esm", "iconsManifest.d.ts")
//   );
//   await copyFile(
//     "src/iconsManifest.d.ts",
//     path.resolve(LIB, "cjs", "iconsManifest.d.ts")
//   );
//   await copyFile("src/package.json", path.resolve(LIB, "package.json"));
// }

// export async function writeLicense({ DIST, LIB, rootDir }) {
//   const copyFile = promisify(fs.copyFile);
//   const appendFile = promisify(fs.appendFile);

//   const iconLicenses =
//     icons
//       .map(icon =>
//         [
//           `${icon.name} - ${icon.projectUrl}`,
//           `License: ${icon.license} ${icon.licenseUrl}`
//         ].join("\n")
//       )
//       .join("\n\n") + "\n";

//   await copyFile(
//     path.resolve(rootDir, "LICENSE_HEADER"),
//     path.resolve(DIST, "LICENSE")
//   );
//   await appendFile(path.resolve(DIST, "LICENSE"), iconLicenses, "utf8");
// }

// export async function writeEntryPoints({ DIST, LIB, rootDir }) {
//   const appendFile = promisify(fs.appendFile);
//   const generateEntryCjs = function() {
//     return `module.exports = require('./lib/cjs/index.js');`;
//   };
//   const generateEntryMjs = function(filename = "index.js") {
//     return `import * as m from './lib/esm/${filename}'
// export default m
//     `;
//   };
//   await appendFile(path.resolve(DIST, "index.js"), generateEntryCjs(), "utf8");
//   await appendFile(
//     path.resolve(DIST, "index.esm.js"),
//     generateEntryMjs(),
//     "utf8"
//   );
//   await appendFile(
//     path.resolve(DIST, "index.d.ts"),
//     generateEntryMjs("index.d.ts"),
//     "utf8"
//   );
// }

// export async function writeIconVersions({ DIST, LIB, rootDir }) {
//   const versions = [];

//   // searching for icon versions from package.json and git describe command
//   for (const icon of icons) {
//     const files = (
//       await Promise.all(icon.contents.map(content => getIconFiles(content)))
//     ).flat();

//     const firstDir = path.dirname(files[0]);
//     const packageJson = findPackage(firstDir, true);

//     let gitVersion;
//     if (!packageJson.version) {
//       const { stdout } = await exec(
//         `cd ${firstDir} && git describe --tags || cd ${firstDir} && git rev-parse HEAD`
//       );
//       gitVersion = stdout.trim();
//       console.log("stdout", icon.id, stdout);
//     }

//     versions.push({
//       icon,
//       version: packageJson.version || gitVersion,
//       count: icon._count // set by writeIconModule
//     });
//   }

//   const versionsStr =
//     "Icon Library|License|Version|Count\n" +
//     "---|---|---|---\n" +
//     versions
//       .map(v =>
//         [
//           `[${v.icon.name}](${v.icon.projectUrl})`,
//           `[${v.icon.license}](${v.icon.licenseUrl})`,
//           v.version,
//           v.count
//         ].join("|")
//       )
//       .join("\n") +
//     "\n";

//   await fs.promises.writeFile(
//     path.resolve(rootDir, "VERSIONS"),
//     versionsStr,
//     "utf8"
//   );
// }

// export async function writePackageJson({ DIST, LIB, rootDir }) {
//   const writeFile = promisify(fs.writeFile);
//   const readFile = promisify(fs.readFile);

//   const packageJsonStr = await readFile(
//     path.resolve(rootDir, "package.json"),
//     "utf-8"
//   );
//   const packageJson = JSON.parse(packageJsonStr);

//   delete packageJson.private;
//   delete packageJson.dependencies;
//   delete packageJson.devDependencies;
//   delete packageJson.scripts;

//   packageJson.name = "react-icons";

//   const editedPackageJsonStr = JSON.stringify(packageJson, null, 2);
//   writeFile(path.resolve(DIST, "package.json"), editedPackageJsonStr);
// }
