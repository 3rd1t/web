import React from "react"
import { Header, HeaderProps } from "./header/header"
import { Row } from "./row/row"
import { Cell } from "./cells/cell"

export interface TableProps {
  columnNames: string[]
  rows: Cell[][]
}

export const Table = ({ columnNames, rows }: TableProps) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded">
            <table className="min-w-full ">
              {<Header labels={columnNames} />}
              <tbody className="bg-white divide-y divide-gray-200">
                {rows.map((row, i) => {
                  return <Row key={i} cells={row} />
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
