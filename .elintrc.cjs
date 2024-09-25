const { rules } = require("eslint-config-prettier");

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOption: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxt/eslint-config", "plugin:prettier/recommended"],
  Plugins: [],
  rules: {},
};
