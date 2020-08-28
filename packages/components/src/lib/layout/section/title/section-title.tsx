import React from "react"

/* eslint-disable-next-line */
export interface SectionTitleProps {
  title: string
  subtitle?: string
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="lg:text-center">
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">{title}</h2>
      <p className="mt-3 text-lg text-gray-700">{subtitle}</p>
    </div>
  )
}

export default SectionTitle
