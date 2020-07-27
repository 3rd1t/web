import React from "react"
import { HeroSection, Code } from "@perfolio/components"
import fs from "fs"

interface IndexProps {
  codeExamples: {
    language: string
    snippet: string
  }[]
}

const Index = (props: IndexProps) => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-start px-4 mt-10 space-y-8 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 xl:flex-row xl:space-y-0 xl:space-x-8">
        <HeroSection
          color="research"
          headline={
            <>
              <span className="text-research-600">Portfolio analytics </span>
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
        <div className="mx-auto">
          <Code code={props.codeExamples}></Code>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      codeExamples: [
        {
          language: "python",
          snippet: fs.readFileSync(
            `${process.cwd()}/apps/research/public/code-snippets/import-from-api.python.txt`,
            "utf-8",
          ),
        },
        {
          language: "r",
          snippet: fs.readFileSync(
            `${process.cwd()}/apps/research/public/code-snippets/import-from-api.r.txt`,
            "utf-8",
          ),
        },
      ],
    },
  }
}

export default Index
