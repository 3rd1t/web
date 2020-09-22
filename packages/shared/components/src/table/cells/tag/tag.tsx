import React from "react"

/* eslint-disable-next-line */
export interface TagProps {
  label: string | number | React.ReactNode
  color: string
  key?: number
}

export const Tag = ({ label, color, key }: TagProps) => {
  const colors = `text-${color}-800 bg-${color}-200`

  return (
    <td key={key} className="px-6 py-4 whitespace-no-wrap">
      <span className={`inline-flex px-2 text-xs font-semibold leading-5 rounded-full ${colors}`}>{label}</span>
    </td>
  )
}

export default Tag
