module.exports = {
  tabWidth: 2,
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  printWidth: 160,
  singleQuote: true,
  semi: true,
  trailingComma: "none",
  singleAttributePerLine: true,
  bracketSpacing: true,
  endOfLine: "auto",
  overrides: [
    {
      files: "*.json",
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: "always",
};
