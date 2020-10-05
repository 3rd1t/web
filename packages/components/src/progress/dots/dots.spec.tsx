import React from "react"
import { render } from "@testing-library/react"

import Dots from "./dots"

describe("Dots", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Dots />)
    expect(baseElement).toBeTruthy()
  })
})
