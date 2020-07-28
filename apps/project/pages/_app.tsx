import { AppProps } from "next/app"
import Head from "next/head"
import React from "react"
import "../../../css/tailwind.css"
import { Navbar, Footer, Logo } from "@perfolio/components"

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <html lang="en">
      <Head>
        <title>Perfolio</title>
        <meta lang="en"></meta>
        <meta name="description" content="goes here" />
      </Head>
      <div className="bg-gray-100">
        <div className="">
          <Navbar
            logo={<Logo></Logo>}
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
                label: "Team",
                href: "#team",
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
      <Footer color="carbon" primaryText="text-white" secondaryText="text-gray-100"></Footer>
    </html>
  )
}
export default app
