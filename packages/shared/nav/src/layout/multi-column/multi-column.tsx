import React from "react"
import { Apps } from "../../sidebar/apps/apps"
import { Header } from "../../sidebar/header/header"
import { Menu } from "../../sidebar/menu/menu"
import Breadcrumbs from "../../lib/bread-crumbs/bread-crumbs"
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
        <main className="h-full pt-20 -mt-20">{children}</main>
      </div>
    </div>
  )
}

export default MultiColumn
