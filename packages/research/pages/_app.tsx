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
        <meta name="description" content="goes here" />
      </Head>
      <div className="bg-gray-100">
        <div className="container mx-auto">
          <Navbar
            logo={<Logo color="text-research-600" domain="research"></Logo>}
            links={[
              {
                label: "Product",
                href: "#product",
                internal: true,
              },
              {
                label: "Features",
                href: "#features",
                internal: true,
              },
              {
                label: "Documentation",
                href: "#",
                internal: false,
              },
            ]}
          ></Navbar>
        </div>
        <Component {...pageProps} />
      </div>
      <Footer bg="bg-research-900" primaryText="text-white" secondaryText="text-research-100"></Footer>
    </div>
  )
}
export default app
