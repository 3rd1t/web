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
        <title>Perfolio Documentation</title>
        <meta name="description" content="Documentation for perfolio"></meta>
        <link href="https://fonts.googleapis.com/css?family=Inter:200,300,400,500,600,700" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png"></link>
        <link rel="manifest" href="/fav/site.webmanifest"></link>
        <link rel="mask-icon" href="/fav/safari-pinned-tab.svg" color="#4580FE"></link>
        <meta name="msapplication-TileColor" content="#4580FE"></meta>
        <meta name="theme-color" content="#4580FE"></meta>
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
