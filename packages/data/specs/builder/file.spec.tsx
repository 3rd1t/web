import React from "react"
import { render } from "@testing-library/react"

import File from "../../pages/builder/file"

describe("File", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <File
        factorModels={[
          { name: "test", description: "Description", factors: [{ name: "A", description: "Description" }] },
        ]}
        regions={["A", "B"]}
        currencies={["A", "B"]}
        intervals={["daily", "monthly", "annual"]}
      />,
    )
    expect(baseElement).toBeTruthy()
  })
})
