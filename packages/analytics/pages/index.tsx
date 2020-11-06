import React from "react"
import Link from "next/link"
export const Index = () => {
  return (
    <div>
      <Link href="/api/login">
        <a>Login</a>
      </Link>
    </div>
  )
}

export default Index
