import React from "react"
import { Logo, LogoProps } from "./logo"

export default {
  component: Logo,
  title: "Logo",
}

export const primary = () => {
  const props: LogoProps = {
    domain: "domain",
    color: "text-red-500",
  }

  return <Logo domain={props.domain} color={props.color} />
}
