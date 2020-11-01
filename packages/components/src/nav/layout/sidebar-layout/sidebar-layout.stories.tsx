import React from "react"
import { SidebarLayout } from "./sidebar-layout"

export default {
  component: SidebarLayout,
  title: "components/Navigation/Layout/SidebarLayout",
}

export const primary = () => {
  return (
    <SidebarLayout breadcrumbs={["First", "Second", "Active"]} user={{ nickname: "User" }}>
      <span>Content</span>
    </SidebarLayout>
  )
}
