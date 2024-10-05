module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    webextensions: true,
  },
  extends: [
    "eslint:recommended",
    "standard",
    "plugin:@typescript-eslint/recommended",
    "plugin:svelte/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3-preprocess",
    },
  ],
  plugins: ["@typescript-eslint", "svelte3"],
  globals: {
    chrome: "readonly",
    window: "readonly",
  },
  rules: {
    "no-undef": "error",
    "no-unused-vars": "warn",
    "no-console": "off",
    "prefer-const": "error",
    eqeqeq: "error",
    "space-before-function-paren": ["error", "never"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
