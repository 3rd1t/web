import React from "react"
import { render } from "@testing-library/react"

import Simple from "./simple"

describe("Simple", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Simple />)
    expect(baseElement).toBeTruthy()
  })
})
