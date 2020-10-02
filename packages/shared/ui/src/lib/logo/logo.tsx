import React from "react"

/* eslint-disable-next-line */
export interface LogoProps {
  domain?: string
  imageColor?: string
  color?: string
  imageOnly?: boolean
}

export const Logo = (props: LogoProps) => {
  const logo = (
    <div className="text-xl font-semibold">
      <span className="text-gray-800">PERFOLIO</span>
      {props.domain && props.color && <span className={`uppercase ${props.color}`}>{props.domain}</span>}
    </div>
  )
  return (
    <div className="flex items-center space-x-2">
      <svg
        className={`w-full stroke-current ${props.imageColor}`}
        viewBox="0 0 194 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 106.208L97.3883 17.8199L134.158 54.5894M185.07 41.8615L96.6814 130.25L59.9118 93.4803"
          strokeWidth="25"
        />
      </svg>
      {props.imageOnly ? null : logo}
    </div>
  )
}

export default Logo
