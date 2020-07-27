import { AppProps } from "next/app"
import Head from "next/head"
import React from "react"
import "../../../css/tailwind.css"
import { Navbar, Footer } from "@perfolio/components"
const app = ({ Component, pageProps }: AppProps) => {
  const logo = (
    <div className="text-xl font-semibold">
      <span className="text-gray-800">PERFOLIO</span>
      <span className="text-red-600">CORE</span>
    </div>
  )

  return (
    <html lang="en">
      <Head>
        <title>Perfolio Core</title>
        <meta name="description" content="Content goes here" />
      </Head>
      <div className="h-screen bg-gray-100">
        <div className="container mx-auto">
          <Navbar logo={logo}></Navbar>
          <Component {...pageProps} />
        </div>
      </div>
      <Footer color="red" primaryText="text-white" secondaryText="text-red-100"></Footer>
    </html>
  )
}
export default app
