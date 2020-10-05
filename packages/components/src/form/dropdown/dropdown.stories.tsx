import React from "react"
import { Dropdown, DropdownProps } from "./dropdown"

export default {
  component: Dropdown,
  title: "Dropdown",
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: DropdownProps = {
    button: "Open",
    options: [<span>Hello</span>],
  }

  return <Dropdown button={props.button} options={props.options} />
}
