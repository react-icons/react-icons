import type { IconManifestType } from "@react-icons/core";

export type ImportStyle = {
  kind: "default" | "scoped" | "files";
  packageName: string;
  importPath: string;
};

export function getImportStyles(manifest: IconManifestType) {
  const styles: ImportStyle[] = [
    {
      kind: "scoped",
      packageName: `@react-icons/${manifest.packageName}`,
      importPath: `@react-icons/${manifest.packageName}`,
    },
    {
      kind: "files",
      packageName: `@react-icons/${manifest.packageName}_files`,
      importPath: `@react-icons/${manifest.packageName}_files`,
    },
  ];
  if (manifest.isIncludedInReactIcons) {
    styles.unshift({
      kind: "default",
      packageName: "react-icons",
      importPath: `react-icons/${manifest.id}`,
    });
  }
  return styles;
}

export function getIconImportPath(style: ImportStyle, iconName: string) {
  return style.kind === "files"
    ? `${style.importPath}/${iconName}`
    : style.importPath;
}
