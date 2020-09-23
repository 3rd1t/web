import React from "react"
import { render } from "@testing-library/react"

import Chart from "../../pages/builder/chart"

describe("Chart", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Chart />)
    expect(baseElement).toBeTruthy()
  })
})
