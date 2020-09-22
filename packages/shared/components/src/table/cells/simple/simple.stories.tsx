import React from "react"
import { Simple } from "./simple"

export default {
  component: Simple,
  title: "Simple",
}

export const primary = () => {
  return <Simple label="Label" />
}
