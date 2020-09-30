import { stringify } from "querystring"
import { capitalize } from "./capitalize"

describe("capitalize()", () => {
  const testCases: {
    name: string
    in: string
    want: string
  }[] = [
    { name: "with all lower case", in: "hello", want: "Hello" },
    { name: "with 2 words in lower case", in: "hello world", want: "Hello world" },
    { name: "with empty string", in: "", want: "" },
    { name: "with already capitalized word", in: "Hello", want: "Hello" },
    { name: "with mixed case", in: "hElLo", want: "HElLo" },
  ]

  testCases.forEach((tc) => {
    it(tc.name, () => {
      expect(capitalize(tc.in)).toBe(tc.want)
    })
  })
})
