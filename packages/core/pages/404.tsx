import React from "react"
import { NotFound404 as Content } from "@perfolio/pages"
import { Wrapper } from "../components/wrapper/wrapper"
import { NextPage } from "next"

export const NotFound404: NextPage = () => {
  return (
    <Wrapper>
      <Content />
    </Wrapper>
  )
}

export default NotFound404
