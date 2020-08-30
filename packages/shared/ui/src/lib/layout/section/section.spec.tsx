import React from "react"
import { render } from "@testing-library/react"
import Section from "./section"

describe("Section", () => {
  describe("without domain", () => {
    it("renders correctly", () => {
      const { baseElement } = render(
        <Section bg="bg-white" id="hello">
          <span>Hello World</span>
        </Section>,
      )
      expect(baseElement).toBeTruthy()
    })
  })
})
