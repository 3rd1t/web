import React from "react"
import Link from "next/link"
import getConfig from "next/config"

const xxx = getConfig()
export const Index = (props) => {
  return (
    <div>
      <Link href="/api/login">
        <a>Login</a>
      </Link>
    </div>
  )
}

export default Index

export async function getServerSideProps(ctx) {
  return {
    props: { xxx },
  }
}
