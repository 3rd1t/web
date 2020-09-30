import React from "react"
import { render } from "@testing-library/react"

import MultiColumn from "./multi-column"

describe("MultiColumn", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MultiColumn />)
    expect(baseElement).toBeTruthy()
  })
})
