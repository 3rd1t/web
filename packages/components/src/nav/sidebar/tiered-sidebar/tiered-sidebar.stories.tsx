import React from "react"
import { TieredSidebar, TieredSidebarProps } from "./tiered-sidebar"

export default {
  component: TieredSidebar,
  title: "TieredSidebar",
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: TieredSidebarProps = {}

  return (
    <div className="flex">
      <TieredSidebar />
      <div>Content</div>
    </div>
  )
}
