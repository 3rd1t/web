import React from "react"
import Footer from "./footer"
import { render } from "@testing-library/react"

describe(" Footer", () => {
  it("renders correctly", () => {
    const { baseElement } = render(<Footer bg="bg-carbon-900" primaryText="text-white" secondaryText="text-gray-200" />)

    expect(baseElement).toMatchSnapshot()
  })
})
