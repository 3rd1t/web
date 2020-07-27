import React from "react"
import { cleanup, fireEvent, render, waitForElement } from "@testing-library/react"
import renderer from "react-test-renderer"
import Navbar from "./navbar"

afterEach(cleanup)

describe(" Navbar", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Navbar logo={<span>I am a logo</span>} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe("on mobile", () => {
    describe("when the user clicks on the hamburger icon", () => {
      it("opens the navbar menu", async () => {
        const { queryByTestId } = render(<Navbar logo={<span>Logo</span>} />)

        expect(queryByTestId("mobileNavbar")).toBeNull()

        fireEvent.click(queryByTestId("toggle"))
        expect(queryByTestId("mobileNavbar")).toBeTruthy()
      })
    })
  })
})
