import React from "react"
import { render } from "@testing-library/react"

import Wrapper from "./wrapper"

describe("Wrapper", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Wrapper>
        <h1>Hello World</h1>
      </Wrapper>,
    )
    expect(baseElement).toMatchSnapshot()
  })
})
