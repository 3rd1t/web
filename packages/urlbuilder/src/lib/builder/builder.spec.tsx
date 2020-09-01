import React from "react"
import { render } from "@testing-library/react"

import Builder from "./builder"

describe("Builder", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Builder />)
    expect(baseElement).toBeTruthy()
  })
})
