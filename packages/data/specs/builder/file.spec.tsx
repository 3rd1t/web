import React from "react"
import { render } from "@testing-library/react"

import File from "../../pages/app/factor/file"

describe("File", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <File
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
      />,
    )
    expect(baseElement).toMatchSnapshot()
  })
})
