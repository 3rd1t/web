import React from "react"
import renderer from "react-test-renderer"
import Footer from "./footer"

describe(" Footer", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Footer bg="bg-carbon-900" primaryText="text-white" secondaryText="text-gray-200" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
