import React from "react"
import { render } from "@testing-library/react"

import Feature from "./feature"

describe("Feature", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Feature
        icon={
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
        }
        title="Fair pricing"
        description="Start for free and if you want more, get the plan that suits you best. No hidden fees."
      />,
    )
    expect(baseElement).toBeTruthy()
  })
})
