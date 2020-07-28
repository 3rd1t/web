import { text } from "@storybook/addon-knobs"
import React from "react"
import { Logo, LogoProps } from "./logo"

export default {
  component: Logo,
  title: "Logo",
}

export const primary = () => {
  const props: LogoProps = {
    domain: text("domain", "research"),
    color: text("color", "text-research-500"),
  }

  return <Logo domain={props.domain} color={props.color} />
}
