import React, { useState } from "react"
import { HeroSection, CodeExamples, Section, ScrollTip, Source, SectionTitle, SourceProps } from "@perfolio/components"
import { motion, AnimateSharedLayout } from "framer-motion"
import fs from "fs"
import matter from "gray-matter"
interface IndexProps {
  codeExamples: {
    language: string
    snippet: string
  }[]
  sources: SourceProps[]
}

const Index = (props: IndexProps) => {
  const feature = (title: string, points: string[]) => (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="w-1/4 -space-y-2 overflow-hidden bg-white border rounded-md hover:shadow-xl hover:border-2 border-research-500"
    >
      <h1 className="p-4 text-5xl font-black text-center text-carbon-900">{title}</h1>
      <div className="p-4 bg-gray-100">
        <ul className="mt-6 space-y-3 text-gray-800">
          {points.map((point, key) => {
            return (
              <li className="flex items-center space-x-3" key={key}>
                <svg className="w-5 h-5 text-research-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{point}</span>
              </li>
            )
          })}
        </ul>

        <button className="w-full px-4 py-2 mt-6 text-sm font-semibold text-gray-100 bg-gray-900 rounded focus:outline-none hover:bg-research-800">
          Get started
        </button>
        {/* <p className="mt-3 text-xs text-gray-500">Literally you probably haven't heard of them jean shorts.</p> */}
      </div>
    </motion.div>
  )

  return (
    <>
      <Section bg="bg-gray-100 " className="h-screen" id="index">
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
                  label: "Start now",
                  href: "#features",
                  className: "text-white bg-research-600 hover:bg-research-800",
                }}
                secondaryButton={{
                  label: "Contact us",
                  href: "mailto:info@perfol.io",
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
      <Section id="features" bg="bg-white">
        <SectionTitle
          title="Kenneth French’s factor returns the way you want"
          subtitle="Conversion to your home currency included."
        ></SectionTitle>
        <div className="flex justify-center mt-20 space-x-4">
          {feature("REST API", ["Any programing language", "Always up to date", "Code examples available"])}
          {feature("CSV", ["Use directly in Excel", "Why the fuck", "would you want this?"])}
          {feature("Charts", ["Analyse directly in your browser", "Who doesn't like charts", "what else?"])}
        </div>
      </Section>
      <Section id="charts" bg="bg-gray-100">
        <SectionTitle title="Charts"></SectionTitle>
        <div className="flex justify-center mt-16">
          <img src="https://via.placeholder.com/700x300"></img>
        </div>
      </Section>
      <Section id="sources" bg="bg-white">
        <SectionTitle
          title="Sources"
          subtitle="We apply the latest finance research findings. Please give the authors and us some credit and cite correctly."
        ></SectionTitle>
        <div className="px-4 mt-20 divide-y divide-gray-400">
          {props.sources.map((s, index) => {
            return (
              <Source
                key={index}
                author={s.author}
                date={s.date}
                title={s.title}
                abstract={s.abstract}
                citation={s.citation}
                link={s.link}
              ></Source>
            )
          })}
        </div>
      </Section>
    </>
  )
}

export const getStaticProps = async () => {
  // Sources
  const sourcePath = `${process.cwd()}/packages/research/public/sources/`
  const sourceFiles = fs.readdirSync(sourcePath, "utf-8")
  const sources = sourceFiles.map((filename) => {
    const meta = matter(fs.readFileSync(sourcePath + filename).toString())

    return {
      author: meta.data.author,
      date: meta.data.date,
      title: meta.data.title,
      abstract: meta.content,
      citation: meta.data.citation,
      link: meta.data.source,
    }
  })

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
      sources,
    },
  }
}

export default Index
