import React, { useState, useEffect, useRef, ChangeEvent } from "react"
import { motion } from "framer-motion"

export enum Status {
  IDLE,
  FOCUSED,
  VERIFY,
  DONE,
}

export interface AutoSuggestProps {
  options: string[]
  placeholder: string
  value: string
  updateValue: any
  status: Status
  updateStatus: any
}

export const AutoSuggest = ({ updateStatus, status, updateValue, value, options, placeholder }: AutoSuggestProps) => {
  const ref = useRef(null)
  const [filteredOptions, setFilteredOptions] = useState(options)
  const [activeOption, setFocusOption] = useState(-1)

  const onBlur = () => {
    console.log({ value })
    const isValid = options.map((option) => option.toLowerCase()).includes(value.toLowerCase())
    console.log({ isValid })
    updateStatus(isValid ? Status.DONE : Status.IDLE)
  }

  useEffect(() => {
    if (status === Status.VERIFY) {
      onBlur()
    }
  }, [status])

  const getWidth = (): string => {
    const padding = 4
    const width = value.length > 0 ? value.length : 5
    return ((status === Status.DONE ? width : width + padding) + 2).toString() + "ch"
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
      updateStatus(Status.VERIFY)
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
    setFilteredOptions(filtered)
  }, [value])

  return (
    <div ref={ref}>
      <div className="relative flex justify-center">
        <motion.input
          autoComplete="off"
          layout
          initial={{ width: getWidth() }}
          animate={{ width: getWidth() }}
          id="input"
          className="text-center appearance-none focus:outline-none"
          onKeyDown={onKeyDown}
          onFocus={() => updateStatus(Status.FOCUSED)}
          onBlur={() => updateStatus(Status.VERIFY)}
          onSubmit={onSubmit}
          value={value}
          onChange={(e) => updateValue(e.currentTarget.value)}
          placeholder={placeholder}
        />
        {status === Status.FOCUSED ? (
          <ul className="absolute mt-10 bg-white border border-gray-300 rounded-sm shadow-lg">
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
