import React, { useState } from "react"
import { Main } from "./main/main"
import { Menu } from "./menu/menu"
/* eslint-disable-next-line */
export interface TieredSidebarProps {}

const navbarWidth = 80 * 4

export const TieredSidebar = (props: TieredSidebarProps) => {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ width: navbarWidth }}>
      <div className="relative">
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
