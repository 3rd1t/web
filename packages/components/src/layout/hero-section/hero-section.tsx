import React from "react"

/* eslint-disable-next-line */
export interface HeroSectionProps {
  headline: string
  paragraph: React.ReactNode
  primaryButton: {
    label: string
    href: string
    className: string
  }
  secondaryButton?: {
    label: string
    href: string
    className: string
  }
  children?: React.ReactNode
}

export const HeroSection = (props: HeroSectionProps) => {
  const commonButtonClasses =
    "rounded-sm md:py-4 md:text-lg md:px-10 flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 transition duration-200 ease-in-out focus:outline-none"

  return (
    <div className="flex flex-col items-center w-full">
      <div className="space-y-4 text-left sm:text-center md:space-y-8 xl:space-y-12 lg:text-left">
        <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-carbon-900 xl:text-5xl sm:leading-none md:text-5xl">
          {props.headline}
        </h2>
        {<div className="text-carbon-600 sm:text-lg sm:mx-auto md:text-xl lg:mx-0">{props.paragraph}</div>}

        <div className="space-y-4 md:space-x-4 md:space-y-0">
          <div className="sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href={props.primaryButton.href}
                className={[commonButtonClasses, props.primaryButton.className].join(" ")}
              >
                {props.primaryButton.label}
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href={props.secondaryButton.label}
                className={[commonButtonClasses, props.secondaryButton.className].join(" ")}
              >
                {props.secondaryButton.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HeroSection
