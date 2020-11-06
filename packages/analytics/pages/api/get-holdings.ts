import { NextApiRequest, NextApiResponse } from "next"

import { auth0 } from "@perfolio/auth/auth0/auth0"
import http from "http"

async function addTransaction(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    // expect assetType, assetID, amount and executedAt in the request body
    const session = await auth0.getSession(req)

    const opts = {
      hostname: "localhost",
      port: 8000,
      path: `/v1/holdings?token=${session.idToken}&userId=${session.user.sub}`,
      method: "GET",
    }

    let data = ""

    const apiReq = http
      .request(opts, (r) => {
        r.on("data", (chunk) => {
          console.log("new data")
          data += chunk
        })

        r.on("end", () => {
          console.log(JSON.parse(data))
        })
      })
      .on("error", (err) => {
        console.log("Error: " + err.message)
      })

    apiReq.end()

    console.error(data)

    res.write(data)
    res.end()
  } catch (error) {
    console.error(error)
    res.status(error.status || 400).end(error.message)
  }
}

export default auth0.requireAuthentication(addTransaction)
