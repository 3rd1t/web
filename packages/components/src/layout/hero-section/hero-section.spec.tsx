import React from "react"
import HeroSection from "./hero-section"
import { render } from "@testing-library/react"

describe(" HeroSection", () => {
  it("renders correctly", () => {
    const { baseElement } = render(
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
    expect(baseElement).toBeTruthy()
  })
})
