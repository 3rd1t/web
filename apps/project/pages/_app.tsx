import { AppProps } from "next/app"
import Head from "next/head"
import React from "react"
import "../../../css/tailwind.css"
import { Navbar, Footer } from "@perfolio/components"

const app = ({ Component, pageProps }: AppProps) => {
  const logo = <span className="text-xl font-semibold text-carbon-900 hover:text-gray-800">PERFOLIO</span>

  return (
    <html lang="en">
      <Head>
        <title>Perfolio</title>
        <meta lang="en"></meta>
        <meta name="description" content="goes here" />
      </Head>
      <div className="bg-gray-100">
        <div className="container mx-auto">
          <Navbar logo={logo}></Navbar>
          <Component {...pageProps} />
        </div>
      </div>
      <Footer color="carbon" primaryText="text-white" secondaryText="text-gray-100"></Footer>
    </html>
  )
}
export default app
