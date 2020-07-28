import React from "react"
import renderer from "react-test-renderer"
import Index, { getStaticProps } from "../pages/index"

describe("Index", () => {
  it("renders correctly", () => {
    const codeExamples = [
      {
        language: "python",
        snippet: "hello snippet",
      },
      {
        language: "r",
        snippet: "hello snippet",
      },
    ]

    const tree = renderer.create(<Index codeExamples={codeExamples} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe("getStaticProps()", () => {
  it("loads the files and returns them as props", async () => {
    const res = await getStaticProps()

    expect(res.props).toBeTruthy()
    expect(res.props.codeExamples.length > 0).toBe(true)
    res.props.codeExamples.forEach((c) => {
      expect(c.language.length > 0).toBe(true)
      expect(c.snippet.length > 0).toBe(true)
    })
  })
})
