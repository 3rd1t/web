import React from "react"
import { render } from "@testing-library/react"

import Dropdown from "./dropdown"

describe("Dropdown", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Dropdown label="Label" items={[<span>Apple</span>, <span>Orange</span>]} />)
    expect(baseElement).toBeTruthy()
  })
})
