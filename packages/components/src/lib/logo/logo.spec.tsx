import React from "react"
import renderer from "react-test-renderer"

import Logo from "./logo"

describe(" Logo", () => {
  describe("with domain", () => {
    it("renders correctly", () => {
      const tree = renderer.create(<Logo color="text-blue-500" domain="domain" />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
  describe("without domain", () => {
    it("renders correctly", () => {
      const tree = renderer.create(<Logo />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
