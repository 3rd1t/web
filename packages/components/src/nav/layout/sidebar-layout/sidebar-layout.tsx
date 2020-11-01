import React from "react"
import { Header } from "../../top/header/header"
import TieredSidebar from "../../sidebar/tiered-sidebar/tiered-sidebar"

/* eslint-disable-next-line */
export interface SidebarLayoutProps {
  children: React.ReactNode
  breadcrumbs?: string[]
  menuContent: {
    title: React.ReactNode
    items: React.ReactNode[]
  }[],
  user?: {
    nickname: string
  }
}

export const SidebarLayout = ({ children, breadcrumbs, menuContent, user }: SidebarLayoutProps) => {
  return (
    <div className="flex">
      <div className="sticky top-0 flex flex-shrink-0 min-h-screen">
        <TieredSidebar menuContent={menuContent} />
      </div>
      <div className="w-full min-h-screen">
        <Header breadcrumbs={breadcrumbs} user={user}></Header>
        <main className="h-full pt-20 -mt-20 ">
          <div className="h-full bg-gray-100 border-t border-gray-300">{children}</div>
        </main>
      </div>
    </div>
  )
}

export default SidebarLayout
