import { auth0, requireUser } from "@perfolio/auth/auth0/auth0"
import React, { useState } from "react"
import { useRouter } from "next/router"
/* eslint-disable-next-line */
export interface DevProps {
  username: string
  token: string
}

export const Dev = ({ username, token }: DevProps) => {
  const [assetType, setAssetType] = useState("STOCK")
  const [assetID, setAssetID] = useState("MSFT")
  const [amount, setAmount] = useState(2)
  const [executedAt, setExecutedAt] = useState(0)
  const [holdings, setHoldings] = useState([])

  const getHoldings = async () => {
    console.log("AAAAAAAAAA")
      const res = await fetch("./api/get-holdings")
      console.log("BBBBBBBBBBBBBBB")
      console.log()
      console.warn(res)

  }

  const post = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("./api/add-transaction", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          assetType,
          assetID,
          amount,
          executedAt,
        }),
      })
    } catch (err) {}
  }
  return (
    <div>
      <h1>{username}</h1>
      <code>
        <pre>{token}</pre>
      </code>

      <form onSubmit={post}>
        <input id="assetType" onChange={(e) => setAssetType(e.currentTarget.value)} value={assetType} />
        <input id="assetID" onChange={(e) => setAssetID(e.currentTarget.value)} value={assetID} />
        <input id="amount" onChange={(e) => setAmount(e.currentTarget.valueAsNumber)} value={amount} />
        <input id="executedAt" onChange={(e) => setExecutedAt(e.currentTarget.valueAsNumber)} value={executedAt} />
        <button type="submit">Submit</button>
      </form>

      <button onClick={getHoldings}>Get Holdings</button>

      <div>
        {holdings.map((h) => (
          <span>{h}</span>
        ))}
      </div>
    </div>
  )
}

export default Dev

export async function getServerSideProps(ctx) {
  await requireUser(ctx)
  const session = await auth0.getSession(ctx.req)
  return {
    props: {
      username: session.user.nickname,
      token: session.idToken,
    },
  }
}
