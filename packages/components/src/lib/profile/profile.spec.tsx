import React from "react"
import { render } from "@testing-library/react"

import Profile from "./profile"

describe("Profile", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Profile className="w-1/4" name="Nicolas Webersinke" title="Product lead" image="/img/nico.jpeg"></Profile>,
    )
    expect(baseElement).toMatchSnapshot()
  })
})
