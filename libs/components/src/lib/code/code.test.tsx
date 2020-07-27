import React from "react"
import renderer from "react-test-renderer"
import Code from "./code"

describe("Code", () => {
  const component = <Code code={[{ language: "javascript", snippet: "const x = 1;" }]} />

  it("renders correctly", () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
