import React from "react"
import { render } from "@testing-library/react"

import Menu from "./menu"

describe(" Menu", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Menu
        collections={[
          {
            name: "Getting started",
            documents: [
              {
                name: "Introduction",
                href: "/introduction",
              },
            ],
          },
          {
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
          },
          {
            name: "Something",
            documents: [
              {
                name: "v2",
                href: "/something/v2",
              },
              {
                name: "Integration",
                href: "/something/integration",
              },
            ],
          },
        ]}
      />,
    )
    expect(baseElement).toBeTruthy()
  })
})
