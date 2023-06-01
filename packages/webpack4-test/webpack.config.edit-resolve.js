module.exports = {
  mode: "production",
  resolve: {
    extensions: [".js"],
  },
  performance: {
    hints: "error",
    maxEntrypointSize: 9000,
  },
};
