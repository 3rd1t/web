import React from "react"
/* eslint-disable-next-line */
export interface RowProps {
  cells: React.ReactNode[]
  key?: number
}

export const Row = ({ cells, key }: RowProps) => {
  return (
    <tr key={key}>
      {cells.map((cell, i) => {
        return cell
      })}
    </tr>
  )
}

export default Row
