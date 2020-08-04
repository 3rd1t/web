import { AppProps } from "next/app"
import Head from "next/head"
import React from "react"
import "dist/packages/tailwindcss/tailwind.css"
import { Navbar, Footer, Logo } from "@perfolio/components"

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Head>
        <title>Perfolio</title>
        <meta name="description" content="goes here" />
      </Head>
      <div className="bg-gray-100">
        <div className="inset-x-0 top-0 z-20 bg-gray-100">
          <Navbar
            logo={<Logo></Logo>}
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
                label: "Team",
                href: "#team",
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
      <Footer bg="bg-carbon-900" primaryText="text-white" secondaryText="text-gray-100"></Footer>
    </div>
  )
}
export default app
