import React from "react"
import { Wrapper } from "../components/wrapper/wrapper"
import { Section } from "@perfolio/components/layout/section/section"
import { NextPage } from "next"

export const NotFound404: NextPage = () => {
  return (
    <Wrapper>
    <Section className="flex items-center min-h-screen">
      <div>
        <h1 className="flex items-center justify-center text-gray-800 divide-x divide-gray-600">
          <span className="p-3 text-5xl font-black">404</span>
          <span className="p-3 text-xl font-thin">Page Not Found</span>
        </h1>
        <p className="mt-8 text-lg font-thin text-center ">
          Just like guarantees of future returns, this page does not exist.
        </p>
      </div>
    </Section>

    </Wrapper>
  )
}

export default NotFound404