import React from "react"
import { render } from "@testing-library/react"

import Privacy from "../pages/privacy"

describe("Privacy", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Privacy />)
    expect(baseElement).toBeTruthy()
  })
})
