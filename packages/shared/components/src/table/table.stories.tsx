import React from "react"
import { Table } from "./table"
import { Row } from "./row/row"
import { Header } from "./header/header"
import { Simple } from "./cells/simple/simple"
import { Multiline } from "./cells/multiline/multiline"
import { Tag } from "./cells/tag/tag"
import { action } from "@storybook/addon-actions"

import { Icon } from "./cells/icon/icon"
import { Button } from "./cells/button/button"

export default {
  component: Table,
  title: "components/table",
  subcomponents: { Row, Header },
}

export const singleRow = () => {
  const columnNames = ["Name", "Number", "Updated at"]
  const rows = [
    [<Simple label="Andreas Thomas" />, <Tag label={123456789} color="purple" />, <Simple label="22.09.2020" />],
  ]

  return <Table columnNames={columnNames} rows={rows} />
}

export const multipleRows = () => {
  const columnNames = ["Name", "Number", "Updated at"]

  const rows = [
    [<Simple label="Andreas Thomas" />, <Tag label={123456789} color="purple" />, <Simple label="22.09.2020" />],
    [
      <Multiline title="Nico Webersinke" content="Product lead" />,
      <Simple label={123456789} />,
      <Simple label="22.09.2020" />,
    ],
    [<Simple label="Mads Jordt" />, <Simple label={123456789} />, <Simple label="22.09.2020" />],
    [<Simple label="Kevin Kohler" />, <Simple label={123456789} />, <Simple label="22.09.2020" />],
  ]

  return <Table columnNames={columnNames} rows={rows} />
}

export const onDark = () => {
  const columnNames = ["Name", "Number", "Updated at"]

  const rows = [
    [<Simple label="Andreas Thomas" />, <Tag label={123456789} color="purple" />, <Simple label="22.09.2020" />],
    [
      <Multiline title="Nico Webersinke" content="Product lead" />,
      <Simple label={123456789} />,
      <Icon
        icon={
          <svg
            className="w-full"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
        }
        color="red"
      />,
    ],
    [
      <Simple label="Mads Jordt" />,
      <Multiline title="Lorem" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />,
      <Simple label="22.09.2020" />,
    ],
    [
      <Simple label="Kevin Kohler" />,
      <Simple label={123456789} />,
      <Button label="Click me" onClick={action("Clicked")} />,
    ],
  ]

  return (
    <div className="p-10 bg-gray-900">
      <Table columnNames={columnNames} rows={rows} />
    </div>
  )
}
