import React from "react"
import { Apps } from "../../sidebar/apps/apps"
import { Header } from "../../top/header/header"
import { Menu } from "../../sidebar/menu/menu"
/* eslint-disable-next-line */
export interface MultiColumnProps {
  children: React.ReactNode
  breadcrumbs?: string[]
}

export const MultiColumn = ({ children, breadcrumbs }: MultiColumnProps) => {
  return (
    <div className="flex">
      <div className="sticky top-0 flex flex-shrink-0 min-h-screen">
        <Apps></Apps>
        <Menu></Menu>
      </div>
      <div className="w-full min-h-screen">
        <Header breadcrumbs={breadcrumbs}></Header>
        <main className="h-full pt-20 -mt-20 ">
          <div className="h-full bg-gray-100 border-t border-gray-300">{children}</div>
        </main>
      </div>
    </div>
  )
}

export default MultiColumn
