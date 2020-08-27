import React from "react"

import Logo from "./logo"
import { render } from "@testing-library/react"
describe("Logo", () => {
  describe("with domain", () => {
    it("renders correctly", () => {
      const { baseElement } = render(<Logo color="text-blue-500" domain="domain" />)
      expect(baseElement).toBeTruthy()
    })
  })
  describe("without domain", () => {
    it("renders correctly", () => {
      const { baseElement } = render(<Logo />)
      expect(baseElement).toBeTruthy()
    })
  })
})
