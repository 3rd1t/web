import { render } from "@testing-library/react"
import * as stories from "./multistep-form.stories"
import { generateTestCasesFromStories } from "@perfolio/util/stories/generate"

describe("MultistepForm", () => {
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
