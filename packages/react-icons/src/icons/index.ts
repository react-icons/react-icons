import path from "path";
import camelcase from "camelcase";
import { type IconDefinition } from "../../scripts/_types";
import { glob } from "../../scripts/glob";

export const icons: IconDefinition[] = [
  {
    id: "ci",
    name: "Circum Icons",
    contents: [
      {
        files: path.resolve(__dirname, "../../icons/Circum-Icons/svg/*.svg"),
        formatter: (name) => `Ci${name}`.replace(/_/g, "").replace(/&/g, "And"),
      },
    ],
    projectUrl: "https://circumicons.com/",
    license: "MPL-2.0 license",
    licenseUrl:
      "https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE",
    source: {
      type: "git",
      localName: "Circum-Icons",
      remoteDir: "svg/",
      url: "https://github.com/Klarr-Agency/Circum-Icons.git",
      branch: "main",
      hash: "cec1364b5199f55e946a9a8360385a958b98cc60",
    },
  },
  {
    id: "fa",
    name: "Font Awesome 5",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/fontawesome/svgs/+(brands|solid)/*.svg",
        ),
        formatter: (name) => `Fa${name}`,
      },
      {
        files: path.resolve(
          __dirname,
          "../../icons/fontawesome/svgs/regular/*.svg",
        ),
        formatter: (name) => `FaReg${name}`,
      },
    ],
    projectUrl: "https://fontawesome.com/",
    license: "CC BY 4.0 License",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    source: {
      type: "git",
      localName: "fontawesome",
      remoteDir: "svgs/",
      url: "https://github.com/FortAwesome/Font-Awesome.git",
      branch: "5.x",
      hash: "afecf2af5d897b763e5e8e28d46aad2f710ccad6",
    },
  },
  {
    id: "fa6",
    name: "Font Awesome 6",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/fontawesome-6/svgs/+(brands|solid)/*.svg",
        ),
        formatter: (name) => `Fa${name}`,
      },
      {
        files: path.resolve(
          __dirname,
          "../../icons/fontawesome-6/svgs/regular/*.svg",
        ),
        formatter: (name) => `FaReg${name}`,
      },
    ],
    projectUrl: "https://fontawesome.com/",
    license: "CC BY 4.0 License",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    source: {
      type: "git",
      localName: "fontawesome-6",
      remoteDir: "svgs/",
      url: "https://github.com/FortAwesome/Font-Awesome.git",
      branch: "6.x",
      hash: "c0f460dca7f7688761120415ff3c9cf7f73119be",
    },
  },
  {
    id: "io",
    name: "Ionicons 4",
    contents: [
      {
        files: path.resolve(
          path.dirname(require.resolve("ionicons")),
          "collection/icon/svg/*.svg",
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
          "../../../../node_modules/ionicons-5/dist/svg/*.svg",
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
              "../../icons/material-design-icons/src/*/*/materialicons/24px.svg",
            ),
          );

          const twotone = await glob(
            path.resolve(
              __dirname,
              "../../icons/material-design-icons/src/*/*/materialiconstwotone/24px.svg",
            ),
          );
          return [
            ...normal,
            ...twotone.filter(
              (file) => !normal.includes(file.replace("twotone/", "/")),
            ),
          ];
        },
        formatter: (name, file) =>
          `Md${camelcase(
            file.replace(/^.*\/([^/]+)\/materialicons[^/]*\/24px.svg$/i, "$1"),
            { pascalCase: true },
          )}`,
        processWithSVGO: true,
      },
      {
        files: path.resolve(
          __dirname,
          "../../icons/material-design-icons/src/*/*/materialiconsoutlined/24px.svg",
        ),
        formatter: (name, file) =>
          `MdOutline${camelcase(
            file.replace(/^.*\/([^/]+)\/materialicons[^/]*\/24px.svg$/i, "$1"),
            { pascalCase: true },
          )}`,
        processWithSVGO: true,
      },
    ],
    projectUrl: "http://google.github.io/material-design-icons/",
    license: "Apache License Version 2.0",
    licenseUrl:
      "https://github.com/google/material-design-icons/blob/master/LICENSE",
    source: {
      type: "git",
      localName: "material-design-icons",
      remoteDir: "src/",
      url: "https://github.com/google/material-design-icons.git",
      branch: "master",
      hash: "9beae745bb758f3ad56654fb377ea5cf62be4915",
    },
  },
  {
    id: "ti",
    name: "Typicons",
    contents: [
      {
        files: path.resolve(__dirname, "../../icons/typicons/src/svg/*.svg"),
        formatter: (name) => `Ti${name}`,
      },
    ],
    projectUrl: "http://s-ings.com/typicons/",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    source: {
      type: "git",
      localName: "typicons",
      remoteDir: "src/svg/",
      url: "https://github.com/stephenhutchings/typicons.font.git",
      branch: "master",
      hash: "0aa64f6ce8b892a83aeeafa42c74fb9c1f22ec84",
    },
  },
  {
    id: "go",
    name: "Github Octicons icons",
    contents: [
      {
        files: path.resolve(
          path.dirname(require.resolve("@primer/octicons")),
          "build/svg/*-24.svg",
        ),
        formatter: (name) => `Go${name}`.replace("24", ""),
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
          "icons/*.svg",
        ),
        formatter: (name) => `Fi${name}`,
      },
    ],
    projectUrl: "https://feathericons.com/",
    license: "MIT",
    licenseUrl: "https://github.com/feathericons/feather/blob/master/LICENSE",
  },
  {
    id: "lu",
    name: "Lucide",
    contents: [
      {
        files: path.resolve(
          path.dirname(require.resolve("lucide-static")),
          "../../icons/*.svg",
        ),
        formatter: (name) => `Lu${name}`,
      },
    ],
    projectUrl: "https://lucide.dev/",
    license: "ISC",
    licenseUrl: "https://github.com/lucide-icons/lucide/blob/main/LICENSE",
  },
  {
    id: "gi",
    name: "Game Icons",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/game-icons-inverted/all-icons/*.svg",
        ),
        formatter: (name) => `Gi${name}`,
      },
    ],
    projectUrl: "https://game-icons.net/",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    source: {
      type: "git",
      localName: "game-icons-inverted",
      remoteDir: "all-icons/",
      url: "https://github.com/delacannon/game-icons-inverted.git",
      branch: "master",
      hash: "12920d6565588f0512542a3cb0cdfd36a497f910",
    },
  },
  {
    id: "wi",
    name: "Weather Icons",
    contents: [
      {
        files: path.resolve(__dirname, "../../icons/weather-icons/svg/*.svg"),
        formatter: (name) => name,
      },
    ],
    projectUrl: "https://erikflowers.github.io/weather-icons/",
    license: "SIL OFL 1.1",
    licenseUrl: "http://scripts.sil.org/OFL",
    source: {
      type: "git",
      localName: "weather-icons",
      remoteDir: "svg/",
      url: "https://github.com/erikflowers/weather-icons.git",
      branch: "master",
      hash: "bb80982bf1f43f2d57f9dd753e7413bf88beb9ed",
    },
  },
  {
    id: "di",
    name: "Devicons",
    contents: [
      {
        files: path.resolve(__dirname, "../../icons/devicons/!SVG/*.svg"),
        formatter: (name) => `Di${name}`,
      },
    ],
    projectUrl: "https://vorillaz.github.io/devicons/",
    license: "MIT",
    licenseUrl: "https://opensource.org/licenses/MIT",
    source: {
      type: "git",
      localName: "devicons",
      remoteDir: "!SVG/",
      url: "https://github.com/vorillaz/devicons.git",
      branch: "master",
      hash: "ba75593fdf8d66496676a90cbf127d721f73e961",
    },
  },
  {
    id: "ai",
    name: "Ant Design Icons",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/ant-design-icons/packages/icons-svg/svg/filled/*.svg",
        ),
        formatter: (name) => `AiFill${name}`,
      },
      {
        files: path.resolve(
          __dirname,
          "../../icons/ant-design-icons/packages/icons-svg/svg/outlined/*.svg",
        ),
        formatter: (name) => `AiOutline${name}`,
      },
      {
        files: path.resolve(
          __dirname,
          "../../icons/ant-design-icons/packages/icons-svg/svg/twotone/*.svg",
        ),
        formatter: (name) => `AiTwotone${name}`,
        multiColor: true,
      },
    ],
    projectUrl: "https://github.com/ant-design/ant-design-icons",
    license: "MIT",
    licenseUrl: "https://opensource.org/licenses/MIT",
    source: {
      type: "git",
      localName: "ant-design-icons",
      remoteDir: "packages/icons-svg/svg/",
      url: "https://github.com/ant-design/ant-design-icons.git",
      branch: "master",
      hash: "655d46ec72d78357d7c6c0ac1c623b8975bc4f76",
    },
  },
  {
    id: "bs",
    name: "Bootstrap Icons",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/bootstrap/icons/*!(-reverse)-fill.svg",
        ),
        formatter: (name) => `BsFill${name}`,
      },
      {
        files: path.resolve(
          __dirname,
          "../../icons/bootstrap/icons/*-reverse!(-fill).svg",
        ),
        formatter: (name) => `BsReverse${name}`,
      },
      {
        files: path.resolve(
          __dirname,
          "../../icons/bootstrap/icons/*!(-fill|-reverse|reverse-).svg",
        ),
        formatter: (name) => `Bs${name}`,
      },
    ],
    projectUrl: "https://github.com/twbs/icons",
    license: "MIT",
    licenseUrl: "https://opensource.org/licenses/MIT",
    source: {
      type: "git",
      localName: "bootstrap",
      remoteDir: "icons/",
      url: "https://github.com/twbs/icons.git",
      branch: "main",
      hash: "92b6aee4c53aec1b5227360e0c9c63490b4b90c5",
    },
  },
  {
    id: "ri",
    name: "Remix Icon",
    contents: [
      {
        files: path.resolve(__dirname, "../../icons/RemixIcon/icons/*/*.svg"),
        formatter: (name) => `Ri${name}`,
      },
    ],
    projectUrl: "https://github.com/Remix-Design/RemixIcon",
    license: "Apache License Version 2.0",
    licenseUrl: "http://www.apache.org/licenses/",
    source: {
      type: "git",
      localName: "RemixIcon",
      remoteDir: "icons/",
      url: "https://github.com/Remix-Design/RemixIcon.git",
      branch: "master",
      hash: "e252d6eac05b33a01c80794ffa0c745ed5d0b20e",
    },
  },
  {
    id: "fc",
    name: "Flat Color Icons",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/flat-color-icons/svg/*.svg",
        ),
        formatter: (name) => `Fc${name}`,
        multiColor: true,
      },
    ],
    projectUrl: "https://github.com/icons8/flat-color-icons",
    license: "MIT",
    licenseUrl: "https://opensource.org/licenses/MIT",
    source: {
      type: "git",
      localName: "flat-color-icons",
      remoteDir: "svg/",
      url: "https://github.com/icons8/flat-color-icons.git",
      branch: "master",
      hash: "8eccbbbd8b2af1d2c9593e7cfba5ecb0d68ee378",
    },
  },
  {
    id: "gr",
    name: "Grommet-Icons",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/grommet-icons/public/img/*.svg",
        ),
        formatter: (name) => `Gr${name}`,
      },
    ],
    projectUrl: "https://github.com/grommet/grommet-icons",
    license: "Apache License Version 2.0",
    licenseUrl: "http://www.apache.org/licenses/",
    source: {
      type: "git",
      localName: "grommet-icons",
      remoteDir: "public/img/",
      url: "https://github.com/grommet/grommet-icons.git",
      branch: "master",
      hash: "bfb635567739ba4303d72eefcc908f310eaec351",
    },
  },
  {
    id: "hi",
    name: "Heroicons",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/heroicons/optimized/solid/*.svg",
        ),
        formatter: (name) => `Hi${name}`,
      },
      {
        files: path.resolve(
          __dirname,
          "../../icons/heroicons/optimized/outline/*.svg",
        ),
        formatter: (name) => `HiOutline${name}`,
      },
    ],
    projectUrl: "https://github.com/tailwindlabs/heroicons",
    license: "MIT",
    licenseUrl: "https://opensource.org/licenses/MIT",
    source: {
      type: "git",
      localName: "heroicons",
      remoteDir: "optimized/",
      url: "https://github.com/tailwindlabs/heroicons.git",
      branch: "v1",
      hash: "b6de5792d3d53ff81c71b1b8283463aad622e0e3",
    },
  },
  {
    id: "hi2",
    name: "Heroicons 2",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/heroicons-2/optimized/24/solid/*.svg",
        ),
        formatter: (name) => `Hi${name}`,
      },
      {
        files: path.resolve(
          __dirname,
          "../../icons/heroicons-2/optimized/24/outline/*.svg",
        ),
        formatter: (name) => `HiOutline${name}`,
      },
      {
        files: path.resolve(
          __dirname,
          "../../icons/heroicons-2/optimized/20/solid/*.svg",
        ),
        formatter: (name) => `HiMini${name}`,
      },
    ],
    projectUrl: "https://github.com/tailwindlabs/heroicons",
    license: "MIT",
    licenseUrl: "https://opensource.org/licenses/MIT",
    source: {
      type: "git",
      localName: "heroicons-2",
      remoteDir: "optimized/",
      url: "https://github.com/tailwindlabs/heroicons.git",
      branch: "master",
      hash: "9a17872e685bf48b83c047572c45617b6fd345e7",
    },
  },
  {
    id: "si",
    name: "Simple Icons",
    contents: [
      {
        files: path.resolve(__dirname, "../../icons/simple-icons/icons/*.svg"),
        formatter: (name) => `Si${name}`,
      },
    ],
    projectUrl: "https://simpleicons.org/",
    license: "CC0 1.0 Universal",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    source: {
      type: "git",
      localName: "simple-icons",
      remoteDir: "icons/",
      url: "https://github.com/simple-icons/simple-icons.git",
      branch: "develop",
      hash: "a1df74e8004f80d02a8023b8ef091610b9a1136c",
    },
  },
  {
    id: "sl",
    name: "Simple Line Icons",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/simple-line-icons/src/svgs/*.svg",
        ),
        formatter: (name) => `Sl${name}`,
      },
    ],
    projectUrl: "https://thesabbir.github.io/simple-line-icons/",
    license: "MIT",
    licenseUrl: "https://opensource.org/licenses/MIT",
    source: {
      type: "git",
      localName: "simple-line-icons",
      remoteDir: "src/svgs/",
      url: "https://github.com/thesabbir/simple-line-icons.git",
      branch: "master",
      hash: "f3ed94dd797bdcab52d6f27ba589aea4bb6f3e4d",
    },
  },
  {
    id: "im",
    name: "IcoMoon Free",
    contents: [
      {
        files: path.resolve(__dirname, "../../icons/icomoon-free/SVG/*.svg"),
        formatter: (name) => `Im${name.slice(3)}`,
      },
    ],
    projectUrl: "https://github.com/Keyamoon/IcoMoon-Free",
    license: "CC BY 4.0 License",
    licenseUrl:
      "https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt",
    source: {
      type: "git",
      localName: "icomoon-free",
      remoteDir: "SVG/",
      url: "https://github.com/Keyamoon/IcoMoon-Free.git",
      branch: "master",
      hash: "d006795ede82361e1bac1ee76f215cf1dc51e4ca",
    },
  },
  {
    id: "bi",
    name: "BoxIcons",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/boxicons/svg/regular/*.svg",
        ),
        formatter: (name) => `Bi${name.replace("Bx", "")}`,
      },
      {
        files: path.resolve(__dirname, "../../icons/boxicons/svg/solid/*.svg"),
        formatter: (name) => `BiSolid${name.replace("Bxs", "")}`,
      },
      {
        files: path.resolve(__dirname, "../../icons/boxicons/svg/logos/*.svg"),
        formatter: (name) => `BiLogo${name.replace("Bxl", "")}`,
      },
    ],
    projectUrl: "https://github.com/atisawd/boxicons",
    license: "MIT",
    licenseUrl: "https://github.com/atisawd/boxicons/blob/master/LICENSE",
    source: {
      type: "git",
      localName: "boxicons",
      remoteDir: "svg/",
      url: "https://github.com/atisawd/boxicons.git",
      branch: "master",
      hash: "9ffa9136e8681886bb7bd2145cd4098717ce1c11",
    },
  },
  {
    id: "cg",
    name: "css.gg",
    contents: [
      {
        files: path.resolve(__dirname, "../../icons/css.gg/icons/svg/*.svg"),
        formatter: (name) => `Cg${name}`,
      },
    ],
    projectUrl: "https://github.com/astrit/css.gg",
    license: "MIT",
    licenseUrl: "https://opensource.org/licenses/MIT",
    source: {
      type: "git",
      localName: "css.gg",
      remoteDir: "icons/svg/",
      url: "https://github.com/astrit/css.gg.git",
      branch: "master",
      hash: "deea4fa5f39a2980d7586aed18d65cdba6fd85e3",
    },
  },
  {
    id: "vsc",
    name: "VS Code Icons",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/vscode-icons/src/icons/*.svg",
        ),
        formatter: (name) => `Vsc${name}`,
      },
    ],
    projectUrl: "https://github.com/microsoft/vscode-codicons",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    source: {
      type: "git",
      localName: "vscode-icons",
      remoteDir: "src/icons/",
      url: "https://github.com/microsoft/vscode-codicons.git",
      branch: "main",
      hash: "05f8886984a3f6ffa44e283928fae0e3c4cbe6c4",
    },
  },
  {
    id: "tb",
    name: "Tabler Icons",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/tabler-icons/icons/filled/*.svg",
        ),
        formatter: (name) => `Tb${name}Filled`,
      },
      {
        files: path.resolve(
          __dirname,
          "../../icons/tabler-icons/icons/outline/*.svg",
        ),
        formatter: (name) => `Tb${name}`,
      },
    ],
    projectUrl: "https://github.com/tabler/tabler-icons",
    license: "MIT",
    licenseUrl: "https://opensource.org/licenses/MIT",
    source: {
      type: "git",
      localName: "tabler-icons",
      remoteDir: "icons/",
      url: "https://github.com/tabler/tabler-icons.git",
      branch: "main",
      hash: "4ec2a71d4faa6a9dab1228b97311391143324fb7",
    },
  },
  {
    id: "tfi",
    name: "Themify Icons",
    contents: [
      {
        files: path.resolve(__dirname, "../../icons/themify-icons/SVG/*.svg"),
        formatter: (name) => `Tfi${name}`,
      },
    ],
    projectUrl: "https://github.com/lykmapipo/themify-icons",
    license: "MIT",
    licenseUrl:
      "https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE",
    source: {
      type: "git",
      localName: "themify-icons",
      remoteDir: "SVG/",
      url: "https://github.com/lykmapipo/themify-icons.git",
      branch: "master",
      hash: "9600186b24a7242f0e1e0a186983e6253301bb5d",
    },
  },
  {
    id: "rx",
    name: "Radix Icons",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/radix-icons/packages/radix-icons/icons/*.svg",
        ),
        formatter: (name) => `Rx${camelcase(name, { pascalCase: true })}`,
      },
    ],
    projectUrl: "https://icons.radix-ui.com",
    license: "MIT",
    licenseUrl: "https://github.com/radix-ui/icons/blob/master/LICENSE",
    source: {
      type: "git",
      localName: "radix-icons",
      remoteDir: "packages/radix-icons/icons/",
      url: "https://github.com/radix-ui/icons.git",
      branch: "master",
      hash: "94b3fcf4e972566b34cb3b3a36296f70a2558dfa",
    },
  },
  {
    id: "pi",
    name: "Phosphor Icons",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/phosphor-icons/assets/*/*.svg",
        ),
        formatter: (name) => `Pi${name}`,
      },
    ],
    projectUrl: "https://github.com/phosphor-icons/core",
    license: "MIT",
    licenseUrl: "https://github.com/phosphor-icons/core/blob/main/LICENSE",
    source: {
      type: "git",
      localName: "phosphor-icons",
      remoteDir: "assets/",
      url: "https://github.com/phosphor-icons/core.git",
      branch: "main",
      hash: "fe23e2534cdb7bec24bd8e6bd99b3676bcf0d54f",
    },
  },
  {
    id: "lia",
    name: "Icons8 Line Awesome",
    contents: [
      {
        files: path.resolve(__dirname, "../../icons/line-awesome/svg/*.svg"),
        formatter: (name) => `Lia${name}`,
      },
    ],
    projectUrl: "https://icons8.com/line-awesome",
    license: "MIT",
    licenseUrl: "https://github.com/icons8/line-awesome/blob/master/LICENSE.md",
    source: {
      type: "git",
      localName: "line-awesome",
      remoteDir: "svg/",
      url: "https://github.com/icons8/line-awesome.git",
      branch: "master",
      hash: "78a101217707c9b1c4dcf2a821be75684e36307f",
    },
  },
];
