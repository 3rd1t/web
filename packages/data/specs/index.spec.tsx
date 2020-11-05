import React from "react"
import Index, { getStaticProps } from "../pages/index"
import { render } from "@testing-library/react"
import fs from "fs"
import path from "path"
const useRouter = jest.spyOn(require("next/router"), "useRouter")

useRouter.mockImplementation(() => ({
  push: jest.fn(),
}))
describe(" Index", () => {
  describe("with code snippets", () => {
    it("renders correctly", () => {
      const { baseElement } = render(
        <Index
          codeExamples={[{ language: "r", snippet: "r <- 1" }]}
          sources={[
            {
              author: "Kenneth R. French",
              date: "06.08.2020",
              title: "Kenneth French's Data library",
              abstract: "We have permission to distribute his library blabla, maybe something like this?",
              citation:
                "Hübel, Benjamin and Scholz, Hendrik and Webersinke, Nicolas, Performance of S&P 500 ESG Indices: The Impact of Weighting Methodologies and ESG Ratings (September 30, 2019). Available at SSRN: https://ssrn.com/abstract=3528309 ",
              link: "http://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html",
            },
          ]}
        />,
      )

      expect(baseElement).toBeTruthy()
    })
  })
})

describe("getStaticProps()", () => {
  it("loads the sources correctly", async () => {
    const { props } = await getStaticProps()
    const actualCount = fs.readdirSync(path.join(process.cwd(), "packages/content/src/lib/sources")).length

    expect(props.sources.length).toBe(actualCount)
  })

  it("loads the codeExamples correctly", async () => {
    const { props } = await getStaticProps()
    const actualCount = fs.readdirSync(path.join(process.cwd(), "packages/content/src/lib/code-snippets")).length
    expect(props.codeExamples.length).toBe(actualCount)
  })
})
