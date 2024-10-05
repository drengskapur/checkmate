import eslintPluginSvelte from "eslint-plugin-svelte";

export default [
  ...eslintPluginSvelte.configs["flat/recommended"],
  {
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
    plugins: ["@typescript-eslint"],
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
  },
];
