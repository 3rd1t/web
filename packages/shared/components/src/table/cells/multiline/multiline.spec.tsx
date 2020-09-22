import React from "react"
import { render } from "@testing-library/react"

import Multiline from "./multiline"

describe("Multiline", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Multiline />)
    expect(baseElement).toBeTruthy()
  })
})
