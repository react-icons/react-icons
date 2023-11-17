import { Config } from "svgo";

export const svgoConfig: Config = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
          convertColors: {
            currentColor: true,
          },
        },
      },
    },
    {
      name: "convertStyleToAttrs",
    },
    {
      name: "removeDimensions",
    },
    {
      name: "removeAttributesBySelector",
      params: {
        selector: "*:not(svg)",
        attributes: ["stroke"],
      },
    },
    {
      name: "removeAttrs",
      params: { attrs: "data.*" },
    },
  ],
};
