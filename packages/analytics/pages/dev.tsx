import { auth0, requireUser } from '@perfolio/auth/auth0/auth0'
import React from "react"

/* eslint-disable-next-line */
export interface DevProps {
  username: string
  token: string
}

export const Dev = ({username, token}: DevProps) => {
  return (
    <div>
      <h1>{username}</h1>
      <code>
      <pre>{token}</pre>
      </code>
    </div>
  )
}

export default Dev


export async function getServerSideProps(ctx) {
  await requireUser(ctx)
  const session = await auth0.getSession(ctx.req)
  return {
    props:{
      username: session.user.nickname,
      token: session.idToken
    }
  }



}