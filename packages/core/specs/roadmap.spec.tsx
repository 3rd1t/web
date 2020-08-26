import React from "react"
import { render } from "@testing-library/react"

import Roadmap from "../pages/roadmap"

describe("Roadmap", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Roadmap />)
    expect(baseElement).toMatchSnapshot()
  })
})
