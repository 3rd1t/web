import React from "react"
import { Section } from "@perfolio/components"
import Link from "next/link"

/* eslint-disable-next-line */
export interface SuccessProps {}

export const Success = (props: SuccessProps) => {
  return (
    <Section className="flex items-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl text-gray-900 md:text-2xl lg:text-3xl xl:text-4xl">
          Thank you for subscribing, we will be in touch shortly.
        </h1>
        <Link href="/">
          <button className="flex items-center mt-6 space-x-2 text-sm font-semibold hover:text-gray-900 text-research-600 focus:outline-none focus:underline">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 arrow-left">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Go back</span>
          </button>
        </Link>
      </div>
    </Section>
  )
}

export default Success
