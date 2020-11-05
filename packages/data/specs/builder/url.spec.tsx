import React from "react"
import { render } from "@testing-library/react"

import URL from "../../pages/app/factor/url"

describe("URL", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <URL
        factorModels={[{ value: "test", display: "Description", factors: [{ value: "A", display: "Description" }] }]}
        regions={[
          { value: "A", display: "AA" },
          { value: "B", display: "BB" },
        ]}
        currencies={[
          { value: "A", display: "AA" },
          { value: "B", display: "BB" },
        ]}
        intervals={[
          { value: "A", display: "AA" },
          { value: "B", display: "BB" },
        ]}
        user={{ nickname: "Vin Venture" }}
      />,
    )
    expect(baseElement).toMatchSnapshot()
  })
})
