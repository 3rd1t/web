import React from "react"
import { TieredSidebar, TieredSidebarProps } from "./tiered-sidebar"

export default {
  component: TieredSidebar,
  title: "TieredSidebar",
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: TieredSidebarProps = {}

  return <div className="w-screen text-gray-100 bg-gray-900">
    <TieredSidebar />
  </div>
}
