import type { IconManifestType } from "@react-icons/core";

export type ImportStyle = {
  kind: "default" | "scoped";
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
