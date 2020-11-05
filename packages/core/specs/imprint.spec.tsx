import React from "react"
import { render } from "@testing-library/react"

import Imprint from "../pages/imprint"

jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    }
  },
}))
describe("Imprint", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Imprint />)
    expect(baseElement).toBeTruthy()
  })
})
