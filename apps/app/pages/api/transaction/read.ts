import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"
import { getAPI } from "@perfolio/backend/api"
import { auth0 } from "@perfolio/backend/auth0"

export default auth0().requireAuthentication(
  async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    if (req.method !== "GET") {
      res.setHeader("Allow", ["GET"])
      res
        .status(405)
        .end(JSON.stringify({ error: `Method ${req.method} Not Allowed` }))
      return
    }
    const { apiAddr, token } = await getAPI(req, res)

    try {
      const apiResponse = await axios.get(
        `${apiAddr}/v1/transaction/read?token=${token}`,
      )
      res.send(apiResponse.data)
      res.end()
    } catch (error) {
      console.error(error)
      res.status(error.status || 400).end(error.message)
    }
  },
)
