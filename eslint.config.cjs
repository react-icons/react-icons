const js = require("@eslint/js");
const typescriptEslintParser = require("@typescript-eslint/parser");
const tseslint = require("typescript-eslint");
const ts = require("@typescript-eslint/eslint-plugin");
const globals = require("globals");
// const reactRecommended = require('eslint-plugin-react/configs/recommended');

module.exports = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  // reactRecommended,  // eslint-plugin-react is not supported eslint 9.x
  {
    plugins: {
      "@typescript-eslint": ts,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "@typescript-eslint/no-var-requires": 0,
      "react/prop-types": 0,
    },
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
  },
  {
    ignores: [
      "node_modules",
      "**/node_modules",
      ".yarn/",
      "**/.git/",
      "**/build/",
      "**/docs/",
      "**/dist/",
      "packages/react-icons/lib/**/*",
      "packages/react-icons/build/**/*",
      "packages/react-icons/icons/**/*",
      "!packages/react-icons/icons/index.js",
      "packages/_react-icons_all/**/*",
      "packages/_react-icons_all-files/**/*",
    ],
  },
];
