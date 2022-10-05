const runtimeCaching = require("next-pwa/cache");

const withPWA = require("next-pwa")({
  disable: process.env.NODE_ENV !== "production",
  dest: "public",
  register: true,
  scope: "/",
  runtimeCaching,
});

module.exports = withPWA({
  assetPrefix: process.env.BASE_PATH || undefined,
  basePath: process.env.BASE_PATH || "",
});
