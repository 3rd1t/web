import React from "react"

/* eslint-disable-next-line */
export interface DotsProps {
  current: number
  max: number
}

export const Dots = ({ current, max }: DotsProps) => {
  const tmp = []
  for (let i = 0; i < max; i++) {
    tmp.push(i)
  }

  return (
    <div className="flex items-center space-x-6">
      {tmp.map((i) => (
        <span
          key={i}
          className={` rounded-full ${
            i < current
              ? "bg-data-600 w-2 h-2"
              : i === current
              ? "bg-data-700 border-4 w-4 h-4 border-data-400"
              : "w-2 h-2 bg-gray-400"
          }`}
        ></span>
      ))}
    </div>
  )
}

export default Dots
