import React from "react"
import { HeroSection, CodeExamples, Section, Source, SectionTitle, SourceProps, Wordcloud } from "@perfolio/shared/ui"
import { motion, AnimateSharedLayout } from "framer-motion"
import fs from "fs"
import Link from "next/link"
import matter from "gray-matter"
import Wrapper from "../components/wrapper/wrapper"

interface IndexProps {
  codeExamples: {
    language: string
    snippet: string
  }[]
  sources: SourceProps[]
}

const Index = (props: IndexProps) => {
  const feature = (
    title: string,
    subtitle: string,
    button: { label: string; href: string },
    illustration: React.ReactNode,
  ) => (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center w-full">
        <div className="space-y-2 text-left sm:text-center md:space-y-4 xl:space-y-6 lg:text-left">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-carbon-900 xl:text-5xl sm:leading-none md:text-5xl">
            {title}
          </h2>
          {<div className="text-carbon-600 sm:text-lg sm:mx-auto md:text-xl lg:mx-0">{subtitle}</div>}

          <div className="sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link href={button.href}>
                <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-gray-100 transition duration-200 ease-in-out bg-gray-900 rounded-sm text-leading-6 md:py-4 md:text-lg md:px-10 focus:outline-none">
                  {button.label}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {illustration}
    </div>
  )

  return (
    <Wrapper>
      <Section bg="bg-gray-100 " className="min-h-screen" id="index">
        <AnimateSharedLayout>
          <motion.div
            layout
            className="flex flex-col items-center px-4 space-y-8 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-40 lg:flex-row lg:space-y-0 lg:space-x-8"
          >
            <motion.div layout>
              <HeroSection
                headline="Get the right factor returns from our data-friendly API"
                paragraph={
                  <p className="flex flex-col xl:flex-row">
                    We offer Kenneth French’s factor returns data via convenient REST API. No csv imports and data
                    cleaning needed. Just go ahead with your analysis.
                  </p>
                }
                primaryButton={{
                  label: "Start now",
                  href: "#features",
                  className: "text-white bg-data-600 hover:bg-data-800",
                }}
                secondaryButton={{
                  label: "Contact us",
                  href: "mailto:info@perfol.io",
                  className: "text-data-900 hover:text-data-700",
                }}
              ></HeroSection>
            </motion.div>
            <motion.div layout className="hidden lg:block">
              <CodeExamples code={props.codeExamples}></CodeExamples>
            </motion.div>
          </motion.div>
        </AnimateSharedLayout>
      </Section>
      <Section id="features" bg="bg-white">
        <SectionTitle
          title="Kenneth French’s factor returns the way you want"
          subtitle="Conversion to your home currency included."
        ></SectionTitle>
        <div className="flex flex-col justify-center mt-20 space-y-4 lg:space-x-4 lg:space-y-0 lg:flex-row">
          {feature(
            "Nulla egestas, est ut vulputate suscipit, turpis",
            "Sed laoreet eleifend nisl, eget ullamcorper velit gravida nec. Fusce porta diam tellus, sit. ",
            { label: "Sign in", href: "/signin" },
            <Wordcloud
              words={["Factor Returns", "Digitalization Ratings", "Risk Free Exchange", "Currency Exchange"]}
            />,
          )}
        </div>
      </Section>
      <Section id="sources" bg="bg-gray-100">
        <SectionTitle
          title="Sources"
          subtitle="We apply the latest finance data findings. Please give the authors and us some credit and cite correctly."
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
      <Section className="bg-white">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div>
            <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              <span>Ready to get started? </span>
              <br className="xl:hidden"></br>
              <span>Start with a</span>
              <span className="text-data-500"> free plan</span>
            </h2>
            <p className="mt-2 text-gray-700">
              Explore our charts or create an account to unlock the full potential of our API.
            </p>
          </div>
          <Link href="/signup">
            <a className="block w-full px-6 py-3 font-semibold text-white transition duration-150 ease-in-out border border-transparent rounded shadow-md bg-carbon-900 sm:mt-0 sm:h-auto sm:ml-4 sm:w-auto hover:bg-carbon-800 focus:outline-none focus:bg-carbon-800 hover:bg-carbon-600">
              Sign up
            </a>
          </Link>
        </div>
      </Section>
    </Wrapper>
  )
}

export const getStaticProps = async () => {
  // Sources
  const sourcePath = `${process.cwd()}/packages/content/src/lib/sources/`
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
            `${process.cwd()}/packages/content/src/lib/code-snippets/import-from-api.python.txt`,
            "utf-8",
          ),
        },
        {
          language: "r",
          snippet: fs.readFileSync(
            `${process.cwd()}/packages/content/src/lib/code-snippets/import-from-api.r.txt`,
            "utf-8",
          ),
        },
      ],
      sources,
    },
  }
}

export default Index
