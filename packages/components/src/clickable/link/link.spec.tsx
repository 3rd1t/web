import React from "react"
import { render } from "@testing-library/react"
import * as stories from "./link.stories"
import { generateTestCasesFromStories } from "@perfolio/util/stories/generate"

import Link from "./link"

describe("Link", () => {
  describe("Stories", () => {
    const testCases = generateTestCasesFromStories(stories)

    testCases.forEach((s) => {
      it(s.name + "should match snapshot", () => {
        const { baseElement } = render(s.component())
        expect(baseElement).toMatchSnapshot()
      })
    })
  })
})
