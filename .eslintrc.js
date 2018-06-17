module.exports = {
  extends: ['react-tools', "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error", {
      "tabWidth": 2,
      "useTabs": false,
      "semi": true,
      "singleQuote": true,
      "trailingComma": "none",
      "bracketSpacing": true,
      "jsxBracketSameLine": true,
      "requirePragma": false
    }]
  }
}
