import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { wrap } from "module"

interface AppProps {
  icon: React.ReactNode
  label?: React.ReactNode
  open: boolean
  onClick?: () => void
  href?: string
}
export const App = ({ icon, label, open, onClick, href }: AppProps) => {
  if (onClick && href) {
    throw new Error("Must not have href and onClick at the same time")
  }

  const wrapperClass = `relative flex items-center h-12 m-4 text-gray-600 rounded focus:outline-none   ${
    onClick || href ? "hover:bg-data-400 hover:text-white cursor-pointer" : "hover:text-gray-500"
  }`

  const content = (
    <>
      <span className="flex items-center justify-center w-12">{icon}</span>
      <AnimatePresence>
        {open ? (
          <motion.span
            transition={{
              damping: 100,
            }}
            variants={{
              hidden: {
                opacity: 0,
                width: 0,
              },
              visible: {
                opacity: 1,
                width: "auto",
                transition: {
                  delay: 0.25,
                },
              },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {label}
          </motion.span>
        ) : null}
      </AnimatePresence>
    </>
  )

  if (href) {
    return (
      <Link href={href}>
        <a className={wrapperClass}>{content}</a>
      </Link>
    )
  }

  if (onClick) {
    return (
      <div onClick={onClick} className={wrapperClass}>
        {content}
      </div>
    )
  }

  return <div className={wrapperClass}>{content}</div>
}

export default App
