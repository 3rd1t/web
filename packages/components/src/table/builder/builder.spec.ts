import { validateFields, isEqual, SimpleTable } from "./builder"

import { render } from "@testing-library/react"

describe("validateFields", () => {
  const testCases: {
    name: string
    rows: Row[]
    want: boolean
  }[] = [
    {
      name: "invalidates empty list",
      rows: [],
      want: false,
    },
    {
      name: "invalidates a single empty row",
      rows: [{}],
      want: false,
    },
    {
      name: "invalidates multiple empty rows",
      rows: [{}, {}],
      want: false,
    },
    {
      name: "invalidates if at least one row is empty",
      rows: [{ name: "Hello" }, {}],
      want: false,
    },
    {
      name: "validates with empty string",
      rows: [{ name: "Hello" }, { name: "" }],
      want: true,
    },
    {
      name: "validates a single row and column with string",
      rows: [{ name: "Hello" }],
      want: true,
    },
    {
      name: "validates a single row and column with number",
      rows: [{ age: 1 }],
      want: true,
    },
    {
      name: "validates a single column with strings",
      rows: [{ name: "Hello" }, { name: "World" }],
      want: true,
    },
    {
      name: "validates a single row with multiple strings",
      rows: [{ name: "Hello", surname: "World" }],
      want: true,
    },
    {
      name: "validates a single row with multiple strings and numbers",
      rows: [{ name: "Hello", surname: "World", age: 1 }],
      want: true,
    },
    {
      name: "validates a multiple rows with multiple strings and numbers",
      rows: [
        { name: "Hello", surname: "World", age: 1 },
        { name: "Bert", surname: "John", age: 5 },
      ],
      want: true,
    },
  ]

  testCases.forEach((tc) => {
    it(tc.name, () => {
      expect(validateFields(tc.rows)).toBe(tc.want)
    })
  })
})

describe("isEqual", () => {
  const testCases: {
    name: string
    a: string[]
    b: string[]
    want: boolean
  }[] = [
    {
      name: "invalidates inequal length",
      a: [],
      b: ["hello"],
      want: false,
    },
    {
      name: "invalidates different lists",
      a: ["world"],
      b: ["hello"],
      want: false,
    },
    {
      name: "validates a single string",
      a: ["hello"],
      b: ["hello"],
      want: true,
    },
    {
      name: "validates multiple strings",
      a: ["hello", "world"],
      b: ["hello", "world"],
      want: true,
    },
    {
      name: "validates multiple unsorted strings",
      a: ["world", "hello"],
      b: ["hello", "world"],
      want: true,
    },
  ]
  testCases.forEach((tc) => {
    it(tc.name, () => {
      expect(isEqual(tc.a, tc.b)).toBe(tc.want)
    })
  })
})

describe("SimpleTable", () => {
  const rows = [
    {
      name: "Hello",
      age: 1,
    },
    {
      name: "World",
      age: 2,
    },
    {
      name: "Bruce",
      age: 3,
    },
    {
      name: "Wayne",
      age: 4,
    },
  ]
  it("should match snapshot", () => {
    const { baseElement } = render(SimpleTable(rows))
    expect(baseElement).toMatchSnapshot()
  })
})
