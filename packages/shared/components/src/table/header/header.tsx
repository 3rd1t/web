import React from "react"
import Wrapper from "../cells/wrapper/wrapper"

/* eslint-disable-next-line */
export interface HeaderProps {
  labels: string[]
}

export const Header = ({ labels }: HeaderProps) => {
  return (
    <thead>
      <tr>
        {labels.map((label, i) => (
          <th
            key={i}
            className="px-6 py-4 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50"
          >
            {label}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default Header
