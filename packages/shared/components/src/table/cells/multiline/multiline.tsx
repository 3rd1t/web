import React from "react"
import { Wrapper } from "../wrapper/wrapper"

/* eslint-disable-next-line */
export interface MultilineProps {
  title: string | number
  content: string | number
  key?: number
}

export const Multiline = ({ title, content, key }: MultilineProps) => {
  return (
    <Wrapper>
      <span className="text-sm leading-5 text-gray-900">{title}</span>
      <p className="text-sm leading-5 text-gray-500">{content}</p>
    </Wrapper>
  )
}

export default Multiline
