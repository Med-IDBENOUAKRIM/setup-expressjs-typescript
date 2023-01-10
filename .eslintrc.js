module.exports = {
  root: true,
  env: {
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  extends: "airbnb-typescript/base",
  plugins: ["import", "@typescript-eslint"],
  rules: {
    "comma-dangle": 0,
    "no-underscore-dangle": 0,
    "no-param-reassign": 0,
    "no-return-assign": 0,
    camelcase: 0,
    quotes: "off",
    "@typescript-eslint/quotes": "off",
    "import/extensions": 0,
    "@typescript-eslint/no-redeclare": 0,
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
    },
  },
};
