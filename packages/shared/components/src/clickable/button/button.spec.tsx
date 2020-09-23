import React from "react"
import { render } from "@testing-library/react"
import Button from "./button"
import * as stories from "./button.stories"

describe("Button", () => {
  describe("Stories", () => {
    Object.entries(stories).forEach((s) => {
      if (s[0] !== "default") {
        it(s[0] + "should match snapshot", () => {
          const { baseElement } = render(s[1]())
          expect(baseElement).toMatchSnapshot()
        })
      }
    })
  })
})
