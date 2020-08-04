import React from "react"
import Link from "next/link"
/* eslint-disable-next-line */
export interface DesktopProps {
  links: {
    label: string
    href: string
  }[]
}

export const Desktop = (props: DesktopProps) => {
  const navbarLinkStyle = "text-lg font-medium text-gray-700 transition duration-150 ease-in-out hover:text-black"

  const links = props.links.map((l) => {
    return (
      <li key={l.label}>
        <Link href={l.href}>
          <a className={navbarLinkStyle}>{l.label}</a>
        </Link>
      </li>
    )
  })
  return (
    <div className="w-auto">
      <ul className="flex items-center space-x-10">{links}</ul>
    </div>
  )
}

export default Desktop
