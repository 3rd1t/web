import { initAuth0 } from "@auth0/nextjs-auth0"
import { IClaims } from "@auth0/nextjs-auth0/dist/session/session"
import { NextPageContext } from "next"

function getEnvOrPanic(key: string): string {
  const value = process.env[key]
  if (!value || value == "") {
    throw new Error(`Requires environment variable [${key}] to be set`)
  }
  return value
}

export const auth0 = initAuth0({
  domain: getEnvOrPanic("AUTH0_DOMAIN"),
  clientId: getEnvOrPanic("AUTH0_CLIENT_ID"),
  clientSecret: getEnvOrPanic("AUTH0_CLIENT_SECRET"),
  // audience: getEnvOrPanic("AUTH0_AUDIENCE"),
  scope: "openid profile",
  redirectUri: getEnvOrPanic("AUTH0_REDIRECT_URI"),
  postLogoutRedirectUri: getEnvOrPanic("AUTH0_POST_LOGOUT_REDIRECT_URI"),
  session: {
    // The secret used to encrypt the cookie.
    cookieSecret: getEnvOrPanic("COOKIE_SECRET"),
    // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.
    cookieLifetime: 60 * 60 * 8,
    // (Optional) The cookie domain this should run on. Leave it blank to restrict it to your domain.
    // (Optional) SameSite configuration for the session cookie. Defaults to 'lax', but can be changed to 'strict' or 'none'. Set it to false if you want to disable the SameSite setting.
    cookieSameSite: "lax",
    // (Optional) Store the id_token in the session. Defaults to false.
    storeIdToken: true,
    // (Optional) Store the access_token in the session. Defaults to false.
    storeAccessToken: true,
    // (Optional) Store the refresh_token in the session. Defaults to false.
    storeRefreshToken: false,
  },
  oidcClient: {
    // (Optional) Configure the timeout in milliseconds for HTTP requests to Auth0.
    httpTimeout: 2500,
    // (Optional) Configure the clock tolerance in milliseconds, if the time on your server is running behind.
    clockTolerance: 10000,
  },
})

export async function requireUser(ctx: NextPageContext): Promise<IClaims> {
  const session = await auth0.getSession(ctx.req)
  if (!session?.user) {
    ctx.res.writeHead(302, {
      Location: "/api/login",
    })
    ctx.res.end()
    return
  }
  return session.user
}