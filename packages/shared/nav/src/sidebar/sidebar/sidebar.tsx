import React from "react"
import Apps from "../apps/apps"
import Menu from "../menu/menu"

/* eslint-disable-next-line */
export interface SidebarProps {}

export const Sidebar = (props: SidebarProps) => {
  return (
    <div className="flex h-screen">
      <div className="sticky top-0">
        <Apps></Apps>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 overflow-y-scroll">
          <Menu></Menu>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
