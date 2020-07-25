import React from "react"
import { render } from "@testing-library/react"

import Code from "./code"

describe("Code", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Code code={[{ language: "javascript", snippet: "const x = 1;" }]} />)
    expect(baseElement).toBeTruthy()
  })
})
