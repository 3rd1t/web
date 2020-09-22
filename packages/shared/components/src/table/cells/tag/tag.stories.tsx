import React from "react"
import { Tag, TagProps } from "./tag"

export default {
  component: Tag,
  title: "Tag",
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: TagProps = {}

  return <Tag />
}
