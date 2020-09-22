import React from "react"
import { Link, LinkProps } from "./link"

export default {
  component: Link,
  title: "Link",
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: LinkProps = {}

  return <Link />
}
