module.exports = {
  extends: ["custom/next"],
  rules: {
    "no-console": "off",
    "no-alert": "off",
  },
  overrides: [
    {
      files: ["build/**/*.js"],
      rules: {
        "no-unused-vars": "off",
        "no-console": "off",
        "no-alert": "off",
      },
    },
  ],
};
