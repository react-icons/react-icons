const path = require("path");

module.exports = {
  icons: [
    {
      id: "fa",
      name: "fontawesome",
      files: path.resolve(
        __dirname,
        "fontawesome/advanced-options/raw-svg/regular/*.svg"
      )
    },
    {
      id: "io",
      name: "ionicons",
      files: path.resolve(
        __dirname,
        "../..//node_modules/ionicons/dist/svg/*.svg"
      )
    },
    {
      id: "md",
      name: "material-design-icons",
      files: path.resolve(
        __dirname,
        "material-design-icons/*/svg/production/*_24px.svg"
      )
    },
    {
      id: "typicons",
      name: "material-design-icons",
      files: path.resolve(__dirname, "typicons/src/svg/*.svg")
    },
    {
      id: "go",
      name: "octicons",
      files: path.resolve(
        __dirname,
        "../../node_modules/octicons/build/svg/*.svg"
      )
    }
  ]
};
