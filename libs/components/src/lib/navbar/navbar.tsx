import React, { useState } from "react"
import { NavbarLink } from "./navbar-link"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
export interface NavbarProps {
  logo: React.ReactNode
}

export const Navbar = (props: NavbarProps) => {
  const [open, setOpen] = useState(false)

  const variants = {
    open: { visible: true },
    closed: { visible: false },
  }

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

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="p-2 text-gray-400 hover:text-gray-900 focus:outline-none"
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
      </div>
      <section className="hidden w-auto md:block" >
        <ul className="flex items-center space-x-10" data-testid="desktopNavbar">
          <li>
            <NavbarLink label="Product"></NavbarLink>
          </li>
          <li>
            <NavbarLink label="Features"></NavbarLink>
          </li>
          <li>
            <NavbarLink label="About us"></NavbarLink>
          </li>
          <li>
            <NavbarLink label="Documentation"></NavbarLink>
          </li>
        </ul>
      </section>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
          data-testid="mobileNavbar"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="w-full ml-4 md:w-auto md:flex md:ml-0"
          >
            <ul className="flex flex-col pt-4 mt-4 -mx-4 space-y-4 md:space-x-2 md:space-y-0 md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:space-x-16">
              <li>
                <NavbarLink label="Product"></NavbarLink>
              </li>
              <li>
                <NavbarLink label="Features"></NavbarLink>
              </li>
              <li>
                <NavbarLink label="About us"></NavbarLink>
              </li>
              <li>
                <div className="border-t border-gray-300 md:hidden"></div>
              </li>
              <li>
                <NavbarLink label="Documentation"></NavbarLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
