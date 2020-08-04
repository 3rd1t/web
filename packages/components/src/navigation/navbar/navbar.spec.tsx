import React from "react"
import { cleanup, fireEvent, render } from "@testing-library/react"
import renderer from "react-test-renderer"
import Navbar from "./navbar"

afterEach(cleanup)

describe(" Navbar", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
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
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
