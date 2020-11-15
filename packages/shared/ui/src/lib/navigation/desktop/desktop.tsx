import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { Link as Scroll } from "react-scroll"
import { SelectLight } from "@perfolio/components/form/select-light/select-light"

/* eslint-disable-next-line */
export interface DesktopProps {
  links: {
    label: string
    href: string
    scroll?: boolean
  }[]
}

export const Desktop = (props: DesktopProps) => {
  const navbarLinkStyle = "text-lg text-gray-700 transition duration-150 ease-in-out hover:text-black"

  const links = props.links.map((l) => {
    return (
      <li key={l.label}>
        {l.scroll ? (
          <Scroll className={navbarLinkStyle} href="" smooth={true} spy={true} to={l.href}>
            {l.label}
          </Scroll>
        ) : (
          <Link href={l.href}>
            <a className={navbarLinkStyle}>{l.label}</a>
          </Link>
        )}
      </li>
    )
  })

  const choices = [
    {
      name: "English",
      locale: "en",
    },
    {
      name: "Deutsch",
      locale: "de",
    },
  ]

  const [choice, setChoice] = useState(0)
  const router = useRouter()

  links.push(
    <li key="languageSetting">
      <SelectLight label="Language" choices={choices.map((c) => c.name)} selected={choice} setSelected={setChoice} />
    </li>,
  )
  links.push(
    <li key="signin">
      <Link href="/api/login">
        <a className="px-4 py-2 font-medium text-gray-100 bg-gray-900 rounded">Sign in</a>
      </Link>
    </li>,
  )

  useEffect(() => {
    const locale = choices.map((c) => c.locale)[choice]
    router.push(router.pathname, router.pathname, { locale: locale })
  }, [choice])

  return (
    <div className="w-auto">
      <ul className="flex items-center space-x-10">{links}</ul>
    </div>
  )
}

export default Desktop
