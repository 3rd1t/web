const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
})
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  serverRuntimeConfig: {
    auth0: {
      domain: process.env.AUTH0_DOMAIN,
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      redirectUri: process.env.AUTH0_REDIRECT_URI,
      postLogoutRedirectUri: process.env.AUTH0_POST_LOGOUT_REDIRECT_URI,
    },
    cookieSecret: process.env.COOKIE_SECRET,
  },
})
