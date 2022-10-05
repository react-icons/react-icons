import * as RiLib from "react-icons/index";

export const ALL_ICONS = RiLib["IconsManifest"];

export const getIconById = (id: string) => {
  return ALL_ICONS.find((i) => i.id === id);
};
