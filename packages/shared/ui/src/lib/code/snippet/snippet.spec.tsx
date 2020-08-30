import React from "react"
import Snippet from "./snippet"
import { render } from "@testing-library/react"

describe(" Snippet", () => {
  it("renders correctly", () => {
    const { baseElement } = render(<Snippet language="js">"const x = 1;"</Snippet>)
    expect(baseElement).toBeTruthy()
  })
})
