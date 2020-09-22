import React from "react"
import { Table } from "./table"
import { RowProps } from "./row/row"
import { HeaderProps } from "./header/header"
import { Simple } from "./cells/simple/simple"

export default {
  component: Table,
  title: "Table",
}

export const primary = () => {
  const header: HeaderProps = { labels: ["Name", "Number", "Updated at"] }
  const rows: RowProps[] = [
    {
      cells: [<Simple label="Andreas Thomas" />, <Simple label={123456789} />, <Simple label="22.09.2020" />],
    },
  ]

  return <Table header={header} rows={rows} />
}
