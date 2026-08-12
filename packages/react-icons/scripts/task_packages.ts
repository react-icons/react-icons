import path from "path";
import { promises as fs } from "fs";
import camelcase from "camelcase";
import { optimize as svgoOptimize } from "svgo";
import { icons } from "../src/icons";
import { iconRowTemplate } from "./templates";
import {
  convertIconData,
  getIconFiles,
  rmDirRecursive,
  copyRecursive,
} from "./logics";
import { svgoConfig } from "./svgo";
import {
  writeEntryPoints,
  writeIconsManifest,
  writePackageJson,
} from "./task_common";

export type GeneratedIcon = {
  name: string;
  iconData: Awaited<ReturnType<typeof convertIconData>>;
};

export function getGeneratedPackageName(icon: (typeof icons)[number]): string {
  const packageName = icon.packageName;
  if (!packageName) {
    throw new Error(`No generated package name for icon set: ${icon.id}`);
  }
  return packageName;
}

function packageExports(hasLib = false) {
  const exports: Record<
    string,
    {
      types: string;
      require: string;
      import: string;
      default: string;
    }
  > = {
    ".": {
      types: "./index.d.ts",
      require: "./index.js",
      import: "./index.mjs",
      default: "./index.mjs",
    },
  };

  if (hasLib) {
    exports["./lib"] = {
      types: "./lib/index.d.ts",
      require: "./lib/index.js",
      import: "./lib/index.mjs",
      default: "./lib/index.mjs",
    };
  }

  return exports;
}

function filesPackageExports() {
  return {
    "./*": {
      types: "./*.d.ts",
      require: "./*.js",
      import: "./*.mjs",
      default: "./*.mjs",
    },
  };
}

export async function readGeneratedIcons(
  icon: (typeof icons)[number],
): Promise<GeneratedIcon[]> {
  const exists = new Set<string>();
  const generatedIcons: GeneratedIcon[] = [];
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

      generatedIcons.push({ name, iconData });
    }
  }
  return generatedIcons;
}

export async function writeCorePackage(
  dist: string,
  rootDir: string,
  version: string,
) {
  await rmDirRecursive(dist);
  await fs.mkdir(dist, { recursive: true });
  await fs.mkdir(path.resolve(dist, "lib"), { recursive: true });
  await fs.copyFile(
    path.resolve(rootDir, "LICENSE_HEADER"),
    path.resolve(dist, "LICENSE"),
  );

  await copyRecursive(
    path.resolve(rootDir, "build/lib"),
    path.resolve(dist, "lib"),
  );
  await writeIconsManifest({
    rootDir,
    DIST: dist,
    LIB: path.resolve(dist, "lib"),
  });

  await writeEntryPoints({
    DIST: dist,
    LIB: path.resolve(dist, "lib"),
    rootDir,
  });
  await writePackageJson(
    {
      name: "@react-icons/core",
      version,
      sideEffects: false,
      main: "index.js",
      module: "index.mjs",
      types: "index.d.ts",
      files: ["index.js", "index.mjs", "index.d.ts", "lib", "LICENSE"],
      exports: packageExports(true),
    },
    { DIST: dist, LIB: path.resolve(dist, "lib"), rootDir },
  );
}

export async function writeGeneratedIconPackage(
  icon: (typeof icons)[number],
  dist: string,
  rootDir: string,
  version: string,
  generatedIcons?: GeneratedIcon[],
) {
  const packageName = `@react-icons/${getGeneratedPackageName(icon)}`;
  const iconsToWrite = generatedIcons ?? (await readGeneratedIcons(icon));

  await rmDirRecursive(dist);
  await fs.mkdir(dist, { recursive: true });

  const write = (filePath: string[], str: string) =>
    fs.writeFile(path.resolve(dist, ...filePath), str, "utf8");

  await write(
    ["index.js"],
    "// THIS FILE IS AUTO GENERATED\nvar GenIcon = require('@react-icons/core').GenIcon\n",
  );
  await write(
    ["index.mjs"],
    "// THIS FILE IS AUTO GENERATED\nimport { GenIcon } from '@react-icons/core';\n",
  );
  await write(
    ["index.d.ts"],
    "// THIS FILE IS AUTO GENERATED\nimport type { IconType } from '@react-icons/core'\n",
  );

  for (const { name, iconData } of iconsToWrite) {
    const modRes = iconRowTemplate(icon, name, iconData, "module");
    await fs.appendFile(path.resolve(dist, "index.mjs"), modRes, "utf8");

    const comRes = iconRowTemplate(icon, name, iconData, "common");
    await fs.appendFile(path.resolve(dist, "index.js"), comRes, "utf8");

    const dtsRes = iconRowTemplate(icon, name, iconData, "dts");
    await fs.appendFile(path.resolve(dist, "index.d.ts"), dtsRes, "utf8");
  }

  await writePackageJson(
    {
      name: packageName,
      version,
      license: icon.license,
      sideEffects: false,
      main: "index.js",
      module: "index.mjs",
      types: "index.d.ts",
      files: ["index.js", "index.mjs", "index.d.ts"],
      exports: packageExports(false),
      dependencies: {
        "@react-icons/core": version,
      },
    },
    { DIST: dist, LIB: dist, rootDir },
  );
}

export async function writeGeneratedIconFilesPackage(
  icon: (typeof icons)[number],
  dist: string,
  rootDir: string,
  version: string,
  generatedIcons?: GeneratedIcon[],
) {
  const packageName = `@react-icons/${getGeneratedPackageName(icon)}_files`;
  const iconsToWrite = generatedIcons ?? (await readGeneratedIcons(icon));

  await rmDirRecursive(dist);
  await fs.mkdir(dist, { recursive: true });

  for (const { name, iconData } of iconsToWrite) {
    const modHeader =
      "// THIS FILE IS AUTO GENERATED\nimport { GenIcon } from '@react-icons/core';\n";
    const comHeader =
      "// THIS FILE IS AUTO GENERATED\nvar GenIcon = require('@react-icons/core').GenIcon\n";
    const dtsHeader =
      "// THIS FILE IS AUTO GENERATED\nimport type { IconType } from '@react-icons/core'\n";

    await fs.writeFile(
      path.resolve(dist, `${name}.mjs`),
      modHeader + iconRowTemplate(icon, name, iconData, "module"),
      "utf8",
    );
    await fs.writeFile(
      path.resolve(dist, `${name}.js`),
      comHeader + iconRowTemplate(icon, name, iconData, "common"),
      "utf8",
    );
    await fs.writeFile(
      path.resolve(dist, `${name}.d.ts`),
      dtsHeader + iconRowTemplate(icon, name, iconData, "dts"),
      "utf8",
    );
  }

  await writePackageJson(
    {
      name: packageName,
      version,
      license: icon.license,
      sideEffects: false,
      main: undefined,
      module: undefined,
      types: undefined,
      files: ["*.js", "*.mjs", "*.d.ts"],
      exports: filesPackageExports(),
      dependencies: {
        "@react-icons/core": version,
      },
    },
    { DIST: dist, LIB: dist, rootDir },
  );
}
