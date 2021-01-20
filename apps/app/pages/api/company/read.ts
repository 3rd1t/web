import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"
import { getAPI } from "@perfolio/backend/api"
import { auth0 } from "@perfolio/backend/auth0"

const verifyMethods = (
  req: NextApiRequest,
  res: NextApiResponse,
  methods: string[],
): boolean => {
  if (req.method && methods.includes(req.method)) {
    return true
  }
  res.setHeader("Allow", methods)
  res
    .status(405)
    .end(JSON.stringify({ error: `Method ${req.method} Not Allowed` }))
  return false
}

export default auth0().requireAuthentication(
  async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    if (!verifyMethods(req, res, ["GET"])) {
      return
    }
    const { apiAddr, token } = await getAPI(req, res)
    try {
      const isin = req.query["isin"]
      const apiResponse = await axios.get(
        `${apiAddr}/v1/company/read?isin=${isin}&token=${token}`,
      )
      res.send(apiResponse.data)
      res.end()
    } catch (error) {
      console.error(error)
      res.status(error.status || 400).end(error.message)
    }
  },
)
