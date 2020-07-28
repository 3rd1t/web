import React from "react"
import renderer from "react-test-renderer"
import Navbar from "./navbar"

describe(" Navbar", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Navbar logo={<span>I am a logo</span>}
      links={[
        {
          label: "Product",
          href: "#product",
          internal: true
        },
        {
          label: "Features",
          href: "#features",
          internal: true
        }, {
          label: "Team",
          href: "#team",
          internal: true
        },
        {
          label: "Documentation",
          href: "#",
          internal: false
        },
      ]}
    />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
