import React from "react"
import renderer from "react-test-renderer"
import Index from "../pages/index"

describe(" Index", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Index codeExamples={[{ language: "r", snippet: "r <- 1" }]} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
