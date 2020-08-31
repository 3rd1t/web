import React from "react"
import { Navbar, NavbarProps } from "./navbar"
import { Logo } from "@perfolio/shared/ui"
export default {
  component: Navbar,
  title: "Navbar",
}

export const primary = () => {
  const props: NavbarProps = {
    logo: <Logo />,
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

  return <Navbar logo={props.logo} links={props.links} />
}
