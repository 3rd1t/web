import { NextApiRequest, NextApiResponse } from "next";

import { auth0 } from "@perfolio/backend/auth0";
export default auth0().requireAuthentication(async function xxx(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const session = await auth0().getSession(req);
    res.end();
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
});
