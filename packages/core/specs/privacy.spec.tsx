import React from "react"
import { render } from "@testing-library/react"

import Privacy from "../pages/privacy"
jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    }
  },
}))
describe("Privacy", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Privacy />)
    expect(baseElement).toBeTruthy()
  })
})
