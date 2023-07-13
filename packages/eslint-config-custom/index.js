module.exports = {
  extends: ["airbnb", "next", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never",
      }
    ]
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
