import React from "react"
import { render } from "@testing-library/react"

import Mobile from "./mobile"

describe(" Mobile", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Mobile links={[{ label: "Hello", href: "/world" }]} />)
    expect(baseElement).toBeTruthy()
  })
})
