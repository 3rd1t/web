import React from "react"
import { render } from "@testing-library/react"
jest.mock("next/router", () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    pathname: "/research/secondpost",
  })),
}))

import Category from "./category"

describe(" Category", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Category
        collection={{
          name: "research",
          documents: [
            {
              name: "Research",
              href: "/research/index",
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
            name: "research",
            documents: [
              {
                name: "Research",
                href: "/research/index",
              },
              {
                name: "Secondpost",
                href: "/research/secondpost",
              },
            ],
          }}
        />,
      )
      expect(baseElement).toBeTruthy()
    })
  })
})
