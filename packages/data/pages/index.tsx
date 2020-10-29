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
import { FeatureList } from "../components/feature-list/feature-list"
import fs from "fs"
import matter from "gray-matter"
import Wrapper from "../components/wrapper/wrapper"
import { Link } from "@perfolio/components/clickable/link/link"
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
        <div className="flex flex-col items-center px-4 space-y-8 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-40 lg:flex-row lg:space-y-0 lg:space-x-8">
          <div>
            <HeroSection
              headline="Make use of Perfolio's data power"
              paragraph={
                <p className="flex flex-col xl:flex-row">
                  Take your analysis to the next level with financial data from our state-of-the-art scalable data
                  platform.
                </p>
              }
              primaryButton={
                <Link
                  className="px-4 py-2 font-semibold"
                  label="Start now"
                  bgColor="bg-data-300"
                  textColor="text-gray-900"
                  href="#features"
                />
              }
              secondaryButton={
                <Link
                  className="font-medium"
                  textColor="text-gray-900"
                  label="Contact us"
                  href="mailto:info@perfol.io"
                />
              }
            ></HeroSection>
          </div>
          <div className="hidden lg:block">
            <img src="https://via.placeholder.com/1280x720" alt="Placeholder for UI"></img>
          </div>
        </div>
      </Section>
      <Section id="data" bg="bg-white">
        <FeatureSection
          title="Get high quality data the easy way"
          subTitle="Used in production by our own apps"
          content={
            <FeatureList
              features={[
                "Factor returns by Kenneth French in multiple currencies",
                "Comprehensive data descriptions",
                "Amazingly high data integrity and quality thanks to numerous in-depth tests",
                "Soon available: Sustainability ratings, Digitalization ratings and many more!",
              ]}
            />
          }
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
      </Section>
      <Section id="builders" bg="bg-gray-100">
        <FeatureSection
          rightAligned
          title="Build data sets tailored to your needs"
          subTitle="Fetch and parse only what's necessary"
          content={
            <FeatureList
              features={[
                "Fetch data dynamically via our data-friendly RESTful API",
                "Export data snapshots as JSON, CSV or XML file",
                "Get instant insights through our visualization tools",
              ]}
            />
          }
          button={{ label: "Sign in", href: "/signin" }}
          illustration={<img src="img/Data_Mockup_Images_Download.svg" alt="Available formats for data download (.xml, .json and .csv)"></img>}
        />
      </Section>
      <Section id="charts" bg="bg-white">
        <FeatureSection
          title="Create awesome charts quickly"
          subTitle="Stop spending hours fiddling with charting tools"
          content={
            <FeatureList
              features={[
                "From simple line charts to complex visualizations",
                "Change the style according to your preferences",
                "Export as image or svg file",
              ]}
            />
          }
          button={{ label: "View charts", href: "/app" }}
          illustration={<img src="https://via.placeholder.com/500x360" alt="Placeholder for UI"></img>}
        />
      </Section>
      <Section id="code" bg="bg-gray-100">
        <FeatureSection
          rightAligned
          title="Made for researchers and analysts"
          subTitle="Seamlessly integrates with your Python Pandas or R workflow"
          content={
            <FeatureList
              features={[
                "Start faster with actual analysis",
                "Reduce sources of error",
                "Language-independent",
                "Implement in your apps",
              ]}
            />
          }
          illustration={
            <div className="hidden md:block">
              <CodeExamples code={props.codeExamples}></CodeExamples>
            </div>
          }
        />
      </Section>
      <Section id="sources" bg="bg-white">
        <SectionTitle
          title="Data sources"
          subtitle="We obtain our raw data only from selected high-quality sources. If you use our data for research, please always give the authors and us some credit and cite correctly."
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
      <Section className="bg-gray-100">
        <CTA
          headline="Ready to get started? Sign up for a free plan."
          subline="Explore our charts or create an account to unlock the full potential of our API."
          button={{ href: "/signup", label: "Sign up", bgColor: "bg-carbon-900", textColor: "text-gray-100" }}
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
        {
          language: "curl",
          snippet: fs.readFileSync(
            `${process.cwd()}/packages/content/src/lib/code-snippets/import-from-api.curl.txt`,
            "utf-8",
          ),
        },
      ],
      sources,
    },
  }
}

export default Index
