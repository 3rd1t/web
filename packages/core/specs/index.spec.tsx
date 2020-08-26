import React from "react"
import Index from "../pages/index"
import { render } from "@testing-library/react"

describe(" Index", () => {
  it("renders correctly", () => {
    expect(render(<Index />)).toMatchSnapshot()
  })
})
