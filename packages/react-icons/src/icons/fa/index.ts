import path from "path";
import { IconDefinition } from "../../../scripts/_types";

export const icons: IconDefinition[] = [
  {
    id: "fa",
    name: "Font Awesome Custom",
    projectUrl: "https://github.com/PREM015/react-icons",
    license: "MIT",
    licenseUrl: "https://opensource.org/licenses/MIT",
    contents: [
      {
        files: path.resolve(__dirname, "./*.svg"),
        formatter: (name: string) => `Fa${name}`,
        processWithSVGO: true,
      },
    ],
  },
];

export default icons;
