const path = require("path");

module.exports = {
  icons: [
    {
      id: "fa",
      name: "Font Awesome",
      contents: [
        {
          files: path.resolve(
            __dirname,
            "fontawesome/advanced-options/raw-svg/+(brands|solid)/*.svg"
          ),
          formatter: name => `Fa${name}`
        },
        {
          files: path.resolve(
            __dirname,
            "fontawesome/advanced-options/raw-svg/regular/*.svg"
          ),
          formatter: name => `FaReg${name}`
        }
      ],
      projectUrl: "https://fontawesome.com/",
      license: "CC BY 4.0 License",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
    },
    {
      id: "io",
      name: "Ionicons",
      contents: [
        {
          files: path.resolve(
            __dirname,
            "../../../../node_modules/ionicons/dist/collection/icon/svg/*.svg"
          ),
          formatter: name => `Io${name}`
        }
      ],
      projectUrl: "https://ionicons.com/",
      license: "MIT",
      licenseUrl: "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
    },
    {
      id: "md",
      name: "Material Design icons",
      contents: [
        {
          files: path.resolve(
            __dirname,
            "material-design-icons/*/svg/production/*_24px.svg"
          ),
          formatter: name => name.replace(/Ic(\w+)24px/, "Md$1")
        }
      ],
      projectUrl: "http://google.github.io/material-design-icons/",
      license: "Apache License Version 2.0",
      licenseUrl:
        "https://github.com/google/material-design-icons/blob/master/LICENSE"
    },
    {
      id: "ti",
      name: "Typicons",
      contents: [
        {
          files: path.resolve(__dirname, "typicons/src/svg/*.svg"),
          formatter: name => `Ti${name}`
        }
      ],
      projectUrl: "http://s-ings.com/typicons/",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/"
    },
    {
      id: "go",
      name: "Github Octicons icons",
      contents: [
        {
          files: path.resolve(
            __dirname,
            "../../../../node_modules/octicons/build/svg/*.svg"
          ),
          formatter: name => `Go${name}`
        }
      ],
      projectUrl: "https://octicons.github.com/",
      license: "MIT",
      licenseUrl: "https://github.com/primer/octicons/blob/master/LICENSE"
    },
    {
      id: "fi",
      name: "Feather",
      contents: [
        {
          files: path.resolve(
            __dirname,
            "../../../../node_modules/feather-icons/dist/icons/*.svg"
          ),
          formatter: name => `Fi${name}`
        }
      ],
      projectUrl: "https://feathericons.com/",
      license: "MIT",
      licenseUrl: "https://github.com/feathericons/feather/blob/master/LICENSE"
    }
  ]
};
