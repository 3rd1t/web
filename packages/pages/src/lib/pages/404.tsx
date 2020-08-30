import React from "react"
import { Section } from "@perfolio/shared/ui"

export const NotFound404 = () => {
  return (
    <Section className="flex items-center min-h-screen">
      <div>
        <h1 className="flex items-center justify-center text-gray-900 divide-x divide-gray-600">
          <span className="p-3 text-5xl font-black">404</span>
          <span className="p-3 text-xl font-thin">Page Not Found</span>
        </h1>
        <p className="mt-8 font-thin text-center text-gray-700">
          Just like guarantees of future returns, this page does not exist.
        </p>
      </div>
    </Section>
  )
}

export default NotFound404
