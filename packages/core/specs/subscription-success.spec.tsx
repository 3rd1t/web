import React from "react"
import { render } from "@testing-library/react"

import SubscriptionSuccess from "../pages/subscribe/success"

describe("SubscriptionSuccess", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SubscriptionSuccess />)
    expect(baseElement).toMatchSnapshot()
  })
})
