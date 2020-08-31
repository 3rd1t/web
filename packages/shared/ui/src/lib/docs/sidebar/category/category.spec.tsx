import React from "react"
import { render } from "@testing-library/react"

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
