const path = require("path");

module.exports = {
  icons: [
    {
      id: "fa",
      name: "fontawesome",
      files: path.resolve(
        __dirname,
        "fontawesome/advanced-options/raw-svg/+(brands|regular)/*.svg"
      ),
      formatter: name => `Fa${name}`
    },
    {
      id: "io",
      name: "ionicons",
      files: path.resolve(
        __dirname,
        "../../../../node_modules/ionicons/dist/svg/*.svg"
      ),
      formatter: name => `Io${name}`
    },
    {
      id: "md",
      name: "material-design-icons",
      files: path.resolve(
        __dirname,
        "material-design-icons/*/svg/production/*_24px.svg"
      ),
      formatter: name => name.replace(/Ic(\w+)24px/, "Md$1")
    },
    {
      id: "typicons",
      name: "material-design-icons",
      files: path.resolve(__dirname, "typicons/src/svg/*.svg"),
      formatter: name => `Ti${name}`
    },
    {
      id: "go",
      name: "octicons",
      files: path.resolve(
        __dirname,
        "../../../../node_modules/octicons/build/svg/*.svg"
      ),
      formatter: name => `Go${name}`
    }
  ]
};
