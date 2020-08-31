import { text } from "@storybook/addon-knobs"
import React from "react"
import { Footer, FooterProps } from "./footer"

export default {
  component: Footer,
  title: "Footer",
}

export const primary = () => {
  const props: FooterProps = {
    bg: text("bg", ""),
    primaryText: text("primaryText", ""),
    secondaryText: text("secondaryText", ""),
  }

  return <Footer bg={props.bg} primaryText={props.primaryText} secondaryText={props.secondaryText} />
}
