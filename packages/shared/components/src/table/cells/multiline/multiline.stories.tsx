import React from "react"
import { Multiline, MultilineProps } from "./multiline"

export default {
  component: Multiline,
  title: "Multiline",
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: MultilineProps = {}

  return <Multiline />
}
