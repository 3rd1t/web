import React from "react"
import { Desktop, DesktopProps } from "./desktop"

export default {
  component: Desktop,
  title: "Desktop",
}

export const primary = () => {
  const props: DesktopProps = {
    links: [
      {
        label: "Product",
        href: "/",
      },
      {
        label: "Features",
        href: "#features",
      },
      {
        label: "Team",
        href: "#team",
      },
      {
        label: "Documentation",
        href: "/docs",
      },
    ],
  }

  return <Desktop links={props.links} />
}
