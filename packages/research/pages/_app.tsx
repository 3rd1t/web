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
        />
      </Head>
      <div className="bg-gray-100">
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
