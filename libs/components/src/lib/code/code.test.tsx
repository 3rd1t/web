import React from "react"
import renderer from "react-test-renderer"
import Code from "./code"
import { cleanup, fireEvent, render, waitForElement } from "@testing-library/react"

describe("Code", () => {
  const component = <Code code={[{ language: "javascript", snippet: "const x = 1;" }]} />

  it("renders correctly", () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe("with multiple languages", () => {
    describe("when the user clicks on a language button", () => {
      it("switches to the respective snippet", () => {
        const { queryByText, getAllByTestId, queryByTestId } = render(
          <Code
            code={[
              { language: "javascript", snippet: "const x = 1; ARBITRARY_TOKEN_IN_JAVASCRIPT" },
              { language: "python", snippet: "y = 2 ARBITRARY_TOKEN_IN_PYTHON" },
            ]}
          />,
        )

        const selectButtons = getAllByTestId("selectLanguage")

        expect(selectButtons.length).toBe(2)
        expect(selectButtons[0].innerHTML).toEqual("javascript")
        expect(selectButtons[1].innerHTML).toEqual("python")

        expect(queryByTestId("syntaxHighlighter").innerHTML.includes("ARBITRARY_TOKEN_IN_JAVASCRIPT")).toBe(true)
        expect(queryByTestId("syntaxHighlighter").innerHTML.includes("ARBITRARY_TOKEN_IN_PYTHON")).toBe(false)

        fireEvent.click(selectButtons[1])
        expect(queryByTestId("syntaxHighlighter").innerHTML.includes("ARBITRARY_TOKEN_IN_JAVASCRIPT")).toBe(false)
        expect(queryByTestId("syntaxHighlighter").innerHTML.includes("ARBITRARY_TOKEN_IN_PYTHON")).toBe(true)

        fireEvent.click(selectButtons[0])
        expect(queryByTestId("syntaxHighlighter").innerHTML.includes("ARBITRARY_TOKEN_IN_JAVASCRIPT")).toBe(true)
        expect(queryByTestId("syntaxHighlighter").innerHTML.includes("ARBITRARY_TOKEN_IN_PYTHON")).toBe(false)
      })
    })
  })
})
