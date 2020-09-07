import React from "react"
import { render, cleanup, fireEvent, waitFor } from "@testing-library/react"

import { AutoSuggest, State } from "./auto-suggest"

const useMockState = (initial: any): [any, (s: any) => void] => {
  let mockState = initial
  const setMockState = jest.fn().mockImplementation((s) => {
    mockState = s
  })

  return [mockState, setMockState]
}

afterEach(() => {
  cleanup()
})

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

  describe("when the user focuses the input", () => {
    it("should change state to FOCUSED", () => {
      const placeholder = "placeholder"
      let mockState = State.IDLE
      const setMockState = (s) => {
        mockState = s
      }

      const { getByPlaceholderText } = render(
        <AutoSuggest
          state={mockState}
          updateState={setMockState}
          value={""}
          updateValue={() => {}}
          placeholder={placeholder}
          options={["Apple", "Orange"]}
        />,
      )
      fireEvent.focus(getByPlaceholderText(placeholder))
      expect(mockState).toBe(State.FOCUSED)
    })

    it("should display all options", async () => {
      const placeholder = "placeholder"
      let mockState = State.IDLE
      const setMockState = (s) => {
        mockState = s
      }
      const { getByPlaceholderText, getByText } = render(
        <AutoSuggest
          state={mockState}
          updateState={setMockState}
          value={""}
          updateValue={() => {}}
          placeholder={placeholder}
          options={["Apple", "Orange"]}
        />,
      )
      fireEvent.focus(getByPlaceholderText(placeholder))
      expect(mockState).toBe(State.FOCUSED)
    })
    describe("when the user is typing", () => {
      describe("when they have 2 or more filtered options", () => {
        //TODO:
      })
      describe("when they have a single filtered options", () => {
        //TODO:
      })
      describe("when they have no more filtered options", () => {
        //TODO:
      })
    })
  })

  describe("when the user adds input and hits enter", () => {
    it("should change state to VERIFY", async () => {
      //TODO:
    })
  })

  describe("when the user adds input and the input loses focus", () => {
    it("should change state to VERIFY", async () => {
      const placeholder = "placeholder"

      let mockValue = ""
      const setMockValue = (s) => {
        mockValue = s
      }

      let mockState = State.IDLE
      const setMockState = jest.fn().mockImplementation((s) => {
        mockState = s
      })

      const { getByPlaceholderText } = render(
        <AutoSuggest
          state={mockState}
          updateState={setMockState}
          value={mockValue}
          updateValue={setMockValue}
          placeholder={placeholder}
          options={["Apple", "Orange"]}
        />,
      )

      const element = getByPlaceholderText(placeholder)

      fireEvent.change(element, { target: { value: "Apple" } })
      fireEvent.blur(element)
      expect(mockValue).toBe("Apple")
      expect(mockState).toBe(State.VERIFY)
    })
  })
  describe("when the state is VERIFY", () => {
    describe("and user input is valid", () => {
      it("should change state to DONE", async () => {
        const placeholder = "placeholder"

        let mockValue = "Apple"
        const setMockValue = (s) => {
          mockValue = s
        }

        let mockState = State.VERIFY
        const setMockState = jest.fn().mockImplementation((s) => {
          mockState = s
        })

        render(
          <AutoSuggest
            state={mockState}
            updateState={setMockState}
            value={mockValue}
            updateValue={setMockValue}
            placeholder={placeholder}
            options={["Apple", "Orange"]}
          />,
        )

        expect(mockValue).toBe("Apple")
        expect(mockState).toBe(State.DONE)
      })
    })
    describe("and user input is invalid", () => {
      it("should change state to IDLE", async () => {
        const placeholder = "placeholder"

        let mockValue = "INVALID"
        const setMockValue = (s) => {
          mockValue = s
        }

        let mockState = State.VERIFY
        const setMockState = jest.fn().mockImplementation((s) => {
          mockState = s
        })

        render(
          <AutoSuggest
            state={mockState}
            updateState={setMockState}
            value={mockValue}
            updateValue={setMockValue}
            placeholder={placeholder}
            options={["Apple", "Orange"]}
          />,
        )

        expect(mockValue).toBe("INVALID")
        expect(mockState).toBe(State.IDLE)
      })
    })
  })
})
