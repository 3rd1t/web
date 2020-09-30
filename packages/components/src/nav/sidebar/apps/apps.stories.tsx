import React from "react"
import { Apps } from "./apps"

export default {
  component: Apps,
  title: "components/Navigation/Sidebar/Apps",
}

export const primary = () => {
  return (
    <div className="sticky top-0 flex flex-shrink-0 min-h-screen">
      <Apps />
    </div>
  )
}
