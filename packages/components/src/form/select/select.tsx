import React, { useState } from "react"
import { Transition, Menu } from "@headlessui/react"
/* eslint-disable-next-line */
export interface SelectProps {
  label: string
  choices: string[]
  selected: number
  setSelected: React.Dispatch<React.SetStateAction<number>>
}

export const Select = ({ label, choices, selected, setSelected }: SelectProps) => {
  return (
    <div className="relative w-full">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button
              aria-label={label}
              className={`w-full p-2 text-left transition duration-150 ease-in-out bg-white border  rounded-sm cursor-default hover:border-data-400 focus:outline-none focus:shadow-outline-blue sm:text-sm sm:leading-5 ${
                selected < 0 ? "border-data-500" : "border-gray-300"
              }`}
            >
              <input
                aria-label="label"
                readOnly
                className="truncate cursor-pointer focus:outline-none"
                value={selected >= 0 ? choices[selected] : ""}
              ></input>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                  <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Menu.Button>
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
                <Menu.Items className="flex flex-col items-start py-1 overflow-auto text-base leading-6 rounded-sm shadow-xs max-h-56 focus:outline-none sm:text-sm sm:leading-5 ">
                  {choices.map((choice, i) => {
                    return (
                      <Menu.Item
                        key={i}
                        className="w-full py-2 pl-3 text-left text-gray-900 cursor-default select-none hover:bg-data-300"
                      >
                        {({ active }) => (
                          <button
                            onClick={() => setSelected(i)}
                            className={`block font-normal truncate ${active ? "font-semibold" : ""}`}
                          >
                            {choice}
                          </button>
                        )}
                      </Menu.Item>
                    )
                  })}
                </Menu.Items>
              </div>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  )
}

export default Select
