import React from "react"
import Navbar from "./navbar"
import { render } from "@testing-library/react"

describe(" Navbar", () => {
  it("renders correctly", () => {
    const { baseElement } = render(
      <Navbar
        logo={<span>I am a logo</span>}
        links={[
          {
            label: "Product",
            href: "#product",
          },
          {
            label: "Features",
            href: "#features",
          },
          {
            label: "Team",
            href: "#team",
          },
          {
            label: "Documentation",
            href: "#",
          },
        ]}
      />,
    )
    expect(baseElement).toMatchSnapshot()
  })
})
