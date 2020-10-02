import { generateTestCasesFromStories } from "./generate"

describe("generateTestCasesFromStories()", () => {
  const story1 = () => new HTMLElement()
  const story2 = () => new HTMLElement()
  const story3 = () => new HTMLElement()

  const testCases: {
    name: string
    in: Record<string, () => HTMLElement>
    want: { name: string; component: () => HTMLElement }[]
  }[] = [
    {
      name: "does not return the default export",
      in: {
        default: () => new HTMLElement(),
        story1: story1,
      },
      want: [
        {
          name: "story1",
          component: story1,
        },
      ],
    },
    {
      name: "returns all stories",
      in: {
        default: () => new HTMLElement(),
        story1,
        story2,
        story3,
      },
      want: [
        {
          name: "story1",
          component: story1,
        },
        {
          name: "story2",
          component: story2,
        },
        {
          name: "story3",
          component: story3,
        },
      ],
    },
  ]

  testCases.forEach((tc) => {
    it(tc.name, () => {
      expect(generateTestCasesFromStories(tc.in)).toEqual(tc.want)
    })
  })
})
