module.exports = {
  extends: ["airbnb", "next", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "dot-notation": "off",
    "no-use-before-define": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx", ".tsx"]
      }
    ],
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
      presets: [require.resolve('next/babel')]
    }
  }
};
