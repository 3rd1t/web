import React from "react"
import { Section } from "@perfolio/shared/ui"
import { Wrapper } from "../components/wrapper/wrapper"
/* eslint-disable-next-line */
export interface RoadmapProps {}

export const Roadmap = (props: RoadmapProps) => {
  return (
    <Wrapper>
      <Section bg="bg-gray-100 " className="" id="">
        <h2 className="text-3xl font-extrabold leading-8 tracking-tight text-center text-carbon-900 sm:text-4xl sm:leading-10">
          Our Roadmap
        </h2>
        <div className="flex flex-col items-center mt-16 space-y-8 lg:flex-row lg:space-y-0">
          <div className="shadow">
            <img src="/img/roadmap.png" alt="Roadmap for perfolio development"></img>
          </div>
          <div className="w-full p-6 bg-white border border-gray-400 rounded shadow-lg lg:w-1/3 ">
            <div className="flex flex-col space-y-2">
              <h2 className="text-lg font-medium text-gray-900 title-font">Feedback</h2>
              <p className="leading-relaxed text-gray-700">
                Please tell us if you are looking for specific features so we can implement them right away.
              </p>
              <form
                name="feature-request"
                method="POST"
                data-netlify="true"
                action="/roadmap"
                className="flex flex-col space-y-4"
              >
                <input
                  id="name"
                  required
                  className="px-4 py-2 text-base border border-gray-400 rounded focus:outline-none focus:border-carbon-700"
                  placeholder="Name"
                  name="name"
                  type="text"
                ></input>
                <label className="sr-only" htmlFor="name">
                  Your name
                </label>
                <input
                  id="email"
                  required
                  className="px-4 py-2 text-base border border-gray-400 rounded focus:outline-none focus:border-carbon-700"
                  placeholder="Email"
                  name="email"
                  type="email"
                ></input>
                <label className="sr-only" htmlFor="email">
                  Your email
                </label>

                <textarea
                  id="message"
                  required
                  className="h-32 px-4 py-2 text-base border border-gray-400 rounded resize-none focus:outline-none focus:border-carbon-700"
                  placeholder="Message"
                  name="message"
                ></textarea>
                <label className="sr-only" htmlFor="message">
                  Your message
                </label>

                <button className="px-6 py-2 text-lg text-white border-0 rounded-sm bg-carbon-900 focus:outline-none hover:bg-carbon-700">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </Wrapper>
  )
}

export default Roadmap
