import React from "react"
import Link from "next/link"

export interface FeatureSectionProps {
  title: string
  subtitle: string
  button: { label: string; href: string }
  illustration: React.ReactNode
  rightAligned?: boolean
}

export const FeatureSection = ({ title, subtitle, button, illustration, rightAligned }: FeatureSectionProps) => {
  const link = (
    <Link href={button.href}>
      <a className="w-full px-8 py-3 font-medium text-gray-900 border border-gray-600 rounded-sm sm:max-w-xs md:py-4 md:text-lg md:px-10 focus:outline-none hover:bg-gray-100 hover:text-gray-700">
        {button.label}
      </a>
    </Link>
  )

  return (
    <div
      className={`flex flex-col items-center justify-between  space-y-8 lg:space-y-0 lg:space-x-16 ${
        rightAligned ? "lg:flex-row-reverse text-center lg:text-right" : "lg:flex-row lg:text-left"
      }`}
    >
      <div className="w-full space-y-2 md:space-y-4 xl:space-y-6">
        <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-carbon-900 xl:text-5xl sm:leading-none md:text-5xl">
          {title}
        </h2>
        <p className="text-carbon-600 sm:text-lg sm:mx-auto md:text-xl lg:mx-0">{subtitle}</p>
        <div className="hidden lg:block">{link}</div>
      </div>
      <div>{illustration}</div>
      <div className="lg:hidden">{link}</div>
    </div>
  )
}

export default FeatureSection
