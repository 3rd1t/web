import { AppProps } from "next/app"
import Head from "next/head"
import React from "react"
import "dist/packages/tailwindcss/tailwind.css"
import { Navbar, Footer, Logo } from "@perfolio/components"

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Head>
        <title>Perfolio Research</title>
        <meta
          name="description"
          content="A research data platform offering Kenneth French's factor returns via a convenient REST API, conversion in several currencies included"
        ></meta>
        <link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png"></link>
        <link rel="manifest" href="/fav/site.webmanifest"></link>
        <link rel="mask-icon" href="/fav/safari-pinned-tab.svg" color="#4580FE"></link>
        <meta name="msapplication-TileColor" content="#4580FE"></meta>
        <meta name="theme-color" content="#4580FE"></meta>
      </Head>
      {/* pt-16 must be the same height as the navbar itself */}
      <div className="pt-16 bg-gray-100">
        <div className="fixed inset-x-0 top-0 z-20 bg-gray-100">
          <Navbar
            logo={<Logo color="text-research-500" domain="research"></Logo>}
            links={[
              {
                label: "Product",
                href: "/",
              },
              {
                label: "Features",
                href: "#features",
              },
              {
                label: "Documentation",
                href: "/docs",
              },
            ]}
          ></Navbar>
        </div>
        <Component {...pageProps} />
      </div>
      <Footer bg="bg-research-700" primaryText="text-white" secondaryText="text-gray-100"></Footer>
    </div>
  )
}
export default app
