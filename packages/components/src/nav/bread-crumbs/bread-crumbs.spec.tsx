import React from "react"
import { render } from "@testing-library/react"
import BreadCrumbs from "./bread-crumbs"

describe("BreadCrumbs", () => {
  const testCases = [
    {
      name: "with 1 item",
      path: ["hello"],
    },
    {
      name: "with 2 items",
      path: ["hello", "world"],
    },
    {
      name: "with 3 items",
      path: ["hello", "beautiful", "world"],
    },
  ]

  testCases.forEach((tc) => {
    describe(tc.name, () => {
      it("should render successfully", () => {
        const { baseElement } = render(<BreadCrumbs path={tc.path} />)
        expect(baseElement).toBeTruthy()
      })
    })
  })

  it("should capitalize the first letter", () => {
    const { queryByText } = render(<BreadCrumbs path={["lower", "Upper"]} />)
    expect(queryByText("Upper")).toBeTruthy()
    expect(queryByText("Lower")).toBeTruthy()
    expect(queryByText("lower")).toBeFalsy()
  })
})
