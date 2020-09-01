import React from "react"
import { render } from "@testing-library/react"

import Urlbuilder from "./urlbuilder"

describe("Urlbuilder", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Urlbuilder />)
    expect(baseElement).toBeTruthy()
  })
})
