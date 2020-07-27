import { text } from "@storybook/addon-knobs"
import React from "react"
import { Footer, FooterProps } from "./footer"

export default {
  component: Footer,
  title: "Footer",
}

export const primary = () => {
  const props: FooterProps = {
    bgColor: text("bgColor", "bg-research-700"),
    primaryText: text("primaryText", "text-white"),
    secondaryText: text("secondaryText", "text-research-100"),
  }
  return <Footer bgColor={props.bgColor} primaryText={props.primaryText} secondaryText={props.secondaryText} />
}

export const gray = () => {
  const props: FooterProps = {
    bgColor: text("bgColor", "bg-gray-900"),
    primaryText: text("primaryText", "text-white"),
    secondaryText: text("secondaryText", "text-gray-100"),
  }

  return <Footer bgColor={props.bgColor} primaryText={props.primaryText} secondaryText={props.secondaryText} />
}

export const carbon = () => {
  const props: FooterProps = {
    bgColor: text("bgColor", "bg-carbon-900"),
    primaryText: text("primaryText", "text-carbon-50"),
    secondaryText: text("secondaryText", "text-carbon-100"),
  }
  return <Footer bgColor={props.bgColor} primaryText={props.primaryText} secondaryText={props.secondaryText} />
}

export const red = () => {
  const props: FooterProps = {
    bgColor: text("bgColor", "bg-red-700"),
    primaryText: text("primaryText", "text-white"),
    secondaryText: text("secondaryText", "text-red-100"),
  }
  return <Footer bgColor={props.bgColor} primaryText={props.primaryText} secondaryText={props.secondaryText} />
}

export const orange = () => {
  const props: FooterProps = {
    bgColor: text("bgColor", "bg-orange-500"),
    primaryText: text("primaryText", "text-black"),
    secondaryText: text("secondaryText", "text-gray-900"),
  }
  return <Footer bgColor={props.bgColor} primaryText={props.primaryText} secondaryText={props.secondaryText} />
}
