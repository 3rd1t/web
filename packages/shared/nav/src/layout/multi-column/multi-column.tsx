import React from "react"
import { Apps } from "../../sidebar/apps/apps"
import { Header } from "../../sidebar/header/header"
import { Menu } from "../../sidebar/menu/menu"
/* eslint-disable-next-line */
export interface MultiColumnProps {
  children: React.ReactNode
}

export const MultiColumn = ({ children }: MultiColumnProps) => {
  return (
    <div className="flex">
      <div className="sticky top-0 flex flex-shrink-0 min-h-screen">
        <Apps></Apps>
        <Menu></Menu>
      </div>
      <div className="w-full">
        <Header></Header>
        <div className="">{children}</div>
      </div>
    </div>
  )
}

export default MultiColumn
