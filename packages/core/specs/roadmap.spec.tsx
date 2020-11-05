import React from "react"
import { render } from "@testing-library/react"

import Roadmap from "../pages/roadmap"
jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    }
  },
}))

describe("Roadmap", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Roadmap />)
    expect(baseElement).toBeTruthy()
  })
})
