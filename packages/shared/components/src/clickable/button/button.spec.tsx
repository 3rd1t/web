import React from "react"
import { render } from "@testing-library/react"

import Button from "./button"

describe("Button", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Button label="Label" textColor="text-gray-900" bgColor="bg-gray-200" onClick={() => {}} />)
    expect(baseElement).toMatchSnapshot()
  })
})
