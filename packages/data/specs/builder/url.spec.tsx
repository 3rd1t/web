import React from "react"
import { render } from "@testing-library/react"

import Url from "../../pages/builder/url"

describe("Url", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Url />)
    expect(baseElement).toBeTruthy()
  })
})
