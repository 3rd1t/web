import React from "react"
import { render } from "@testing-library/react"

import SelectLight from "./select-light"

describe("SelectLight", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SelectLight choices={["a", "b", "c"]} label="Label" setValue={() => {}} />)
    expect(baseElement).toBeTruthy()
  })
})
