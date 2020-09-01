import React from "react"
import { render } from "@testing-library/react"

import { AutoSuggest, State } from "./auto-suggest"
describe("AutoSuggest", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <AutoSuggest
        state={State.IDLE}
        updateState={() => {}}
        value={""}
        updateValue={() => {}}
        placeholder="placeholder"
        options={["Apple", "Orange"]}
      />,
    )
    expect(baseElement).toBeTruthy()
  })
})
