import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"
import { getAPI } from "@perfolio/backend/api"
import { auth0 } from "@perfolio/backend/auth0"

export default auth0().requireAuthentication(
  async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    if (req.method !== "POST") {
      res.setHeader("Allow", ["POST"])
      res.status(405).end(`Method ${req.method} Not Allowed`)
      return
    }
    const { apiAddr, token } = await getAPI(req, res)

    try {
      const payload = {
        token: token,
        ...JSON.parse(req.body),
      }
      const apiResponse = await axios.post(
        `${apiAddr}/v1/transaction/create`,
        payload,
      )
      res.send(apiResponse.data)
      res.end()
    } catch (error) {
      console.error(error)
      res.status(error.status || 400).end(error.message)
    }
  },
)
