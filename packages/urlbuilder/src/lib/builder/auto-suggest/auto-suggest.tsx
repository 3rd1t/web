import React, { useState, useEffect, useRef, ChangeEvent } from "react"
import { motion } from "framer-motion"

export enum State {
  IDLE,
  FOCUSED,
  VERIFY,
  DONE,
}

export interface AutoSuggestProps {
  options: string[]
  placeholder: string
  value: string
  updateValue: React.Dispatch<React.SetStateAction<string>>
  state: State
  updateState: React.Dispatch<React.SetStateAction<State>>
}
export const AutoSuggest = ({ updateState, state, updateValue, value, options, placeholder }: AutoSuggestProps) => {
  const ref = useRef(null)
  const [filteredOptions, setFilteredOptions] = useState(options)
  const [activeOption, setFocusOption] = useState(-1)

  /**
   * Runs whenever the state reaches `VERIFY`. Usually after the input loses focus.
   *
   * All state changes from `FOCUSED` must go through this hook and it will change
   * the state to either `IDLE` or `DONE` depending on the current value.
   */
  useEffect(() => {
    if (state === State.VERIFY) {
      const isValid = options.map((option) => option.toLowerCase()).includes(value.toLowerCase())
      updateState(isValid ? State.DONE : State.IDLE)
    }
  }, [state])

  const getWidth = (): string => {
    const padding = 4
    const width = value.length > 0 ? value.length : 5
    return ((state === State.DONE ? width : width + padding) + 2).toString() + "ch"
  }
  /**
   *
   * @param e
   */
  const onKeyDown = (e: React.KeyboardEvent) => {
    // Enter key to select the active option
    if (filteredOptions.length < 1) {
      return
    }

    // Enter key
    if (e.keyCode === 13 && activeOption >= 0 && activeOption < filteredOptions.length) {
      updateValue(filteredOptions[activeOption])
      updateState(State.VERIFY)
    }
    //Up arrow
    else if (e.keyCode === 38) {
      const next = activeOption - 1
      setFocusOption(next >= 0 ? next : filteredOptions.length - 1)
    }
    // Down arrow
    else if (e.keyCode === 40) {
      const next = activeOption + 1
      setFocusOption(next < filteredOptions.length ? next : 0)
    }
  }

  const onSubmit = () => {
    updateValue(options[activeOption])
  }

  // Update suggestions on value change
  useEffect(() => {
    const filtered = options.filter((option) => option.toLowerCase().includes(value.toLowerCase()))
    setFilteredOptions(filtered.length < 1 ? options : filtered)
  }, [value])

  return (
    <div ref={ref}>
      <div className="relative flex justify-center">
        <label htmlFor={placeholder} className="sr-only">
          {placeholder}
        </label>
        <motion.input
          autoComplete="off"
          layout
          initial={{ width: getWidth() }}
          animate={{ width: getWidth() }}
          transition={{ type: "spring", damping: 20 }}
          id={placeholder}
          className="text-center appearance-none focus:outline-none"
          onKeyDown={onKeyDown}
          onFocus={() => updateState(State.FOCUSED)}
          onBlur={() => updateState(State.VERIFY)}
          onSubmit={onSubmit}
          value={value}
          onChange={(e) => updateValue(e.currentTarget.value)}
          placeholder={placeholder}
        />
        {state === State.FOCUSED ? (
          <ul data-testid="dropdown" className="absolute mt-10 bg-white border border-gray-300 rounded-sm shadow-lg">
            {filteredOptions.map((s, i) => (
              <li
                key={i}
                className={`px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 ${
                  activeOption === i ? "bg-research-100" : ""
                }`}
                onMouseDown={() => {
                  updateValue(s)
                }}
              >
                {s}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}

export default AutoSuggest
