import React from "react"
import { render } from "@testing-library/react"

import Feature from "./feature"

describe("Feature", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Feature title="TITLE" sellingPoints={["1", "2", "3"]} href="/href" />)
    expect(baseElement).toBeTruthy()
  })
})
