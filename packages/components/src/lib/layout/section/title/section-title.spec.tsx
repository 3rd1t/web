import React from "react"
import { render } from "@testing-library/react"

import SectionTitle from "./section-title"

describe(" SectionTitle", () => {
  describe("with subtitle", () => {
    it("should render successfully", () => {
      const { baseElement } = render(<SectionTitle title="TITLE" subtitle="SUBTITLE" />)
      expect(baseElement).toBeTruthy()
    })
  })
  describe("without subtitle", () => {
    it("should render successfully", () => {
      const { baseElement } = render(<SectionTitle title="TITLE" />)
      expect(baseElement).toBeTruthy()
    })
  })
})
