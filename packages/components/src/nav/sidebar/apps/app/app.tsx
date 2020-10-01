import React, { useState } from "react"
import Link from "next/link"
import { Transition } from "@headlessui/react"
import { AnimatePresence, motion } from "framer-motion"

/* eslint-disable-next-line */
export interface AppProps {
  active?: boolean
  icon: React.ReactNode
  label: string
  href?: string
}

export const App = ({ href, icon, active, label }: AppProps) => {
  const [tooltip, showTooltip] = useState(false)

  return (
    <Link href={href || ""}>
      <a
        aria-label={label}
        aria-disabled={!!!href}
        className={`relative w-16 h-16 transform duration-200 
        `}
        onMouseEnter={() => showTooltip(true)}
        onMouseLeave={() => showTooltip(false)}
      >
        <div
          className={`p-3 rounded 
          ${active ? "text-black bg-data-400" : ""}  
          ${!!href ? "hover:text-black hover:bg-data-400 " : ""}
        }`}
        >
            <div className={!!href ? "" : "opacity-50"}>{icon}</div>
            <AnimatePresence>
              {open ? (
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  exit={{ width: 0 }}
                  className="max-w-sm px-2 py-1 text-sm text-gray-900 truncate"
                >
                  {label}
                </motion.span>
              ) : null}
            </AnimatePresence>
        </div>
      </a>
    </Link>
  )
}

export default App
