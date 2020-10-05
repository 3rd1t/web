import React, { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

/* eslint-disable-next-line */
export interface ExpandItemProps {
  label?: string
}

export const ExpandItem = (props: ExpandItemProps) => {
  const [expanded, setExpanded] = useState<false | number>(0)

  return (
    <div className="w-full">
      {["Three", "Four", "Five", "Six"].map((label, i) => (
        <div key={i}>
          <motion.header
            initial={false}
            onClick={() => setExpanded(i === expanded ? false : i)}
            className="flex items-center p-2 text-gray-800 rounded-lg hover:bg-gray-100"
          >
            <motion.span
              animate={{ rotateZ: i === expanded ? 90 : 0 }}
              className="flex items-center justify-center text-lg text-gray-400"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.span>

            <div className="flex items-center justify-between space-x-1">
              <span className="ml-3">{label}</span>
            </div>
          </motion.header>
          <AnimatePresence initial={false}>
            {i === expanded && (
              <motion.section
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <div className="flex flex-wrap">
                  <span className="p-1 m-1 text-xs bg-gray-100 rounded-sm text-data-700">MOM</span>
                  <span className="p-1 m-1 text-xs bg-gray-100 rounded-sm text-data-700">MOM</span>
                  <span className="p-1 m-1 text-xs bg-gray-100 rounded-sm text-data-700">MOM</span>
                  <span className="p-1 m-1 text-xs bg-gray-100 rounded-sm text-data-700">MOM</span>
                  <span className="p-1 m-1 text-xs bg-gray-100 rounded-sm text-data-700">MOM</span>
                  <span className="p-1 m-1 text-xs bg-gray-100 rounded-sm text-data-700">MOM</span>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

export default ExpandItem
