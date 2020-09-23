import React from "react"
import Wrapper from "../wrapper/wrapper"

/* eslint-disable-next-line */
export interface ButtonProps {
  label: string
  onClick: () => void
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <Wrapper>
      <button onClick={onClick} className="text-sm font-medium leading-5 text-indigo-600 hover:text-indigo-900">
        {label}
      </button>
    </Wrapper>
  )
}

export default Button
