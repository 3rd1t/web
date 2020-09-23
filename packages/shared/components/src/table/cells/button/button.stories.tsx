import { action } from "@storybook/addon-actions"

import React from "react"
import { Button, ButtonProps } from "./button"

export default {
  component: Button,
  title: "components/table/cell/Button",
  argTypes: { onClick: { action: "clicked" } },
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ButtonProps = {
    label: "Label",
    onClick: action("button-click"),
  }

  return <Button label={props.label} onClick={props.onClick} />
}
