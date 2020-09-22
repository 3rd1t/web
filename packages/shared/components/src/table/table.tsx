import React from "react"
import { Header, HeaderProps } from "./header/header"
import { Row, RowProps } from "./row/row"

/* eslint-disable-next-line */
export interface TableProps {
  header: HeaderProps
  rows: any[]
}

export const Table = ({ header, rows }: TableProps) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg"></div>
          <table className="min-w-full divide-y divide-gray-200">
            {<Header labels={header.labels} />}
            <tbody>
              {rows.map((row, i) => {
                return <Row key={i} cells={row.cells} />
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Table
