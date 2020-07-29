import React from "react"
import { HeroSection } from "@perfolio/components"
import { ReactComponent as ChartImage } from "../public/undraw_secure_data.svg"

/* eslint-disable-next-line */
interface IndexProps { }

const Index = (props: IndexProps) => {
  const check = (
    <svg className="h-6" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  )

  const feature = (icon: React.ReactNode, name: string) => (
    <li className="w-full p-2 sm:w-1/2">
      <div className="relative flex items-center h-full m-2 bg-gray-100 border border-gray-500 rounded">
        <div className="relative flex items-center justify-center p-4">
          <div className="absolute inset-y-0 left-0 p-1 ml-2 text-gray-100 bg-gray-900 rounded-full">
            {icon}
          </div>
        </div>
        <div className="flex justify-center w-full">

          <span className="mx-4 my-2 text-lg font-medium leading-6 text-gray-900">{name}</span>
        </div>
      </div>
    </li >
  )

  return (
    <>
      <section className="min-h-screen">
        <div className="flex flex-col items-start px-4 pt-4 space-y-8 sm:pt-16 sm:px-6 md:pt-20 lg:pt-32 lg:px-8 xl:pt-40 xl:flex-row xl:space-y-0 xl:space-x-8">
          <HeroSection
            color="gray"
            headline={<h1>Portfolio analytics insights for everyone</h1>}
            paragraph={
              <p className="flex flex-col xl:flex-row">
                Giving you access to the latest investment portfolio analytics methods in science.
              </p>
            }
            primaryButton={{
              label: "Get started",
              href: "#",
            }}
            secondaryButton={{
              label: "Log in",
              href: "#",
            }}
          ></HeroSection>
        </div>
      </section>
      <section className="flex flex-col justify-center min-h-screen px-4 mx-auto bg-white sm:px-6 lg:px-8">
        <div>
          <div className="md:text-center">
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Insights we offer</h3>
            <p className="max-w-2xl mt-4 text-xl leading-7 text-gray-500 md:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
          </div>
          <div className="container py-10 mx-auto">
            <ul className="flex flex-wrap -mx-2 lg:w-4/5 sm:mx-auto sm:mb-2">
              {feature(check, "Independent")}
              {feature(check, "Fair pricing - start for free!")}
              {feature(check, "High data quality")}
              {feature(check, "Sophisticated analytics method")}
            </ul>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center px-4 py-20 mx-auto bg-gray-100 sm:px-6 lg:px-8">
        <div className="container flex flex-col justify-around mx-auto lg:flex-row">
          <div>
            <h2 className="text-2xl font-semibold leading-8 text-gray-900 font-display sm:text-3xl sm:leading-9">Curious for more?</h2>
            <p className="max-w-2xl mt-2 text-base leading-6">
              <span className="text-gray-500">Follow us on our roadmap and on </span><a target="blank" href="https://github.com/perfolio">github</a>.</p>
          </div>
          <form className="mt-6" >
            <div className="sm:flex">
              <input type="email" placeholder="Enter your email" className="block w-full px-4 py-3 text-base leading-6 placeholder-gray-600 bg-white border border-gray-300 rounded shadow-none sm:max-w-xs focus:outline-none focus:border-gray-700"></input>
              <button className="relative block w-full px-6 py-3 mt-4 text-base font-semibold leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded shadow-md bg-carbon-900 sm:mt-0 sm:h-auto sm:ml-4 sm:w-auto hover:bg-carbon-800 focus:outline-none focus:bg-gray-800 hover:bg-gray-600" >
                Subscribe
              </button>
            </div>
          </form>
        </div>

      </section>
    </>
  )
}
export default Index
