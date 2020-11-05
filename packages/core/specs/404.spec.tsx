import React from "react"
import { render } from "@testing-library/react"

import NotFound404 from "../pages/404"
jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    }
  },
}))

describe("NotFound404", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<NotFound404 />)
    expect(baseElement).toBeTruthy()
  })
})
