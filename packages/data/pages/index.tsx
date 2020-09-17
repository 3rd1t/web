import React from "react"
import {
  HeroSection,
  CodeExamples,
  Section,
  Source,
  SectionTitle,
  SourceProps,
  Wordcloud,
  FeatureSection,
  CTA,
} from "@perfolio/shared/ui"
import { motion, AnimateSharedLayout } from "framer-motion"
import fs from "fs"
import Link from "next/link"
import matter from "gray-matter"
import Wrapper from "../components/wrapper/wrapper"
import { Builders } from "../components/builders/builders"
interface IndexProps {
  codeExamples: {
    language: string
    snippet: string
  }[]
  sources: SourceProps[]
}

const Index = (props: IndexProps) => {
  return (
    <Wrapper>
      <Section bg="bg-gray-100" className="min-h-screen" id="index">
        <AnimateSharedLayout>
          <motion.div
            layout
            className="flex flex-col items-center px-4 space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8"
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
      <Section id="data" bg="bg-white">
        <div className="flex flex-col justify-center mt-20 space-y-4 lg:space-x-4 lg:space-y-0 lg:flex-row">
          <FeatureSection
            title="We offer great data"
            subtitle="Sed laoreet eleifend nisl, eget ullamcorper velit gravida nec. Fusce porta diam tellus, sit. "
            button={{ label: "Sign in", href: "/signin" }}
            illustration={
              <Wordcloud
                words={[
                  "Factor Returns",
                  "Digitalization Ratings",
                  "Risk Free Exchange",
                  "Sustainability Ratings",
                  "Currency Exchange",
                ]}
              />
            }
          />
        </div>
      </Section>
      <Section id="builders" bg="bg-gray-100">
        <div className="flex flex-col justify-center mt-20 space-y-4 lg:space-x-4 lg:space-y-0 lg:flex-row">
          <FeatureSection
            rightAligned={true}
            title="Build the data as you want"
            subtitle="Sed laoreet eleifend nisl, eget ullamcorper velit gravida nec. Fusce porta diam tellus, sit. "
            button={{ label: "Sign in", href: "/signin" }}
            illustration={
              <Wordcloud
                words={[
                  "Factor Returns",
                  "Digitalization Ratings",
                  "Risk Free Exchange",
                  "Sustainability Ratings",
                  "Currency Exchange",
                ]}
              />
            }
          />
        </div>
      </Section>
      <Section id="charts" bg="bg-white">
        <div className="flex flex-col justify-center mt-20 space-y-4 lg:space-x-4 lg:space-y-0 lg:flex-row">
          <FeatureSection
            title="Explore data with charts"
            subtitle="Sed laoreet eleifend nisl, eget ullamcorper velit gravida nec. Fusce porta diam tellus, sit. "
            button={{ label: "Sign in", href: "/signin" }}
            illustration={
              <Wordcloud
                words={[
                  "Factor Returns",
                  "Digitalization Ratings",
                  "Risk Free Exchange",
                  "Sustainability Ratings",
                  "Currency Exchange",
                ]}
              />
            }
          />
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
        <CTA
          headline="Ready to get started? Sign up for a free plan."
          subline="Explore our charts or create an account to unlock the full potential of our API."
          button={{ href: "/signup", label: "Sign up" }}
        />
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
