import React from "react"
import renderer from "react-test-renderer"
import Section from "./section"

describe("Section", () => {
  describe("without domain", () => {
    it("renders correctly", () => {
      const tree = renderer.create(<Section bg="bg-white" id="hello"><span>Hello World</span></Section>).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
