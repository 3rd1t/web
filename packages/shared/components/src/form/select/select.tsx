import React, { useState, useEffect } from "react"
import { Transition } from "@tailwindui/react"
/* eslint-disable-next-line */
export interface SelectProps {
  choices: string[]
  selected: number
  setSelected: React.Dispatch<React.SetStateAction<number>>
  showLabel?: boolean
}

export const Select = ({ choices, selected, setSelected }: SelectProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
      <div className="relative">
        <span className="inline-block w-full rounded-sm">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            type="button"
            className="relative w-full py-2 pl-3 pr-10 text-left transition duration-150 ease-in-out bg-white border border-gray-300 rounded-sm cursor-default hover:border-data-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          >
            <div className="flex items-center space-x-3">
              <input
                readOnly
                onBlur={() => setDropdownOpen(false)}
                className="block w-full truncate cursor-pointer focus:outline-none"
                value={selected >= 0 ? choices[selected] : ""}
              ></input>
            </div>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </span>

        <Transition
          show={dropdownOpen}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            onMouseLeave={() => setDropdownOpen(false)}
            className="absolute z-10 w-full mt-1 bg-white rounded shadow-lg"
          >
            <ul className="py-1 overflow-auto text-base leading-6 rounded shadow-xs max-h-56 focus:outline-none sm:text-sm sm:leading-5">
              {choices.map((c, i) => (
                <li
                  onClick={() => {
                    setSelected(i)
                    setDropdownOpen(false)
                  }}
                  key={i}
                  role="option"
                  className="relative py-2 pl-3 text-gray-900 transition cursor-default select-none hover:bg-data-700 pr-9 hover:text-data-100"
                >
                  <div className="flex items-center space-x-3">
                    <span className={`block font-normal truncate ${selected === i ? "font-semibold" : ""}`}>{c}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Transition>
      </div>
  )
}

export default Select
