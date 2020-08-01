import React from "react"
import { HeroSection, CodeExamples } from "@perfolio/components"
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
          headline="Get the right factor returns from our research-friendly API"
          paragraph="Factor investing is a strategy that chooses securities on attributes that are associated with higher returns. There are two main types of factors that have driven returns of stocks, bonds, and other factors: macroeconomic factors and style factors. The former captures broad risks across asset classes while the latter aims to explain returns and risks within asset classes."
          primaryButton={{
            label: "Get started",
            href: "#",
            className: "bg-research-500 text-white hover:bg-research-700",
          }}
          secondaryButton={{
            label: "Log in",
            href: "#",
            className: "text-blue-900 hover:text-blue-700",
          }}
        ></HeroSection>
        <div className="mx-auto">
          <CodeExamples code={props.codeExamples}></CodeExamples>
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
            `${process.cwd()}/packages/research/public/code-snippets/import-from-api.python.txt`,
            "utf-8",
          ),
        },
        {
          language: "r",
          snippet: fs.readFileSync(
            `${process.cwd()}/packages/research/public/code-snippets/import-from-api.r.txt`,
            "utf-8",
          ),
        },
      ],
    },
  }
}

export default Index
