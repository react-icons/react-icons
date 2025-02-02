import path from "path";
import { promises as fs } from "fs";
import { icons } from "../src/icons";
import { IconDefinition, TaskContext } from "./_types";
import { getIconFiles, convertIconData } from "./logics";
import { optimize as svgoOptimize } from "svgo";
import { svgoConfig } from "./svgo";
import camelcase from "camelcase";

interface ScopedPackageOptions extends TaskContext {
  version: string;
  baseScope: string;
}

async function generateScopedPackage(
  icon: IconDefinition,
  { DIST, version, baseScope }: ScopedPackageOptions,
) {
  const packageDir = path.join(DIST, icon.id);

  // Create package directory
  await fs.mkdir(packageDir, { recursive: true });

  // Generate package.json
  const packageJson = {
    name: `${baseScope}/${icon.id}`,
    version,
    description: `${icon.name} icons for react-icons`,
    author: "Goran Gajic",
    license: icon.license,
    main: "lib/index.js",
    module: "lib/index.mjs",
    types: "lib/index.d.ts",
    sideEffects: false,
    repository: {
      type: "git",
      url: "git+ssh://git@github.com:react-icons/react-icons.git",
    },
    keywords: ["react", "icons", icon.id, icon.name.toLowerCase()],
    peerDependencies: {
      react: "*",
    },
    dependencies: {
      "@react-icons/core": version,
    },
  };

  await fs.writeFile(
    path.join(packageDir, "package.json"),
    JSON.stringify(packageJson, null, 2),
  );

  // Generate README
  const readme = `# ${icon.name} Icons for React

Part of [react-icons](https://react-icons.github.io/react-icons) - ${icon.projectUrl}

[👉 Browse all ${icon.name} icons](https://react-icons.github.io/react-icons/icons/${icon.id}/)

## Installation

\`\`\`bash
npm install ${packageJson.name}
# or
yarn add ${packageJson.name}
\`\`\`

## Usage

\`\`\`jsx
import { IconName } from "${packageJson.name}";

function MyComponent() {
  return (
    <div>
      <IconName />
      {/* with props */}
      <IconName size={32} color="red" title="my icon" />
    </div>
  );
}
\`\`\`

### Configuration

Use React Context to configure icons globally:

\`\`\`jsx
import { IconContext } from "@react-icons/core";

function App() {
  return (
    <IconContext.Provider value={{ 
      color: "blue", 
      size: "1.5em",
      style: { verticalAlign: 'middle' }
    }}>
      <div>
        <IconName /> {/* This icon will be blue, 1.5em, and vertically aligned */}
      </div>
    </IconContext.Provider>
  );
}
\`\`\`

| Key         | Default               | Notes                              |
| ----------- | --------------------- | ---------------------------------- |
| \`color\`     | \`undefined\` (inherit) | Icon color                         |
| \`size\`      | \`1em\`                | Icon size                          |
| \`className\` | \`undefined\`          | Additional CSS classes             |
| \`style\`     | \`undefined\`          | Additional inline styles           |
| \`attr\`      | \`undefined\`          | Additional SVG attributes          |
| \`title\`     | \`undefined\`          | Icon title for accessibility       |

## Tree Shaking

This package supports tree shaking. Only the icons you use will be included in your final bundle.

## Contributing

If you'd like to contribute to this package or report issues, please visit our [GitHub repository](https://github.com/react-icons/react-icons).

## License

${icon.license} - ${icon.licenseUrl}

Part of [react-icons](https://react-icons.github.io/react-icons). See the full documentation for more information.
`;

  await fs.writeFile(path.join(packageDir, "README.md"), readme);

  // Create lib directory for compiled files
  const libDir = path.join(packageDir, "lib");
  await fs.mkdir(libDir, { recursive: true });

  // Generate entry points
  const indexTypes = `import type { IconType } from "@react-icons/core";\n\n`;
  const indexMjs = `import { GenIcon } from "@react-icons/core";\n\n`;
  const indexCjs = `const { GenIcon } = require("@react-icons/core");\n\n`;

  let typeExports = "";
  let mjsExports = "";
  let cjsExports = "";

  // Process icons
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

      // Add to entry point exports
      typeExports += `export declare const ${name}: IconType;\n`;

      mjsExports +=
        `export function ${name}(props) {\n` +
        `  return GenIcon(${JSON.stringify(iconData)})(props);\n` +
        `};\n\n`;

      cjsExports +=
        `module.exports.${name} = function ${name}(props) {\n` +
        `  return GenIcon(${JSON.stringify(iconData)})(props);\n` +
        `};\n\n`;
    }
  }

  // Write entry point files
  await fs.writeFile(path.join(libDir, "index.d.ts"), indexTypes + typeExports);
  await fs.writeFile(path.join(libDir, "index.mjs"), indexMjs + mjsExports);
  await fs.writeFile(path.join(libDir, "index.js"), indexCjs + cjsExports);
}

export async function buildScopedPackages(options: ScopedPackageOptions) {
  // Create core package with shared functionality
  await generateCorePackage(options);

  // Generate individual icon packages
  for (const icon of icons) {
    await generateScopedPackage(icon, options);
  }
}

async function generateCorePackage({
  DIST,
  version,
  baseScope,
}: ScopedPackageOptions) {
  const coreDir = path.join(DIST, "core");
  await fs.mkdir(coreDir, { recursive: true });

  // Core package.json
  const corePackage = {
    name: `${baseScope}/core`,
    version,
    description: "Core functionality for react-icons",
    author: "Goran Gajic",
    license: "MIT",
    main: "lib/index.js",
    module: "lib/index.mjs",
    types: "lib/index.d.ts",
    sideEffects: false,
    peerDependencies: {
      react: "*",
    },
  };

  await fs.writeFile(
    path.join(coreDir, "package.json"),
    JSON.stringify(corePackage, null, 2),
  );

  // Copy core functionality
  const libDir = path.join(coreDir, "lib");
  await fs.mkdir(libDir, { recursive: true });

  // Copy required core files (iconBase.tsx, iconContext.tsx etc.)
  const coreFiles = ["iconBase.tsx", "iconContext.tsx"];
  for (const file of coreFiles) {
    await fs.copyFile(
      path.join(process.cwd(), "src", file),
      path.join(libDir, file),
    );
  }
}
