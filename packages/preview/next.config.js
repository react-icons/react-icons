const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const path = require("path");

const prod = process.env.NODE_ENV === "production";

module.exports = withPWA({
  disable: !prod,
  dest: "public",
  register: true,
  scope: "/",
  runtimeCaching,
})({
  experimental: {
    publicDirectory: true,
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on fs module, see github.com/zeit/next.js/issues/7755
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: "empty",
        module: "empty",
      };
    }
    config.resolve.alias["@components"] = path.join(
      __dirname,
      `src/components`,
    );
    config.resolve.alias["@pages"] = path.join(__dirname, `src/pages`);
    config.resolve.alias["@styles"] = path.join(__dirname, `src/styles`);
    config.resolve.alias["@utils"] = path.join(__dirname, `src/utils`);
    return config;
  },
  assetPrefix: process.env.BASE_PATH || "",
  basePath: process.env.BASE_PATH || "",
});
