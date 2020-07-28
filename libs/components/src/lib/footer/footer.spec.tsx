import React from "react"
import renderer from "react-test-renderer"
import Footer from "./footer"

describe(" Footer", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Footer color={"gray"} primaryText={"text-white"} secondaryText={"text-gray-200"} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
