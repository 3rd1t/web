import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { auth0, getAccessToken } from "@perfolio/auth/auth0";
import getConfig from "next/config";

const {apiAddr} = getConfig().serverRuntimeConfig;


export default auth0().requireAuthentication(
  async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    if (req.method !== "POST"){
      res.setHeader("Allow", ["POST"])
      res.status(405).end(`Method ${req.method} Not Allowed`)
      return
    }
    const accessToken = await getAccessToken(req,res)

    try {
      const session = await auth0().getSession(req);
      if (typeof session === "undefined" || session === null) {
        res.status(500).end("Session was empty");
        return;
      }

      const payload = {
        userID: session.user.sub,
        token: accessToken,
        ...req.body,
      }
      const apiResponse = await axios.post(
        `${apiAddr}/v1/transaction`,
        payload
      );
      res.send(apiResponse.data);
      res.end();

    } catch (error) {
      console.error(error);
      res.status(error.status || 400).end(error.message);
    }
  }
);
