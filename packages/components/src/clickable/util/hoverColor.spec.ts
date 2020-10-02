import { getHoverColor } from "./hoverColor"

describe("getHoverColor()", () => {
  const testCases: {
    name: string
    color: string
    want: string
  }[] = [
    {
      name: "Returns empty string when background is empty",
      color: "",
      want: "",
    },
    {
      name: "Returns empty string when background is transparent",
      color: "bg-transparent",
      want: "",
    },
    {
      name: "Returns empty string when background is transparent",
      color: "text-transparent",
      want: "",
    },
    {
      name: "Returns a lighter background",
      color: "bg-gray-900",
      want: "hover:bg-gray-800",
    },
    {
      name: "Returns a darker background",
      color: "bg-gray-100",
      want: "hover:bg-gray-200",
    },
    {
      name: "Returns a darker background when at 500",
      color: "bg-gray-500",
      want: "hover:bg-gray-600",
    },
    {
      name: "Returns a lighter text",
      color: "text-indigo-900",
      want: "hover:text-indigo-800",
    },
    {
      name: "Returns a darker text",
      color: "text-indigo-100",
      want: "hover:text-indigo-200",
    },
    {
      name: "Returns a darker text when at 500",
      color: "text-indigo-500",
      want: "hover:text-indigo-600",
    },
  ]

  testCases.forEach((tc) => {
    it(tc.name, () => {
      const got = getHoverColor(tc.color)
      expect(got).toBe(tc.want)
    })
  })

  describe("when a bad className is passed in", () => {
    const testCases = ["bg-gray", "bg-gray-100-another"]

    testCases.forEach((tc) => {
      it("throws", () => {
        expect(() => getHoverColor(tc)).toThrow()
      })
    })
  })
})
