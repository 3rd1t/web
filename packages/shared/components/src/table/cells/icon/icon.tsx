import React from "react"

/* eslint-disable-next-line */
export interface IconProps {
  icon: React.ReactNode
  color: string
  key?: number
}

export const Icon = ({ icon, color, key }: IconProps) => {
  const colors = `text-${color}-800 bg-${color}-200`

  return (
    <td key={key} className="px-6 py-4 whitespace-no-wrap">
      <div className="flex-shrink-0 w-10 h-10">
        <div className={`p-2 rounded-full ${colors}`}>
          <span>{icon}</span>
        </div>
      </div>
    </td>
  )
}

export default Icon
