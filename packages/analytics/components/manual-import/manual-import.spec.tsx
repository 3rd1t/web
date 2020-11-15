import React from "react"
import { render } from "@testing-library/react"

import ManualImport from "./manual-import"

describe("ManualImport", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ManualImport />)
    expect(baseElement).toBeTruthy()
  })
})
