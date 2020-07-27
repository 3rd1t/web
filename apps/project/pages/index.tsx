import React from "react"
import { HeroSection, Code } from "@perfolio/components"

/* eslint-disable-next-line */
interface IndexProps {}

const Index = (props: IndexProps) => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-start px-4 mt-10 space-y-8 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 xl:flex-row xl:space-y-0 xl:space-x-8">
        <HeroSection
          color="gray"
          headline={
            <>
              <span className="text-gray-900">Portfolio analytics </span>
              <br className="xl:hidden"></br>
              insights for everyone
            </>
          }
          paragraph="Factor investing is a strategy that chooses securities on attributes that are associated with higher returns. There are two main types of factors that have driven returns of stocks, bonds, and other factors: macroeconomic factors and style factors. The former captures broad risks across asset classes while the latter aims to explain returns and risks within asset classes."
          primaryButton={{
            label: "Get started",
            href: "#",
          }}
          secondaryButton={{
            label: "Log in",
            href: "#",
          }}
        ></HeroSection>
      </div>
    </div>
  )
}
export default Index
