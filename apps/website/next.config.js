const withNx = require("@nrwl/next/plugins/with-nx");

module.exports = withNx({
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
  },
});
