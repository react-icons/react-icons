import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { IconsManifest } from "@react-icons/core/lib";

// https://astro.build/config
export default defineConfig({
  base: "/react-icons",
  trailingSlash: "always",
  integrations: [react()],
  vite: {
    plugins: [reactIconsGetIconsPlugin()],
  },
});

function reactIconsGetIconsPlugin() {
  const virtualModuleId = "virtual:react-icons-get-icons";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "react-icons-get-icons-plugin",
    resolveId(id: string) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
      return undefined;
    },
    load(id: string) {
      if (id === resolvedVirtualModuleId) {
        let codes = "export function getIcons (id) { switch (id) {";
        for (const icon of IconsManifest) {
          const packageName = icon.isIncludedInReactIcons
            ? `react-icons/${icon.id}`
            : `@react-icons/${icon.packageName}`;
          codes += `case "${icon.id}":\nreturn import("${packageName}");\n`;
        }
        codes += "}};";

        return codes;
      }
      return undefined;
    },
  };
}
