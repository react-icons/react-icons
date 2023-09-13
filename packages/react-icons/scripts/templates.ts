import { IconDefinition } from "./_types";

export function iconRowTemplate(
  icon: IconDefinition,
  formattedName: string,
  iconData,
  type = "module"
) {
  const {name, license, licenseUrl, ...iconDefinition} = icon;
  switch (type) {
    case "module":
      return (
        `export function ${formattedName} (props) {\n` +
        `  return GenIcon(${JSON.stringify({name, license, licenseUrl})}, ${JSON.stringify(iconData)})(props);\n` +
        `};\n`
      );
    case "common":
      return (
        `module.exports.${formattedName} = function ${formattedName} (props) {\n` +
        `  return GenIcon(${JSON.stringify({name, license, licenseUrl})}, ${JSON.stringify(iconData)})(props);\n` +
        `};\n`
      );
    case "dts":
      return `export declare const ${formattedName}: IconType;\n`;
    default:
      throw new Error(`Unknown type: ${type}`);
  }
}
