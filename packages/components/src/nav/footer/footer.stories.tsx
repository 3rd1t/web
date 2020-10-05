import React from "react"
import { Footer, FooterProps } from "./footer"

export default {
  component: Footer,
  title: "Footer",
}

export const primary = () => {
  const props: FooterProps = {}

  return <Footer />
}
