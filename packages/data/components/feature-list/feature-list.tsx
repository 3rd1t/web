import React from "react"
/* eslint-disable-next-line */
export interface FeatureListProps {
  features: string[]
}

export const FeatureList = ({ features }: FeatureListProps) => {
  return (
    <ul className="space-y-3">
      {features.map((feature, key) => (
        <li className="flex items-center space-x-3" key={key}>
          <svg className="flex-shrink-0 w-6 h-6 text-data-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-gray-800">{feature}</span>
        </li>
      ))}
    </ul>
  )
}

export default FeatureList
