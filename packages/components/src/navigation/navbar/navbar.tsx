import React, { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
export interface NavbarProps {
  logo: React.ReactNode
  links: {
    label: string
    href: string
    internal?: boolean
  }[]
}

export const Navbar = (props: NavbarProps) => {
  const [open, setOpen] = useState(false)

  const navbarLinkStyle = "text-lg font-medium text-gray-700 transition duration-150 ease-in-out hover:text-black"
  const links = props.links.map((l) => {
    if (l.internal) {
      return (
        <li key={l.label}>
          <Link href={l.href}>
            <a className={navbarLinkStyle}>{l.label}</a>
          </Link>
        </li>
      )
    } else {
      return (
        <li key={l.label}>
          <a href={l.href} className={navbarLinkStyle}>
            {l.label}
          </a>
        </li>
      )
    }
  })

  const toggleMenu = () => {
    setOpen(!open)
  }
  return (
    <nav
      role="navigation"
      className="container flex flex-wrap items-center justify-between p-4 mx-auto md:flex-no-wrap"
    >
      <Link href="/">
        <a>{props.logo}</a>
      </Link>

      {/* Toggle button for mobile */}
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-400 hover:text-gray-900 focus:outline-none md:hidden"
        aria-label="home"
        data-testid="toggle"
      >
        <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop links */}
      <div className="hidden w-auto md:block">
        <ul className="flex items-center space-x-10">{links}</ul>
      </div>

      {/* Mobile links */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            data-testid="mobileNavbar"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", y: 0 },
              collapsed: { opacity: 0, height: 0, y: -100 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="w-screen -ml-4"
          >
            <ul className="flex flex-col w-screen px-4 pt-4 mt-4 space-y-4 border-b border-gray-400">{links}</ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
