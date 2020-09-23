import React from "react"
import { Wrapper } from "../wrapper/wrapper"

/* eslint-disable-next-line */
export interface TagProps {
  label: string | number | React.ReactNode
  color: string
  key?: number
}

export const Tag = ({ label, color, key }: TagProps) => {
  const colors = `text-${color}-800 bg-${color}-200`

  return (
    <Wrapper>
      <span className={`inline-flex px-2 text-xs font-semibold leading-5 rounded-full ${colors}`}>{label}</span>
    </Wrapper>
  )
}

export default Tag
