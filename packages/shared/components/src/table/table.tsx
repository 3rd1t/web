import React from "react"
import { Header } from "./header/header"
import { Preview } from "./cells/preview/preview"

export interface TableProps {
  columnNames: string[]
  cells: React.ReactNode[][]
}

export const Table = ({ columnNames, cells }: TableProps) => {
  const previewCells = [0, 1, 2, 3, 4].map((_) => columnNames.map((_) => <Preview />))

  const usedCells = cells.length > 0 ? cells : previewCells

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded">
            <table className="min-w-full ">
              {<Header labels={columnNames} />}
              <tbody className="bg-white divide-y divide-gray-200">
                {usedCells.map((row, rowID) => {
                  return (
                    <tr key={rowID}>
                      {row.map((cell, colID) => {
                        return <td key={colID}>{cell}</td>
                      })}
                    </tr>
                  )
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
