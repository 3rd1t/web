import React from "react"

/* eslint-disable-next-line */
export interface MultilineProps {
  title: string | number
  content: string | number
  key?: number
}

export const Multiline = ({ title, content, key }: MultilineProps) => {
  return (
    <td key={key} className="px-6 py-4">
      <span className="text-sm leading-5 text-gray-900">{title}</span>
      <p className="text-sm leading-5 text-gray-500">{content}</p>
    </td>
  )
}

export default Multiline
