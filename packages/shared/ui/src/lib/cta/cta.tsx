import React from "react"
import Link from "@perfolio/components/clickable/link/link"
/* eslint-disable-next-line */
export interface CTAProps {
  headline: string
  subline: string
  button: {
    bgColor?: string
    textColor?: string
    label: string
    href: string
  }
}

export const CTA = ({ headline, button, subline }: CTAProps) => {
  return (
    <div>
      <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        {headline}
      </h2>
      <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
        <p className="mt-2 text-gray-700">{subline}</p>
        <div className="w-full whitespace-no-wrap sm:w-auto">
          <Link
            className="px-4 py-2 font-semibold "
            label={button.label}
            bgColor={button.bgColor}
            textColor={button.textColor}
            href={button.href}
          />
        </div>
      </div>
    </div>
  )
}

export default CTA
