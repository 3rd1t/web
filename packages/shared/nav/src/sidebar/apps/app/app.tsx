import React, { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"

/* eslint-disable-next-line */
export interface AppProps {
  active?: boolean
  children: React.ReactNode
  label: string
}

export const App = ({ children, active, label }: AppProps) => {
  const [hovered, setHovered] = useState(false)

  return (
    <AnimateSharedLayout>
      <Link href="/">
        <motion.a
          layout
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          className={`flex flex-col items-center justify-center w-24 h-24 duration-200 bg-gradient-to-l from-transparent hover:to-research-100 hover:text-gray-900 ${
            active ? "text-research-600 border-l-4 pr-1 border-research-500" : ""
          }`}
        >
          <motion.div layout>{children}</motion.div>
          <AnimatePresence>
            {hovered ? (
              <motion.span
                layout
                initial={{ opacity: 0, x: -50, height: 0 }}
                animate={{ opacity: 1, x: 0, height: "auto" }}
                exit={{ opacity: 0, x: -50, height: 0 }}
                className="mt-2 text-sm text-center"
              >
                {label}
              </motion.span>
            ) : null}
          </AnimatePresence>
        </motion.a>
      </Link>
    </AnimateSharedLayout>
  )
}

export default App
