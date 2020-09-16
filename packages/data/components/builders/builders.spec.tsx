import React from "react"
import { render } from "@testing-library/react"

import Builders from "./builders"

describe("Builders", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Builders />)
    expect(baseElement).toBeTruthy()
  })
})
