const withNx = require("@nrwl/next/plugins/with-nx");

module.exports = withNx({
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
  },
  target: "server",
  serverRuntimeConfig: {
    auth0: {
      audience: process.env.AUTH0_AUDIENCE,
      domain: process.env.AUTH0_DOMAIN,
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      redirectUri: process.env.AUTH0_REDIRECT_URI,
      postLogoutRedirectUri: process.env.AUTH0_POST_LOGOUT_REDIRECT_URI,
    },
    cookieSecret: process.env.COOKIE_SECRET,
    apiAddr: process.env.API_ADDR,
  },
});
