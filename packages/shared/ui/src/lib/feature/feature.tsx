import React from "react"

/* eslint-disable-next-line */
export interface FeatureProps {
  title: string
  description: string
  icon: React.ReactNode
}

export const Feature = ({ title, description, icon }: FeatureProps) => {
  return (
    <div className="flex items-start space-x-1 md:space-x-4">
      <div className="z-10 inline-flex items-start justify-center text-gray-100 rounded bg-gradient-to-l from-primary-500 to-primary-400">
        <span className="w-10 h-10 p-2 lg:p-3 xl:p-4 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:h-16 lg:w-16">{icon}</span>
      </div>

      <div className="flex-grow pl-4 lg:pl-0 lg:px-6">
        <h2 className="text-lg font-medium leading-6 text-carbon-900">{title}</h2>
        <p className="mt-1 text-base leading-6 text-carbon-600">{description}</p>
      </div>
    </div>
  )
}

export default Feature
