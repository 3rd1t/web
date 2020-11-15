import React from "react"
import { HeroSection, Section, Profile, Feature } from "@perfolio/shared/ui"
import Wrapper from "../components/wrapper/wrapper"
import { Link } from "@perfolio/components/clickable/link/link"
import { NextPage, NextPageContext } from "next"
import { translations, translate } from "../i18n/text"
/* eslint-disable-next-line */
interface IndexProps {
  i18n: { [key: string]: string }
}

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
    title: "independend",
    description: "independendDescription",
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
    title: "complexMadeEasy",
    description: "complexMadeEasyDescription",
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

const Index = ({ i18n }: IndexProps) => {
  return (
    <Wrapper>
      <Section bg="bg-gray-100 " className="relative min-h-screen" id="index">
        <div className="flex flex-col items-center px-4 space-y-8 xl:flex-row xl:space-y-0 xl:space-x-8">
          <HeroSection
            headline={i18n.headline}
            paragraph={<p className="flex flex-col xl:flex-row">{i18n.subline}</p>}
            primaryButton={
              <Link
                className="px-4 py-2 font-semibold"
                label={i18n.signin}
                bgColor="bg-purple-800"
                textColor="text-purple-100"
                href="/api/login"
              />
            }
            secondaryButton={
              <Link
                className="font-medium"
                textColor="text-purple-900"
                label={i18n.contact}
                href="mailto:info@perfol.io"
              />
            }
          ></HeroSection>

          <div className="hidden max-w-screen-sm shadow-xl lg:block">
            <img src="/img/analytics_preview.jpg" alt="Analytics Preview"></img>
          </div>
        </div>
      </Section>
      <Section bg="bg-white" id="features" className="flex flex-col justify-center">
        <div className="md:text-center">
          <h3 className="text-3xl font-bold leading-8 tracking-tight text-purple-900 sm:text-4xl sm:leading-10">
            {i18n.whyPerfolio}
          </h3>
          <p className="max-w-2xl mt-4 text-xl leading-7 text-carbon-500 md:mx-auto">{i18n.whyPerfolioSubline}</p>
        </div>
        <ul className="flex flex-col flex-wrap mx-auto my-24 md:flex-row">
          {features.map((f, index) => {
            return (
              <li key={index} className="p-3 md:w-1/2 xl:w-1/3">
                <Feature icon={f.icon} title={i18n[f.title]} description={i18n[f.description]}></Feature>
              </li>
            )
          })}
        </ul>
      </Section>
      <Section className="flex flex-col justify-center" id="team">
        <h2 className="text-3xl font-extrabold leading-8 tracking-tight text-center text-purple-900 sm:text-4xl sm:leading-10">
          Our Team
        </h2>
        <div className="flex flex-col items-center mt-10 md:flex-row">
          <div className="text-center md:w-1/3 md:pr-8 md:py-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-t from-indigo-600 to-purple-800 md:h-32 md:w-32">
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
                {i18n.perfolioDescription1}
              </p>
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-carbon-300 md:w-2/3 md:pl-8 md:py-8 md:border-l md:border-t-0 md:mt-0">
            <div className="flex flex-col items-center justify-center sm:flex-row sm:flex-wrap">
              <Profile
                className="w-2/3 p-4 sm:w-1/2 lg:w-1/4"
                name="Nicolas Webersinke"
                title={i18n.product}
                image="/img/nico.jpeg"
              ></Profile>
              <Profile
                className="w-2/3 p-4 sm:w-1/2 lg:w-1/4"
                name="Andreas Thomas"
                title={i18n.tech}
                image="/img/andreas.jpeg"
              ></Profile>
              <Profile
                className="w-2/3 p-4 sm:w-1/2 lg:w-1/4"
                name="Mads Jordt"
                title={i18n.sales}
                image="/img/mads.jpeg"
              ></Profile>
              <Profile
                className="w-2/3 p-4 sm:w-1/2 lg:w-1/4"
                name="Kevin Kohler"
                title={i18n.marketing}
                image="/img/kevin.jpeg"
              ></Profile>
            </div>
            <p className="mt-8 text-center text-carbon-600">{i18n.perfolioDescription2}</p>
          </div>
        </div>
      </Section>
      <Section bg="bg-white" id="subscribe" className="flex flex-col justify-center">
        <div className="container flex flex-col justify-around mx-auto lg:flex-row">
          <div>
            <h2 className="text-2xl font-semibold leading-8 text-purple-900 font-display sm:text-3xl sm:leading-9">
              {i18n.cta}
            </h2>
            <p className="max-w-2xl mt-2 text-base leading-6">
              <span className="text-carbon-600">{i18n.ctaSubline}</span>
              <a target="blank" href="https://github.com/perfolio">
                github
              </a>
              .
            </p>
          </div>
          <Link
            href="/api/signin"
            label={i18n.signin}
            bgColor="bg-purple-800"
            textColor="text-purple-100"
            iconLeft={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
            }
          />
        </div>
      </Section>
    </Wrapper>
  )
}
export default Index

export function getServerSideProps(ctx) {
  const { locale } = ctx
  return {
    props: {
      i18n: translate(locale),
    },
  }
}
