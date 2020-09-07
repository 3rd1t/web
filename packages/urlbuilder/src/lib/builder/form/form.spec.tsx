import React from "react"
import { render } from "@testing-library/react"

import Form, { Format } from "./form"

describe("Form", () => {
  describe("default", () => {
    it("should render successfully", () => {
      const { baseElement } = render(<Form baseURL="https://perfol.io/" setURL={() => {}} />)
      expect(baseElement).toBeTruthy()
    })
  })
  describe("with specific format", () => {
    it("should render successfully", () => {
      const { baseElement } = render(<Form format={Format.XLXS} baseURL="https://perfol.io/" setURL={() => {}} />)
      expect(baseElement).toBeTruthy()
    })
  })
})
