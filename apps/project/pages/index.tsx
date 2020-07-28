import React from "react"
import { HeroSection } from "@perfolio/components"

/* eslint-disable-next-line */
interface IndexProps {}

const Index = (props: IndexProps) => {
  const check = (
    <svg className="h-10" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  )

  const feature = (icon: React.ReactNode, name: string, content: string) => (
    <li className="w-1/3 p-8">
      <div className="flex flex-col items-center ">
        <span className="m-4">{icon}</span>
        <div>
          <h2 className="text-xl font-semibold leading-6 text-gray-100">{name}</h2>
          <p className="text-gray-400">{content}</p>
        </div>
      </div>
    </li>
  )

  return (
    <>
      <section className="min-h-screen">
        <div className="flex flex-col items-start px-4 mt-4 space-y-8 sm:mt-16 sm:px-6 md:mt-20 lg:mt-32 lg:px-8 xl:mt-40 xl:flex-row xl:space-y-0 xl:space-x-8">
          <HeroSection
            color="gray"
            headline={<h1>Portfolio analytics insights for everyone</h1>}
            paragraph={
              <p className="flex flex-col xl:flex-row">
                <p className="text-gray-800 xl:mr-2">Our mission:</p>
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
      <section className="min-h-screen text-gray-200">
        <div className="container py-10 mx-auto">
          <ul className="flex flex-wrap justify-center">
            {feature(check, "Independent", "Lorem Ipsum")}
            {feature(check, "Fair pricing - start for free!", "Lorem Ipsum")}
            {feature(check, "High data quality", "Lorem Ipsum")}
            {feature(check, "Sophisticated analytics method - simply illustrated", "Lorem Ipsum")}
          </ul>
        </div>
      </section>
    </>
  )
}
export default Index
