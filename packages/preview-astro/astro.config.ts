import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import type { PluginOption } from "vite";
import { IconsManifest } from "react-icons/lib";

// https://astro.build/config
export default defineConfig({
  base: "/react-icons",
  trailingSlash: "always",
  integrations: [react()],
  vite: {
    plugins: [reactIconsGetIconsPlugin()],
  },
});

function reactIconsGetIconsPlugin(): PluginOption {
  const virtualModuleId = "virtual:react-icons-get-icons";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "react-icons-get-icons-plugin",
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
      return undefined;
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        let codes = "export function getIcons (id) { switch (id) {";
        for (const icon of IconsManifest) {
          codes += `case "${icon.id}":\nreturn import("react-icons/${icon.id}");\n`;
        }
        codes += "}};";

        return codes;
      }
      return undefined;
    },
  };
}
