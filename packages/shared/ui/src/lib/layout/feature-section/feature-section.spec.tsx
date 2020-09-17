import React from "react"
import { render } from "@testing-library/react"

import FeatureSection from "./feature-section"

describe("FeatureSection", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <FeatureSection
        title="TITLE"
        content="SUBTITLE"
        button={{ label: "LABEL", href: "/href" }}
        illustration={<span>Hello</span>}
      />,
    )
    expect(baseElement).toBeTruthy()
  })
})
