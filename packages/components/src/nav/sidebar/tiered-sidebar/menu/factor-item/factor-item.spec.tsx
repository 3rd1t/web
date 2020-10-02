import React from "react"
import { render } from "@testing-library/react"

import FactorItem from "./factor-item"
jest.mock("next/router", () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    pathname: "/factor/three",
  })),
}))
describe("FactorItem", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FactorItem factor="Three" author="French" year="9001" href="/" />)
    expect(baseElement).toBeTruthy()
  })
})
