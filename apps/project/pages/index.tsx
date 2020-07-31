import React from "react"
import { HeroSection, Section } from "@perfolio/components"
import { motion } from "framer-motion"
/* eslint-disable-next-line */
interface IndexProps {}

const Index = (props: IndexProps) => {
  const check = (
    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  )

  const feature = (icon: React.ReactNode, name: string, description: string, isLast?: boolean) => (
    <div className="relative flex pb-12 lg:items-center lg:w-1/4 lg:flex-col">
      <div
        className={`absolute inset-0 flex items-center justify-center sm:w-12 w-10 md:w-12 h-full ${
          isLast ? "hidden" : "lg:hidden"
        }`}
      >
        <div className="w-1 h-full pointer-events-none bg-carbon-200"></div>
      </div>
      <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 p-1 bg-gray-100 border-4 rounded-full text-carbon-900 border-carbon-900 lg:bg-carbon-900 lg:text-gray-100 lg:border-0 border-3 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:rounded">
        {icon}
      </div>
      <div className="flex-grow pl-4 lg:pl-0 lg:mt-8">
        <h2 className="mb-1 text-lg font-medium leading-6 text-carbon-900">{name}</h2>
        <p className="text-base leading-6 text-carbon-600">{description}</p>
      </div>
    </div>
  )

  return (
    <>
      <Section bg="bg-gray-100" className="relative min-h-screen" id="index">
        <div className="flex flex-col items-start px-4 pt-20 space-y-8 sm:pt-24 sm:px-6 md:pt-28 lg:pt-32 lg:px-8 xl:pt-40 xl:flex-row xl:space-y-0 xl:space-x-8">
          <HeroSection
            color="carbon"
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
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute inset-x-0 bottom-0 flex justify-center mb-40"
        >
          <div className="inline-flex w-20 h-20 p-4 text-gray-100 duration-500 transform rotate-45 shadow-xl group bg-carbon-900 hover:scale-105 hover:-translate-y-4">
            <div className="flex items-center justify-center transform -rotate-45">
              <a href="#features">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </Section>
      <Section bg="bg-white" id="features" className="flex flex-col justify-center px-4 mx-auto sm:px-6 lg:px-8">
        <div className="md:text-center">
          <h3 className="text-3xl font-bold leading-8 tracking-tight text-carbon-900 sm:text-4xl sm:leading-10">
            Insights we offer
          </h3>
          <p className="max-w-2xl mt-4 text-xl leading-7 text-carbon-500 md:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </div>
        <div className="flex flex-col px-5 mx-auto my-24 lg:flex-row lg:space-x-8">
          {feature(
            check,
            "Independent",
            "Morbi ultricies molestie lacinia. Vivamus sagittis congue eleifend. Phasellus congue porttitor risus, a imperdiet enim tristique vel. Praesent libero dolor. ",
          )}
          {feature(
            check,
            "Fair pricing - start for free!",
            "Nam imperdiet metus quis sapien egestas sagittis. Cras venenatis, orci non tempus porttitor, quam lorem sodales mauris, in fermentum purus. ",
          )}
          {feature(
            check,
            "High data quality",
            "Nullam dapibus turpis lorem, at porta risus hendrerit nec. Maecenas eu ornare felis. Praesent fringilla libero magna, in tempus dui. ",
          )}
          {feature(
            check,
            "Sophisticated analytics methods - simply illustrated",
            "Morbi at mauris et dolor rutrum molestie. In venenatis dictum tellus ut varius. Cras sed ante tincidunt, condimentum lacus eu.",
            true,
          )}
        </div>
      </Section>
      <Section className="flex flex-col justify-center" id="team">
          <h2 className="text-3xl font-extrabold leading-8 tracking-tight text-center text-carbon-900 sm:text-4xl sm:leading-10">
            Our Team
          </h2>
        <div className="flex flex-col px-5 py-16 mx-auto">
          <div className="mx-auto lg:w-4/6">
            <div className="overflow-hidden rounded-sm">
              <img alt="team photo" className="object-cover w-full" src="./team.jpg"></img>
            </div>
            <div className="flex flex-col mt-10 sm:flex-row">
              <div className="text-center sm:w-1/3 sm:pr-8 sm:py-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-carbon-900">
                  <svg
                    className="p-3 text-gray-100 stroke-current"
                    viewBox="0 0 194 148"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 106.208L97.3883 17.8199L134.158 54.5894M185.07 41.8615L96.6814 130.25L59.9118 93.4803"
                      strokeWidth="25"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-center justify-center mt-4 space-y-2 text-center">
                  <h2 className="text-lg font-medium leading-6 text-carbon-900">Perfolio</h2>
                  <p className="text-base leading-6 text-left text-carbon-600 sm:text-center">
                    We are all super impressed by the performance of our product owners from amos and would like to
                    thank them for everything they have taught us.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-carbon-300 sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 sm:mt-0">
                <p className="text-lg leading-6 text-center text-carbon-600 sm:text-left">
                  Mauris porta, turpis eu rhoncus accumsan, neque tortor feugiat purus, vel egestas tellus magna nec
                  leo. Pellentesque ultrices posuere consequat. Quisque mollis erat eget aliquam mollis. Aenean
                  convallis aliquet augue venenatis posuere. Donec pretium ante nunc, eu tempus diam dictum quis. Etiam
                  nunc magna, tincidunt et porttitor at, volutpat rutrum felis. Nullam condimentum consectetur urna non
                  pharetra. Vivamus enim massa, porttitor a lobortis dignissim, iaculis id arcu. Aliquam feugiat nisl
                  sed blandit pulvinar. Sed bibendum rhoncus erat, et feugiat dolor ullamcorper non. Sed interdum et
                  justo non aliquet.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section bg="bg-white" id="subscribe" className="flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="container flex flex-col justify-around mx-auto lg:flex-row">
          <div>
            <h2 className="text-2xl font-semibold leading-8 text-carbon-900 font-display sm:text-3xl sm:leading-9">
              Curious for more?
            </h2>
            <p className="max-w-2xl mt-2 text-base leading-6">
              <span className="text-carbon-600">Follow us on our roadmap and on </span>
              <a target="blank" href="https://github.com/perfolio">
                github
              </a>
              .
            </p>
          </div>
          <form className="mt-6">
            <div className="sm:flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="block w-full px-4 py-3 text-base leading-6 bg-white border rounded shadow-none placeholder-carbon-600 border-carbon-300 sm:max-w-xs focus:outline-none focus:border-carbon-700"
              ></input>
              <button className="relative block w-full px-6 py-3 mt-4 text-base font-semibold leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded shadow-md bg-carbon-900 sm:mt-0 sm:h-auto sm:ml-4 sm:w-auto hover:bg-carbon-800 focus:outline-none focus:bg-carbon-800 hover:bg-carbon-600">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </Section>
    </>
  )
}
export default Index
