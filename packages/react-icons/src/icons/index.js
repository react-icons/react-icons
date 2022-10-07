const path = require("path");
const camelcase = require("camelcase");
const glob = require("glob-promise");

module.exports = {
  icons: [
    {
      id: "ci",
      name: "Circum Icons",
      contents: [
        {
          files: path.resolve(__dirname, "Circum-Icons/svg/*.svg"),
          formatter: (name) =>
            `Ci${name}`.replace(/_/g, "").replace(/&/g, "And"),
        },
      ],
      projectUrl: "https://circumicons.com/",
      license: "MPL-2.0 license",
      licenseUrl:
        "https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE",
    },
    {
      id: "fa",
      name: "Font Awesome",
      contents: [
        {
          files: path.resolve(
            __dirname,
            "fontawesome/svgs/+(brands|solid)/*.svg"
          ),
          formatter: (name) => `Fa${name}`,
        },
        {
          files: path.resolve(__dirname, "fontawesome/svgs/regular/*.svg"),
          formatter: (name) => `FaReg${name}`,
        },
      ],
      projectUrl: "https://fontawesome.com/",
      license: "CC BY 4.0 License",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    },
    {
      id: "io",
      name: "Ionicons 4",
      contents: [
        {
          files: path.resolve(
            path.dirname(require.resolve("ionicons")),
            "collection/icon/svg/*.svg"
          ),
          formatter: (name) => `Io${name}`,
        },
      ],
      projectUrl: "https://ionicons.com/",
      license: "MIT",
      licenseUrl: "https://github.com/ionic-team/ionicons/blob/master/LICENSE",
    },
    {
      id: "io5",
      name: "Ionicons 5",
      contents: [
        {
          files: path.resolve(
            __dirname,
            "../../../../node_modules/ionicons-5/dist/svg/*.svg"
          ),
          formatter: (name) => `Io${name}`,
          processWithSVGO: true,
        },
      ],
      projectUrl: "https://ionicons.com/",
      license: "MIT",
      licenseUrl: "https://github.com/ionic-team/ionicons/blob/master/LICENSE",
    },
    {
      id: "md",
      name: "Material Design icons",
      contents: [
        {
          files: async () => {
            const normal = await glob(
              path.resolve(
                __dirname,
                "material-design-icons/src/*/*/materialicons/24px.svg"
              )
            );

            const twotone = await glob(
              path.resolve(
                __dirname,
                "material-design-icons/src/*/*/materialiconstwotone/24px.svg"
              )
            );
            return [
              ...normal,
              ...twotone.filter(
                (file) => !normal.includes(file.replace("twotone/", "/"))
              ),
            ];
          },
          formatter: (name, file) =>
            `Md${camelcase(
              file.replace(
                /^.*\/([^/]+)\/materialicons[^/]*\/24px.svg$/i,
                "$1"
              ),
              { pascalCase: true }
            )}`,
          processWithSVGO: true,
        },
        {
          files: path.resolve(
            __dirname,
            "material-design-icons/src/*/*/materialiconsoutlined/24px.svg"
          ),
          formatter: (name, file) =>
            `MdOutline${camelcase(
              file.replace(
                /^.*\/([^/]+)\/materialicons[^/]*\/24px.svg$/i,
                "$1"
              ),
              { pascalCase: true }
            )}`,
          processWithSVGO: true,
        },
      ],
      projectUrl: "http://google.github.io/material-design-icons/",
      license: "Apache License Version 2.0",
      licenseUrl:
        "https://github.com/google/material-design-icons/blob/master/LICENSE",
    },
    {
      id: "ti",
      name: "Typicons",
      contents: [
        {
          files: path.resolve(__dirname, "typicons/src/svg/*.svg"),
          formatter: (name) => `Ti${name}`,
        },
      ],
      projectUrl: "http://s-ings.com/typicons/",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    },
    {
      id: "go",
      name: "Github Octicons icons",
      contents: [
        {
          files: path.resolve(
            path.dirname(require.resolve("octicons")),
            "build/svg/*.svg"
          ),
          formatter: (name) => `Go${name}`,
        },
      ],
      projectUrl: "https://octicons.github.com/",
      license: "MIT",
      licenseUrl: "https://github.com/primer/octicons/blob/master/LICENSE",
    },
    {
      id: "fi",
      name: "Feather",
      contents: [
        {
          files: path.resolve(
            path.dirname(require.resolve("feather-icons")),
            "icons/*.svg"
          ),
          formatter: (name) => `Fi${name}`,
        },
      ],
      projectUrl: "https://feathericons.com/",
      license: "MIT",
      licenseUrl: "https://github.com/feathericons/feather/blob/master/LICENSE",
    },
    {
      id: "gi",
      name: "Game Icons",
      contents: [
        {
          files: path.resolve(__dirname, "game-icons-inverted/all-icons/*.svg"),
          formatter: (name) => `Gi${name}`,
        },
      ],
      projectUrl: "https://game-icons.net/",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    },
    {
      id: "wi",
      name: "Weather Icons",
      contents: [
        {
          files: path.resolve(__dirname, "weather-icons/svg/*.svg"),
          formatter: (name) => name,
        },
      ],
      projectUrl: "https://erikflowers.github.io/weather-icons/",
      license: "SIL OFL 1.1",
      licenseUrl: "http://scripts.sil.org/OFL",
    },
    {
      id: "di",
      name: "Devicons",
      contents: [
        {
          files: path.resolve(__dirname, "devicons/!SVG/*.svg"),
          formatter: (name) => `Di${name}`,
        },
      ],
      projectUrl: "https://vorillaz.github.io/devicons/",
      license: "MIT",
      licenseUrl: "https://opensource.org/licenses/MIT",
    },
    {
      id: "ai",
      name: "Ant Design Icons",
      contents: [
        {
          files: path.resolve(
            __dirname,
            "ant-design-icons/packages/icons-svg/svg/filled/*.svg"
          ),
          formatter: (name) => `AiFill${name}`,
        },
        {
          files: path.resolve(
            __dirname,
            "ant-design-icons/packages/icons-svg/svg/outlined/*.svg"
          ),
          formatter: (name) => `AiOutline${name}`,
        },
        {
          files: path.resolve(
            __dirname,
            "ant-design-icons/packages/icons-svg/svg/twotone/*.svg"
          ),
          formatter: (name) => `AiTwotone${name}`,
        },
      ],
      projectUrl: "https://github.com/ant-design/ant-design-icons",
      license: "MIT",
      licenseUrl: "https://opensource.org/licenses/MIT",
    },
    {
      id: "bs",
      name: "Bootstrap Icons",
      contents: [
        {
          files: path.resolve(
            __dirname,
            "bootstrap/icons/*!(-reverse)-fill.svg"
          ),
          formatter: (name) => `BsFill${name}`,
        },
        {
          files: path.resolve(
            __dirname,
            "bootstrap/icons/*-reverse!(-fill).svg"
          ),
          formatter: (name) => `BsReverse${name}`,
        },
        {
          files: path.resolve(
            __dirname,
            "bootstrap/icons/*!(-fill|-reverse|reverse-).svg"
          ),
          formatter: (name) => `Bs${name}`,
        },
      ],
      projectUrl: "https://github.com/twbs/icons",
      license: "MIT",
      licenseUrl: "https://opensource.org/licenses/MIT",
    },
    {
      id: "ri",
      name: "Remix Icon",
      contents: [
        {
          files: path.resolve(__dirname, "RemixIcon/icons/*/*.svg"),
          formatter: (name) => `Ri${name}`,
        },
      ],
      projectUrl: "https://github.com/Remix-Design/RemixIcon",
      license: "Apache License Version 2.0",
      licenseUrl: "http://www.apache.org/licenses/",
    },
    {
      id: "fc",
      name: "Flat Color Icons",
      contents: [
        {
          files: path.resolve(__dirname, "flat-color-icons/svg/*.svg"),
          formatter: (name) => `Fc${name}`,
          multiColor: true,
        },
      ],
      projectUrl: "https://github.com/icons8/flat-color-icons",
      license: "MIT",
      licenseUrl: "https://opensource.org/licenses/MIT",
    },
    {
      id: "gr",
      name: "Grommet-Icons",
      contents: [
        {
          files: path.resolve(__dirname, "grommet-icons/public/img/*.svg"),
          formatter: (name) => `Gr${name}`,
        },
      ],
      projectUrl: "https://github.com/grommet/grommet-icons",
      license: "Apache License Version 2.0",
      licenseUrl: "http://www.apache.org/licenses/",
    },
    {
      id: "hi",
      name: "Heroicons",
      contents: [
        {
          files: path.resolve(__dirname, "heroicons/optimized/solid/*.svg"),
          formatter: (name) => `Hi${name}`,
        },
        {
          files: path.resolve(__dirname, "heroicons/optimized/outline/*.svg"),
          formatter: (name) => `HiOutline${name}`,
        },
      ],
      projectUrl: "https://github.com/tailwindlabs/heroicons",
      license: "MIT",
      licenseUrl: "https://opensource.org/licenses/MIT",
    },
    {
      id: "hi2",
      name: "Heroicons 2",
      contents: [
        {
          files: path.resolve(
            __dirname,
            "heroicons-2/optimized/24/solid/*.svg"
          ),
          formatter: (name) => `Hi${name}`,
        },
        {
          files: path.resolve(
            __dirname,
            "heroicons-2/optimized/24/outline/*.svg"
          ),
          formatter: (name) => `HiOutline${name}`,
        },
      ],
      projectUrl: "https://github.com/tailwindlabs/heroicons",
      license: "MIT",
      licenseUrl: "https://opensource.org/licenses/MIT",
    },
    {
      id: "si",
      name: "Simple Icons",
      contents: [
        {
          files: path.resolve(__dirname, "simple-icons/icons/*.svg"),
          formatter: (name) => `Si${name}`,
        },
      ],
      projectUrl: "https://simpleicons.org/",
      license: "CC0 1.0 Universal",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    },
    {
      id: "sl",
      name: "Simple Line Icons",
      contents: [
        {
          files: path.resolve(__dirname, "simple-line-icons/src/svgs/*.svg"),
          formatter: (name) => `Sl${name}`,
        },
      ],
      projectUrl: "https://thesabbir.github.io/simple-line-icons/",
      license: "MIT",
      licenseUrl: "https://opensource.org/licenses/MIT",
    },
    {
      id: "im",
      name: "IcoMoon Free",
      contents: [
        {
          files: path.resolve(__dirname, "icomoon-free/SVG/*.svg"),
          formatter: (name) => `Im${name.slice(3)}`,
        },
      ],
      projectUrl: "https://github.com/Keyamoon/IcoMoon-Free",
      license: "CC BY 4.0 License",
    },
    {
      id: "bi",
      name: "BoxIcons",
      contents: [
        {
          files: path.resolve(__dirname, "boxicons/svg/regular/*.svg"),
          formatter: (name) => `Bi${name.replace("Bx", "")}`,
        },
        {
          files: path.resolve(__dirname, "boxicons/svg/solid/*.svg"),
          formatter: (name) => `BiSolid${name.replace("Bxs", "")}`,
        },
        {
          files: path.resolve(__dirname, "boxicons/svg/logos/*.svg"),
          formatter: (name) => `BiLogos${name.replace("Bxl", "")}`,
        },
      ],
      projectUrl: "https://github.com/atisawd/boxicons",
      license: "CC BY 4.0 License",
    },
    {
      id: "cg",
      name: "css.gg",
      contents: [
        {
          files: path.resolve(__dirname, "css.gg/icons/svg/*.svg"),
          formatter: (name) => `Cg${name}`,
        },
      ],
      projectUrl: "https://github.com/astrit/css.gg",
      license: "MIT",
      licenseUrl: "https://opensource.org/licenses/MIT",
    },
    {
      id: "vsc",
      name: "VS Code Icons",
      contents: [
        {
          files: path.resolve(__dirname, "vscode-icons/src/icons/*.svg"),
          formatter: (name) => `Vsc${name}`,
        },
      ],
      projectUrl: "https://github.com/microsoft/vscode-codicons",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    },
    {
      id: "tb",
      name: "Tabler Icons",
      contents: [
        {
          files: path.resolve(__dirname, "tabler-icons/icons/*.svg"),
          formatter: (name) => `Tb${name}`,
        },
      ],
      projectUrl: "https://github.com/tabler/tabler-icons",
      license: "MIT",
      licenseUrl: "https://opensource.org/licenses/MIT",
    },
    {
      id: "tfi",
      name: "Themify Icons",
      contents: [
        {
          files: path.resolve(__dirname, "themify-icons/SVG/*.svg"),
          formatter: (name) => `Tfi${name}`,
        },
      ],
      projectUrl: "https://github.com/lykmapipo/themify-icons",
      license: "MIT",
      licenseUrl:
        "https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE",
    },
  ],
};
