/** @type {import("@types/eslint").Linter.Config} */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "../../../.eslintrc.cjs",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    // We don't want to leak logging into our user's console unless it's an error
    "no-console": ["error", { allow: ["warn", "error"] }],
  },
};
