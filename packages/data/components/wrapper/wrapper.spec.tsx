import React from "react"
import { render } from "@testing-library/react"

import Wrapper from "./wrapper"
const useRouter = jest.spyOn(require("next/router"), "useRouter")

useRouter.mockImplementation(() => ({
  push: jest.fn(),
}))

describe("Wrapper", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Wrapper>
        <h1>Hello World</h1>
      </Wrapper>,
    )

    expect(baseElement).toBeTruthy()
  })
})
