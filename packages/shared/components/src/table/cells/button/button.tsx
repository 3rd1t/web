import React from "react"

/* eslint-disable-next-line */
export interface ButtonProps {
  label: string
  onClick: () => void
  key?: number
}

export const Button = ({ label, onClick, key }: ButtonProps) => {
  return (
    <td key={key} className="px-6 py-4 text-sm font-medium leading-5 whitespace-no-wrap">
      <button onClick={onClick} className="text-indigo-600 hover:text-indigo-900">
        {label}
      </button>
    </td>
  )
}

export default Button
