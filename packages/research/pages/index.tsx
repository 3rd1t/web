import React, { useState } from "react"
import { HeroSection, CodeExamples, Section, ScrollTip } from "@perfolio/components"
import { motion, AnimateSharedLayout } from "framer-motion"
import fs from "fs"

interface IndexProps {
  codeExamples: {
    language: string
    snippet: string
  }[]
}

const Index = (props: IndexProps) => {
  const [codeIsFullscreen, setCodeIsFullscreen] = useState(false)

  return (
    <>
      <Section bg="bg-gray-100 " className="relative h-screen" id="index">
        <AnimateSharedLayout>
          <motion.div
            layout
            className="flex flex-col items-center px-4 space-y-8 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-40 xl:flex-row xl:space-y-0 xl:space-x-8"
          >
            <motion.div layout>
              <HeroSection
                headline="Get the right factor returns from our research-friendly API"
                paragraph={
                  <p className="flex flex-col xl:flex-row">
                    We offer Kenneth French’s factor returns data via convenient REST API. No csv imports and data
                    cleaning needed. Just go ahead with your analysis.
                  </p>
                }
                primaryButton={{
                  label: "Get started",
                  href: "#",
                  className: "text-white bg-research-600 hover:bg-research-800",
                }}
                secondaryButton={{
                  label: "Log in",
                  href: "#",
                  className: "text-research-900 hover:text-research-700",
                }}
              ></HeroSection>
            </motion.div>
            <motion.div layout>
              <CodeExamples code={props.codeExamples}></CodeExamples>
            </motion.div>
          </motion.div>

          <div className="absolute inset-x-0 bottom-0 flex justify-center mb-40">
            <ScrollTip href="#features" className="text-gray-100 bg-research-600"></ScrollTip>
          </div>
        </AnimateSharedLayout>
      </Section>
      <Section bg="bg-white">
        <span>Placeholder</span>
      </Section>
    </>
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
