import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
/* eslint-disable-next-line */
export interface MobileProps {
  logo: React.ReactChild
  links: {
    label: string
    href: string
  }[]
}

export const Mobile = (props: MobileProps) => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(true)}
        className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
        aria-label="open menu"
        data-testid="open menu"
      >
        <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </motion.button>
      <AnimatePresence initial={false}>
        {open && (
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-10 bg-carbon-900"
              onTap={() => {
                setOpen(false)
              }}
            ></motion.div>
            <motion.div
              data-testid="mobileNavbar"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto", y: 0 },
                collapsed: { opacity: 0, height: 0, y: "100%" },
              }}
              transition={{ duration: 0.6 }}
              className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-lg shadow-lg"
            >
              <div className="mb-10">
                <div className="flex items-center justify-between m-4 text-gray-900">
                  {props.logo}
                  <motion.button
                  whileTap={{ scale: 0.9 }}
                    onClick={() => setOpen(false)}
                    className="p-2 hover:text-gray-700 focus:outline-none"
                    aria-label="home"
                    data-testid="toggle"
                  >
                    <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
                <ul className="p-4 space-y-8 text-center">
                  {props.links.map((link) => {
                    return (
                      <motion.li
                        whileTap={{ scale: 0.9 }}
                        className=""
                      >
                        <Link href={link.href}>
                          <a className="font-semibold text-carbon-900">{link.label}</a>
                        </Link>
                      </motion.li>
                    )
                  })}
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Mobile
