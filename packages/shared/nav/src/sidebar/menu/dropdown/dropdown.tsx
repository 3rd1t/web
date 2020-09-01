import React, { useState } from "react"
import { Title } from "../title/title"
import { motion, AnimatePresence } from "framer-motion"
export interface DropdownProps {
  label: string
  items: React.ReactNode[]
  row?: boolean
}

export const Dropdown = ({ label, items, row }: DropdownProps) => {
  const [isOpen, setOpen] = useState(true)

  return (
    <div>
      <button onClick={() => setOpen(!isOpen)} className="flex items-center justify-between w-full focus:outline-none">
        <Title label={label} />
        <motion.svg
          animate={isOpen ? "open" : "collapsed"}
          variants={{
            open: { rotate: -90 },
            collapsed: { rotate: 0 },
          }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="px-4"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { y: 0, opacity: 1, height: "auto", transition: { staggerChildren: 0.05 } },
              collapsed: { y: -10, opacity: 0, height: 0 },
            }}
          >
            <ul className={row ? "flex justify-between items-center" : ""}>
              {items.map((item, index) => {
                return (
                  <motion.li
                    className="flex justify-between"
                    key={index}
                    variants={{ open: { y: 0, opacity: 100 }, collapsed: { y: -10, opacity: 0 } }}
                  >
                    {item}
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export default Dropdown
