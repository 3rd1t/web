import { initAuth0 } from "@auth0/nextjs-auth0";
import { IClaims } from "@auth0/nextjs-auth0/dist/session/session";
import { NextPageContext } from "next";
import getConfig from "next/config";

export function auth0() {
  const { serverRuntimeConfig } = getConfig();
  const {
    domain,
    audience,
    clientId,
    clientSecret,
    redirectUri,
    postLogoutRedirectUri,
  } = serverRuntimeConfig.auth0;
  const cookieSecret = serverRuntimeConfig.cookieSecret;
  return initAuth0({
    domain,
    audience,
    clientId,
    clientSecret,
    // audience: getEnvOrPanic("AUTH0_AUDIENCE"),
    scope: "openid profile",
    redirectUri,
    postLogoutRedirectUri,
    session: {
      // The secret used to encrypt the cookie.
      cookieSecret,
      // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.
      cookieLifetime: 60 * 60 * 8,
      // (Optional) The cookie domain this should run on. Leave it blank to restrict it to your domain.
      // (Optional) SameSite configuration for the session cookie. Defaults to 'lax', but can be changed to 'strict' or 'none'. Set it to false if you want to disable the SameSite setting.
      cookieSameSite: "lax",
      // (Optional) Store the id_token in the session. Defaults to false.
      storeIdToken: false,
      // (Optional) Store the access_token in the session. Defaults to false.
      storeAccessToken: true,
      // (Optional) Store the refresh_token in the session. Defaults to false.
      storeRefreshToken: true,
    },
    oidcClient: {
      // (Optional) Configure the timeout in milliseconds for HTTP requests to Auth0.
      httpTimeout: 2500,
      // (Optional) Configure the clock tolerance in milliseconds, if the time on your server is running behind.
      clockTolerance: 10000,
    },
  });
}

export async function requireUser(ctx: NextPageContext): Promise<IClaims> {
  if (!ctx.req || !ctx.res) {
    throw new Error("req and res must be defined");
  }
  const session = await auth0().getSession(ctx.req);
  if (!session?.user) {
    ctx.res.writeHead(302, {
      Location: "/api/signin",
    });
    ctx.res.end();
    return {};
  }
  return session.user;
}

export async function getAccessToken(req, res): Promise<string>{
  const tokenCache = auth0().tokenCache(req, res);
  const {accessToken} = await tokenCache.getAccessToken();
  return accessToken
}