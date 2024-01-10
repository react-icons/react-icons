import type { IconTree } from "src";
import type { IconDefinition } from "./_types";

export function iconRowTemplate(
  icon: IconDefinition,
  formattedName: string,
  iconData: IconTree,
  type = "module",
) {
  switch (type) {
    case "module":
      return (
        `export const ${formattedName} = React.forwardRef((props, ref) =>
          React.createElement(GenIcon, { ...props, ref, iconTree: ${JSON.stringify(iconData)} }));
      \n`
      );
    case "common":
      return (
        `module.exports.${formattedName} = React.forwardRef((props, ref) =>
          React.createElement(GenIcon, { ...props, ref, iconTree: ${JSON.stringify(iconData)} }));\n`
      );
    case "dts":
      return `export declare const ${formattedName}: IconType;\n`;
    default:
      throw new Error(`Unknown type: ${type}`);
  }
}
