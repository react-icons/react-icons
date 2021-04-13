function iconRowTemplate(icon, formattedName, iconData, type = "module") {
  switch (type) {
    case "module":
      return (
        `export function ${formattedName} (props) {\n` +
        `  return GenIcon(${JSON.stringify(iconData)})(props);\n` +
        `};\n`
      );
    case "common":
      return (
        `module.exports.${formattedName} = function ${formattedName} (props) {\n` +
        `  return GenIcon(${JSON.stringify(iconData)})(props);\n` +
        `};\n`
      );
    case "dts":
      return `export declare const ${formattedName}: IconType;\n`;
  }
}
function iconsEntryTemplate(iconId, type = "module") {
  switch (type) {
    case "module":
      return `export * from './${iconId}';\n`;
    case "dts":
      return `export * from './${iconId}';\n`;
  }
}

module.exports = {
  iconRowTemplate,
  iconsEntryTemplate,
};
