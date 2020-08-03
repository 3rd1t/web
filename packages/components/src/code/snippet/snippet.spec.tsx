import React from "react"
import Snippet from "./snippet"
import renderer from "react-test-renderer"

describe(" Snippet", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Snippet language="js">"const x = 1;"</Snippet>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
