import React from "react"
import { Breadcrumbs } from "./bread-crumbs"

export default {
  component: Breadcrumbs,
  title: "components/Navigation/BreadCrumbs",
}

export const primary = () => {
  return <Breadcrumbs path={["First", "Second", "Active"]} />
}

export const long = () => {
  return (
    <Breadcrumbs
      path={[
        "Take",
        "your",
        "analysis",
        "to",
        "the",
        "next",
        "level",
        "with",
        "financial",
        "data",
        "from",
        "our",
        "state-of-the-art",
        "scalable",
        "data",
        "platform",
      ]}
    />
  )
}

export const empty = () => {
  return <Breadcrumbs path={[]} />
}
