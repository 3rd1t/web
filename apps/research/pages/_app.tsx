import { AppProps } from "next/app"
import Head from "next/head"
import React from "react"
import "../../../css/tailwind.css"
import { Logo, Navbar, Footer } from "@perfolio/components"

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <html lang="en">
      <Head>
        <title>Perfolio Research</title>
        <meta lang="en"></meta>
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
          <Component {...pageProps} />
        </div>
      </div>
      <Footer color="research" primaryText="text-white" secondaryText="text-research-100"></Footer>
    </html>
  )
}
export default app
