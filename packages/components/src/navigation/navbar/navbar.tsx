import React, { useState } from "react"
import Link from "next/link"
import { Mobile } from "../mobile/mobile"
import { Desktop } from "../desktop/desktop"
export interface NavbarProps {
  logo: React.ReactNode
  links: {
    label: string
    href: string
  }[]
}

export const Navbar = (props: NavbarProps) => {
  return (
    <nav
      role="navigation"
      className="container flex flex-wrap items-center justify-between p-4 mx-auto md:flex-no-wrap"
    >
      <Link href="/">
        <a>{props.logo}</a>
      </Link>

      <div className="hidden md:block">
        <Desktop links={props.links}></Desktop>
      </div>

      <div className="block md:hidden">
        <Mobile links={props.links}></Mobile>
      </div>
    </nav>
  )
}

export default Navbar
