import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"
import { getAPI } from "@perfolio/backend/api"
import { auth0 } from "@perfolio/backend/auth0"

export default auth0().requireAuthentication(
  async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const allowedMethods = ["POST", "GET"]
    if (!allowedMethods.includes(req.method)) {
      res.setHeader("Allow", allowedMethods)
      res.status(405).end(`Method ${req.method} Not Allowed`)
      return
    }
    const { apiAddr, token } = await getAPI(req, res)

    const validActions = ["create", "read", "delete"]
    let action = req.query["action"]
    // Can return either a string or array
    if (typeof action !== "string") {
      action = action[0]
    }
    if (!validActions.includes(action)) {
      res.status(404).end(`Only ${validActions} are valid endpoints`)
      return
    }
    try {
      let payload
      switch (req.method) {
        case "POST":
          payload = JSON.parse(req.body)
          break
        case "GET":
          payload = req.query
          break
        default:
          break
      }
      payload = {
        token: token,
        ...payload,
      }
      const apiResponse = await axios.post(
        `${apiAddr}/v1/transactions/${action}`,
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
