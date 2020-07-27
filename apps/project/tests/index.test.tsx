import React from "react"
import renderer from "react-test-renderer"
import Index from "../pages/index"

describe(" Index", () => {
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
