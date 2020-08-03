import React from "react"
import renderer from "react-test-renderer"
import HeroSection from "./hero-section"

describe(" HeroSection", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <HeroSection
          headline="Headline"
          paragraph="Factor investing is a strategy that chooses securities on attributes that are associated with higher returns. There are two main types of factors that have driven returns of stocks, bonds, and other factors: macroeconomic factors and style factors. The former captures broad risks across asset classes while the latter aims to explain returns and risks within asset classes."
          primaryButton={{
            label: "Get started",
            href: "#",
            className: "bg-gray-900",
          }}
          secondaryButton={{
            label: "Learn more",
            href: "#",
            className: "bg-gray-100",
          }}
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})