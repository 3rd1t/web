import React from "react"
import { render } from "@testing-library/react"

import Url from "../../pages/app/factor/url"

describe("Url", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Url />)
    expect(baseElement).toBeTruthy()
  })
})
