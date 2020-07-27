import React from "react"
import CodeSnippet from "./code-snippet"
import renderer from "react-test-renderer"

describe(" CodeSnippet", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<CodeSnippet language="js">"const x = 1;"</CodeSnippet>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
