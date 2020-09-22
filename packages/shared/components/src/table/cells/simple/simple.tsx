import React from "react"

/* eslint-disable-next-line */
export interface SimpleProps {
  label: string | number
  key?: number
}

export const Simple = ({ label, key }: SimpleProps) => {
  return (
    <td key={key} className="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
      {label}
    </td>
  )
}

export default Simple
