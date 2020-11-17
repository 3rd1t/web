import { NextApiRequest, NextApiResponse } from "next"

import { auth0 } from "@perfolio/auth/auth0/auth0"
import http from "http"

async function addTransaction(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    // expect assetType, assetID, amount and executedAt in the request body
    const session = await auth0().getSession(req)

    const payload = JSON.stringify({
      token: session.idToken,
      userId: session.user.sub,
      assetType: req.body.assetType,
      assetId: req.body.assetID,
      amount: req.body.amount,
      executedAt: req.body.executedAt,
    })

    const opts = {
      hostname: "localhost",
      port: 8000,
      path: "/v1/transaction",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }

    let data = ""

    const apiReq = http
      .request(opts, (r) => {
        r.on("data", (chunk) => {
          data += chunk
        })

        r.on("end", () => {
          console.log(JSON.parse(data))
        })
      })
      .on("error", (err) => {
        console.log("Error: " + err.message)
      })

    apiReq.write(payload)
    apiReq.end()

    res.write(data)
  } catch (error) {
    console.error(error)
    res.status(error.status || 400).end(error.message)
  }
}

export default auth0().requireAuthentication(addTransaction)
