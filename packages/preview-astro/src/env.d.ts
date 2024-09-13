// /// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "virtual:react-icons-get-icons" {
  function getIcons(
    id: string,
  ): Promise<{ [name: string]: React.ComponentType }>;
}
