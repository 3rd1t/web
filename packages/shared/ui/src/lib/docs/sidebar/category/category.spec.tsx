import React from "react"
import { render } from "@testing-library/react"
jest.mock("next/router", () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    pathname: "/data/secondpost",
  })),
}))

import Category from "./category"

describe(" Category", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Category
        collection={{
          name: "data",
          documents: [
            {
              name: "data",
              href: "/data/index",
            },
          ],
        }}
      />,
    )
    expect(baseElement).toBeTruthy()
  })
  describe("when url matches", () => {
    it("should render successfully", () => {
      const { baseElement } = render(
        <Category
          collection={{
            name: "data",
            documents: [
              {
                name: "data",
                href: "/data/index",
              },
              {
                name: "Secondpost",
                href: "/data/secondpost",
              },
            ],
          }}
        />,
      )
      expect(baseElement).toBeTruthy()
    })
  })
})
