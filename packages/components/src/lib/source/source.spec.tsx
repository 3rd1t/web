import React from "react"
// Required for jest, see https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
import "../../../../__mocks__/matchMedia"
import Source from "./source"
import { render } from "@testing-library/react"
describe("Source", () => {
  it("renders correctly", () => {
    const { baseElement } = render(
      <Source
        author="Kenneth R. French"
        date="06.08.2020"
        title="Kenneth French's Data library"
        abstract="We have permission to distribute his library blabla, maybe something like this?"
        citation="Hübel, Benjamin and Scholz, Hendrik and Webersinke, Nicolas, Performance of S&P 500 ESG Indices: The Impact of Weighting Methodologies and ESG Ratings (September 30, 2019). Available at SSRN: https://ssrn.com/abstract=3528309 "
        link="http://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html"
      />,
    )
    expect(baseElement).toMatchSnapshot()
  })
})
