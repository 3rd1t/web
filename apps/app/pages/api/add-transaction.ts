import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { auth0 } from "@perfolio/auth/auth0";
import getConfig from "next/config";

const krakenURL = getConfig().serverRuntimeConfig.api;
export default auth0().requireAuthentication(
  async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    try {
      const session = await auth0().getSession(req);
      if (typeof session === "undefined" || session === null) {
        res.status(500).end("Session was empty");
        return;
      }
      const token = session.idToken;

      const krakenResponse = await axios.post(
        `http://${krakenURL}/v1/transaction`,
        {
          token,
          ...req.query,
        }
      );
      res.send(krakenResponse.data);
      res.end();

      res.end();
    } catch (error) {
      console.error(error);
      res.status(error.status || 400).end(error.message);
    }
  }
);
