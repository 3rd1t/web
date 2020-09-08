import React from "react"
import { render } from "@testing-library/react"

import CTA from "./cta"

describe("CTA", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <CTA headline="headline" subline="subline" button={{ label: "label", href: "/href" }} />,
    )
    expect(baseElement).toBeTruthy()
  })
})
