import { NextApiRequest, NextApiResponse, NextPageContext } from "next";
import getConfig from "next/config";
import { auth0 } from "./auth0";
import {User}from "./user"


export async function requireUser(ctx: NextPageContext): Promise<User> {
  if (!ctx.req || !ctx.res) {
    throw new Error("req and res must be defined");
  }
  const session = await auth0().getSession(ctx.req);
  if (!session?.user) {
    ctx.res.writeHead(302, {
      Location: "/api/signin",
    });
    ctx.res.end();
    return;
  }

  if (!session.user.nickname){
    throw new Error("User has no nickname")
  }

  const user: User = {
    name: session.user.nickname
  }
  return user;
}

export async function getAPI(req: NextApiRequest, res: NextApiResponse): Promise<{apiAddr:string,token:string}> {
  const tokenCache = auth0().tokenCache(req,res);

  return {
      token:(await tokenCache.getAccessToken()).accessToken,
      apiAddr:getConfig().serverRuntimeConfig.apiAddr,
  };
}
