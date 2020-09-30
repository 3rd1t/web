import React from "react"
import { MultiColumn } from "./multi-column"

export default {
  component: MultiColumn,
  title: "components/Navigation/Layout/MultiColumn",
}

export const primary = () => {
  return (
    <MultiColumn breadcrumbs={["First", "Second", "Active"]}>
      <span>Content</span>
    </MultiColumn>
  )
}
