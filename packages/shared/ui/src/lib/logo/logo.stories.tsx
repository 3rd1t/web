import { text } from "@storybook/addon-knobs"
import React from "react"
import { Logo, LogoProps } from "./logo"

export default {
  component: Logo,
  title: "Logo",
}

export const primary = () => {
  const props: LogoProps = {
    domain: text("domain", ""),
    color: text("color", ""),
  }

  return <Logo domain={props.domain} color={props.color} />
}
