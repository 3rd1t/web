import React from "react"
import Wrapper from "../wrapper/wrapper"

/* eslint-disable-next-line */
export interface IconProps {
  icon: React.ReactNode
  color: string
}

export const Icon = ({ icon, color }: IconProps) => {
  const colors = `text-${color}-800 bg-${color}-200`

  return (
    <Wrapper>
      <div className="flex-shrink-0 w-10 h-10 ">
        <div className={`p-2 rounded-full ${colors}`}>
          <span>{icon}</span>
        </div>
      </div>
    </Wrapper>
  )
}

export default Icon
