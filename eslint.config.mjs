import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginJest from "eslint-plugin-jest";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: globals.browser,
    },
  },
  {
    files: ["jest.config.js"],
    languageOptions: {
      globals: {
        ...globals.node,
        module: "readonly",
        process: "readonly",
      },
    },
  },
  {
    files: ["**/*.test.js", "**/*.spec.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    plugins: {
      jest: eslintPluginJest,
    },
    rules: {
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
    },
  },
  pluginJs.configs.recommended,
];
