import { AppProps } from "next/app"
import Head from "next/head"
import React from "react"
import "dist/packages/css/tailwind.css"
import { Wrapper } from "../components/wrapper"
import pages from "../data/pages"
import { Section, Menu } from "@perfolio/shared/ui"
const app = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Head>
        <title>Perfolio</title>
        <meta name="description" content="goes here" />
      </Head>
      <Wrapper>
        <Section>
          <div className="relative flex w-full">
            <div className="sticky top-0 flex-shrink-0 hidden h-screen pt-16 md:flex">
              <Menu collections={pages}></Menu>
            </div>
            <div className="pt-16 mx-auto prose-sm md:prose lg:prose-lg xl:prose-xl">
              <Component {...pageProps} />
            </div>
          </div>
        </Section>
      </Wrapper>
    </div>
  )
}

export default app
