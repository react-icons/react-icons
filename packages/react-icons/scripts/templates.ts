import type { IconTree } from "src";
import type { IconDefinition } from "./_types";

export type IconRowTemplateFunction = (
  icon: IconDefinition,
  formattedName: string,
  iconData: IconTree,
  type: "module" | "common" | "dts",
  reExport?: boolean,
) => string;

export const iconRowTemplate: IconRowTemplateFunction = (
  icon,
  formattedName,
  iconData,
  type = "module",
  reExport,
) => {
  switch (type) {
    case "module":
      if (reExport) {
        return `export * from './${formattedName}';\n`;
      }
      return (
        `export function ${formattedName} (props) {\n` +
        `  return GenIcon(${JSON.stringify(iconData)})(props);\n` +
        `};\n`
      );
    case "common":
      if (reExport) {
        return (
          `const ${formattedName} = require('./${formattedName}');\n` +
          `module.exports.${formattedName} = ${formattedName};\n`
        );
      }
      return (
        `module.exports.${formattedName} = function ${formattedName} (props) {\n` +
        `  return GenIcon(${JSON.stringify(iconData)})(props);\n` +
        `};\n`
      );
    case "dts":
      return `export declare const ${formattedName}: IconType;\n`;
    default:
      throw new Error(`Unknown type: ${type}`);
  }
};
