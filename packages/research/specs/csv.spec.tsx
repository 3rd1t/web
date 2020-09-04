import React from "react"
import { render } from "@testing-library/react"

import Csv from "../pages/csv"

describe("Csv", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Csv />)
    expect(baseElement).toBeTruthy()
  })
})
