import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

export default [
  // Ignore build directories
  {
    ignores: ["dist/**", ".svelte-kit/**"],
  },
  // Base configuration
  {
    files: ["*.ts", "*.svelte"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
      },
      env: {
        browser: true,
        es2021: true,
      },
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      svelte3: require("eslint-plugin-svelte3"),
    },
    settings: {
      "svelte3/typescript": () => require("typescript"),
    },
    rules: {
      // Your custom rules here
      "no-unused-vars": "warn",
      "no-console": "off",
      "prefer-const": "error",
      eqeqeq: "error",
      "space-before-function-paren": ["error", "never"],
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
  // Svelte-specific overrides
  {
    files: ["*.svelte"],
    processor: "svelte3/svelte3",
  },
];
