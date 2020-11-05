import { AppProps } from "next/app"
import Head from "next/head"
import React from "react"
import "dist/packages/css/tailwind.css"

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Head>
        <title>Perfolio</title>
        <meta
          name="description"
          content="An application for investment portfolio analytics, aggregating, analyzing and measuring performance of holdings such as stocks, bonds or real estate"
        />
        <link href="https://fonts.googleapis.com/css?family=Inter:200,300,400,500,600,700" rel="preload" />
        <link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png"></link>
        <link rel="manifest" href="/fav/site.webmanifest"></link>
        <link rel="mask-icon" href="/fav/safari-pinned-tab.svg" color="#1A202C"></link>
        <meta name="msapplication-TileColor" content="#1A202C"></meta>
        <meta name="theme-color" content="#1A202C"></meta>

        <link rel="alternative" hrefLang="en" href="https://perfol.io"></link>
        <link rel="alternative" hrefLang="de" href="https://perfol.io/de"></link>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
export default app
