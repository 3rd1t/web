import React from "react"

/* eslint-disable-next-line */
export interface WrapperProps {
  children: React.ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {
  return <div className="px-6 py-4 whitespace-no-wrap">{children}</div>
}

export default Wrapper
