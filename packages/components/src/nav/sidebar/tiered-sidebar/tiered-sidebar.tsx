import { Transition } from "@headlessui/react"
import React, { useState } from "react"
import { Main } from "./main/main"
import { Menu } from "./menu/menu"
import Link from "next/link"
import { Logo } from "@perfolio/shared/ui"
import { AnimatePresence, motion } from "framer-motion"
/* eslint-disable-next-line */
export interface TieredSidebarProps {}

const navbarWidth = 64 * 4

export const TieredSidebar = (props: TieredSidebarProps) => {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ width: navbarWidth }}>
      <button className="text-white" onClick={() => setOpen(!open)}>
        Toggle
      </button>
      <div className="relative mt-20">
        <div className="absolute border-r border-gray-300">
          <Main open={open} setOpen={setOpen} navbarWidth={navbarWidth}></Main>
        </div>
        <div className="">
          <Menu></Menu>
        </div>
      </div>
    </div>
  )
}

export default TieredSidebar
