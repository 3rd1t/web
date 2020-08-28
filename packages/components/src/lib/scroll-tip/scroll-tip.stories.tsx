import { text } from "@storybook/addon-knobs"
import React from "react"
import { ScrollTip, ScrollTipProps } from "./scroll-tip"

export default {
  component: ScrollTip,
  title: "ScrollTip",
}

export const primary = () => {
  const props: ScrollTipProps = {
    className: text("className", ""),
    href: text("href", ""),
  }

  return <ScrollTip className={props.className} href={props.href} />
}
