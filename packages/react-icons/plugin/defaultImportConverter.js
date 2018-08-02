module.exports = (babel, options) => {
  return {
    name: "default-import-converter",
    visitor: {
      ImportDeclaration(path) {
        var spec = path.node.specifiers
          .filter(spec => options.keys.includes(spec.local.name))
          .map(spec => babel.types.ImportDefaultSpecifier(spec.local));
        path.node.specifiers = spec;
      }
    }
  };
};
