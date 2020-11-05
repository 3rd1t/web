import React from "react"
import Index from "../pages/index"
import { render } from "@testing-library/react"
jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    }
  },
}))
describe(" Index", () => {
  it("renders correctly", () => {
    expect(render(<Index i18n={{ headline: "Headline", subline: "Subline" }} />)).toBeTruthy()
  })
})
