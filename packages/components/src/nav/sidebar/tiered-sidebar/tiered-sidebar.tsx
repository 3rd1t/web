import { Transition } from "@headlessui/react"
import React, { useState } from "react"
import { Main } from "./main/main"
import { Menu } from "./menu/menu"
import Link from "next/link"
import { Logo } from "@perfolio/shared/ui"
import { AnimatePresence, motion } from "framer-motion"
/* eslint-disable-next-line */
export interface TieredSidebarProps {}

export const TieredSidebar = (props: TieredSidebarProps) => {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ width: 192 }}>
      <button className="text-white" onClick={() => setOpen(!open)}>
        Toggle
      </button>
      <div className="relative mt-20">
        <motion.nav
          variants={{
            collapsed: {
              width: 16 * 4,
            },
            expanded: {
              width: 192,
            },
          }}
          transition={{ damping: 100 }}
          animate={open ? "expanded" : "collapsed"}
          className="absolute inset-y-0 left-0 z-10 flex items-center justify-start text-gray-500 bg-gray-200"
        >
          <span>ICON</span>
          <AnimatePresence>
            {open ? (
              <motion.span
                variants={{
                  hidden: {
                    opacity: 0,
                    width: 0,
                  },
                  visible: {
                    opacity: 1,
                    width: "auto",
                  },
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                BUTTON
              </motion.span>
            ) : null}
          </AnimatePresence>
        </motion.nav>
        <div className="w-full">
          <div className="h-screen">
            <Menu></Menu>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TieredSidebar
