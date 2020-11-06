import { NextApiRequest, NextApiResponse } from "next"

import { auth0 } from "@perfolio/auth/auth0/auth0"
export default async function login(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    await auth0.handleLogin(req, res)
  } catch (error) {
    console.error(error)
    res.status(error.status || 400).end(error.message)
  }
}