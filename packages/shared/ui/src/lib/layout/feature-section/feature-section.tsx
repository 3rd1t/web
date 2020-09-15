import React from "react"
import Link from "next/link"
export interface FeatureSectionProps {
  title: string
  content: React.ReactNode
  button?: { label: string; href: string }
  illustration: React.ReactNode
  rightAligned?: boolean
}

export const FeatureSection = ({ title, content, button, illustration, rightAligned }: FeatureSectionProps) => {
  const link = button ? (
    <Link href={button.href}>
      <a className="flex items-center font-medium text-data-700 sm:max-w-xs focus:outline-none hover:bg-gray-100 hover:text-gray-700">
        {button.label}
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </Link>
  ) : null

  return (
    <>
      <h2
        className={`text-4xl font-extrabold leading-10 tracking-tight text-gray-800 xl:text-5xl sm:leading-none md:text-5xl text-left ${
          rightAligned ? "lg:text-right" : ""
        }`}
      >
        {title}
      </h2>
      <div
        className={`flex mt-16 items-center text-left justify-around space-y-8 lg:space-y-0 flex-col ${
          rightAligned ? "lg:flex-row-reverse  lg:text-right" : "lg:text-left lg:flex-row"
        }`}
      >
        <div className={`flex flex-grow ${rightAligned ? "justify-end" : "justify-start"}`}>{illustration}</div>
        <div className="flex-grow">
          <div className="space-y-8 text-left">
            <div className="text-gray-700 sm:text-lg sm:mx-auto md:text-xl lg:mx-0">{content}</div>
            <div className="text-left">{link}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureSection
