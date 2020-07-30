import { AppProps } from "next/app"
import Head from "next/head"
import React from "react"
import "../../../css/tailwind.css"
import { Navbar, Footer, Logo } from "@perfolio/components"

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <title>Perfolio</title>
        <meta lang="en"></meta>
        <meta name="description" content="goes here" />
      </Head>
      <body className="bg-gray-100" >
        <div className="relative">
          <div className="fixed inset-x-0 top-0">
            <div className="bg-gray-100">

              <Navbar

                logo={<Logo></Logo>}
                links={[
                  {
                    label: "Product",
                    href: "#index",
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
            </div>

          </div>
          <Component {...pageProps} />
        </div>
      </body>
      <Footer color="carbon" primaryText="text-white" secondaryText="text-gray-100"></Footer>
    </html>
  )
}
export default app
