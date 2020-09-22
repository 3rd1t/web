import React from "react"
import { Row, RowProps } from "./row"
import { Simple } from "../cells/simple/simple"

export default {
  component: Row,
  title: "Row",
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: RowProps = {
    cells: [<Simple label="Hello" />, <Simple label="World" />],
  }

  return <Row cells={props.cells} />
}
