import React from "react"
import { Section } from "@perfolio/components"
import Link from "next/link"

/* eslint-disable-next-line */
export interface SuccessProps {}

export const Success = (props: SuccessProps) => {
  return (
    <Section className="flex items-center min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Thank you for subscribing, we will be in touch shortly.
        </h1>
        <Link href="/">
          <a className="mt-6 text-sm font-semibold text-research-600 focus:outline-none focus:underline">← Go back</a>
        </Link>
      </div>
    </Section>
  )
}

export default Success
