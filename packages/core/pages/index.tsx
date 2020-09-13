import React from "react"
import { HeroSection, Section, Profile, Feature } from "@perfolio/shared/ui"
import Wrapper from "../components/wrapper/wrapper"
/* eslint-disable-next-line */
interface IndexProps {}

const features = [
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
        />
      </svg>
    ),
    title: "Independent",
    description:
      "We are not part of any bank or insurance company. We give you an unbiased view of your portfolio, not selling any investment products.",
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Complex made easy",
    description:
      "Everybody should have access to the latest analytics methods in science. Making these methods as simple and understandable as possible is part of our core business.",
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    title: "All in one place",
    description:
      "Tired of visiting several websites and apps to get an overview of your assets? Perfolio is the new home for your data.",
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
    title: "Highest data quality",
    description:
      "We cleanse and analyze data according to the highest standards. With our Premium plan you get access to even better data quality.",
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Privacy and Security",
    description:
      "We do not share your data with anyone else and store them only on servers within the EU. Privacy and security are our highest priority.",
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
    ),
    title: "Fair pricing",
    description: "Start for free! If you want more, get the plan that suits you best. No hidden fees.",
  },
]

const Index = (props: IndexProps) => {
  return (
    <Wrapper>
      <Section bg="bg-gray-100 " className="relative min-h-screen" id="index">
        <div className="flex flex-col items-center px-4 space-y-8 xl:flex-row xl:space-y-0 xl:space-x-8">
          <HeroSection
            headline="Portfolio analytics insights for everyone"
            paragraph={
              <p className="flex flex-col xl:flex-row">
                Keeping track of all your assets and their performance is hard. Perfolio brings all information to one
                place and gives you access to the latest analytics methods in science.
              </p>
            }
            primaryButton={{
              label: "Get started",
              href: "/signup",
              className: "text-white bg-gray-900 hover:bg-carbon-800",
            }}
            secondaryButton={{
              label: "Log in",
              href: "/login",
              className: "text-carbon-900 hover:text-carbon-700",
            }}
          ></HeroSection>

          <div className="hidden max-w-screen-sm shadow-xl lg:block">
            <img src="/img/analytics_preview.jpg" alt="Analytics Preview"></img>
          </div>
        </div>
      </Section>
      <Section bg="bg-white" id="features" className="flex flex-col justify-center">
        <div className="md:text-center">
          <h3 className="text-3xl font-bold leading-8 tracking-tight text-carbon-900 sm:text-4xl sm:leading-10">
            Why Perfolio?
          </h3>
          <p className="max-w-2xl mt-4 text-xl leading-7 text-carbon-500 md:mx-auto">Make decisions based on data.</p>
        </div>
        <ul className="flex flex-col flex-wrap mx-auto my-24 md:flex-row">
          {features.map((f, index) => {
            return (
              <li key={index} className="p-3 md:w-1/2 xl:w-1/3">
                <Feature icon={f.icon} title={f.title} description={f.description}></Feature>
              </li>
            )
          })}
        </ul>
      </Section>
      <Section className="flex flex-col justify-center" id="team">
        <h2 className="text-3xl font-extrabold leading-8 tracking-tight text-center text-carbon-900 sm:text-4xl sm:leading-10">
          Our Team
        </h2>
        <div className="flex flex-col items-center mt-10 md:flex-row">
          <div className="text-center md:w-1/3 md:pr-8 md:py-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full md:h-32 md:w-32 bg-carbon-900">
              <svg
                className="w-full p-3 text-gray-100 stroke-current md:p-4"
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
              <p className="text-base leading-6 text-left md:text text-carbon-600 md:text-center">
                At Perfolio, we believe that investment decisions should always be based on as much well-founded
                information as possible. It is our mission to provide our users the most relevant and accurate financial
                information available.
              </p>
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-carbon-300 md:w-2/3 md:pl-8 md:py-8 md:border-l md:border-t-0 md:mt-0">
            <div className="flex flex-col items-center justify-center sm:flex-row sm:flex-wrap">
              <Profile
                className="w-2/3 p-4 sm:w-1/2 lg:w-1/4"
                name="Nicolas Webersinke"
                title="Product"
                image="/img/nico.jpeg"
              ></Profile>
              <Profile
                className="w-2/3 p-4 sm:w-1/2 lg:w-1/4"
                name="Andreas Thomas"
                title="Tech"
                image="/img/andreas.jpeg"
              ></Profile>
              <Profile
                className="w-2/3 p-4 sm:w-1/2 lg:w-1/4"
                name="Mads Jordt"
                title="Sales"
                image="/img/mads.jpeg"
              ></Profile>
              <Profile
                className="w-2/3 p-4 sm:w-1/2 lg:w-1/4"
                name="Kevin Kohler"
                title="Marketing"
                image="/img/kevin.jpeg"
              ></Profile>
            </div>
            <p className="mt-8 text-center text-carbon-600">
              We are a motivated team of enthusiastic techies who are passionate about capital market topics. Bringing
              together different backgrounds and skills, we want to revolutionize the way investors track their assets
              and measure the success of their investment strategy. We are always happy to chat - drop us a message!
            </p>
          </div>
        </div>
      </Section>
      <Section bg="bg-white" id="subscribe" className="flex flex-col justify-center">
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
          <form name="email-subs" className="mt-6" method="POST" data-netlify="true" action="/subscribe/success">
            <input type="hidden" name="form-name" value="email-subs" />
            <div className="sm:flex">
              <input
                id="email"
                required
                name="email"
                type="email"
                placeholder="Enter your email"
                className="block w-full px-4 py-3 text-base leading-6 bg-white border rounded shadow-none placeholder-carbon-600 border-carbon-300 sm:max-w-xs focus:outline-none focus:border-carbon-700"
              ></input>
              <label className="sr-only" htmlFor="email">
                Add your email.
              </label>
              <button
                type="submit"
                className="relative block w-full px-6 py-3 mt-4 text-base font-semibold leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded shadow-md bg-carbon-900 sm:mt-0 sm:h-auto sm:ml-4 sm:w-auto hover:bg-carbon-800 focus:outline-none focus:bg-carbon-800"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </Section>
    </Wrapper>
  )
}
export default Index
