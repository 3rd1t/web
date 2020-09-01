import React from "react"
import { render } from "@testing-library/react"

import AutoSuggest from "./auto-suggest"

describe("AutoSuggest", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AutoSuggest placeholder="placeholder" suggestions={["Apple", "Orange"]} />)
    expect(baseElement).toBeTruthy()
  })
})
