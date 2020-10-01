import React from "react"
import { AnimatePresence, motion } from "framer-motion"

interface AppProps {
  icon: React.ReactNode
  label?: string
  open: boolean
}
export const App = ({ icon, label, open }: AppProps) => {
  return (
    <div className="relative flex items-center h-12 m-4 text-gray-600 rounded hover:bg-data-400 hover:text-white">
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
    </div>
  )
}

export default App
