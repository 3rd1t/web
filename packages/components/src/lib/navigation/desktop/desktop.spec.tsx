import React from "react"
import { render } from "@testing-library/react"

import Desktop from "./desktop"

describe(" Desktop", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Desktop links={[{ label: "Hello", href: "/world" }]} />)
    expect(baseElement).toBeTruthy()
  })
})
