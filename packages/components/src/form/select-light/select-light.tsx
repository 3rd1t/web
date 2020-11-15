import React, { useEffect, useState } from "react"
import { Transition, Menu, Listbox } from "@headlessui/react"
/* eslint-disable-next-line */
export interface SelectLightProps {
  label: string
  choices: string[]
  selected: number
  setSelected: React.Dispatch<React.SetStateAction<number>>
}

export const SelectLight = ({ label, choices, selected, setSelected }: SelectLightProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-xs mx-auto">
        <Listbox
          as="div"
          className="space-y-1"
          value={choices[selected]}
          // we need to access the indices outside of this component for easier datastructures.
          // Conveniently `indexOf` returns -1 if the value is not included.
          // We are using `-1` already to label a choice as not set yet.
          //
          // The next line is ignored because typescript thinks it will receive an event but
          // it actually receives a string and it works this way
          // @ts-ignore
          onChange={(value) => setSelected(choices.indexOf(value))}
        >
          {({ open }) => (
            <div className="relative">
              <span className="inline-block w-full ">
                <Listbox.Button
                  aria-label={label}
                  className="relative w-full pr-10 text-left text-gray-700 transition duration-150 ease-in-out focus:outline-none focus:border-gray-300 sm:text-sm sm:leading-5"
                >
                  <span className="flex items-center text-lg text-gray-700 truncate transition duration-150 ease-in-out hover:text-black">
                    Language
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg className="w-5 h-5 text-perfolio-silver" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                      <path
                        d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Listbox.Button>
              </span>

              <Transition
                show={open}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="absolute z-10 w-full mt-1 bg-white"
              >
                <Listbox.Options
                  static
                  className="py-1 overflow-auto text-base leading-6 rounded-md shadow-xs max-h-60 focus:outline-none sm:text-sm sm:leading-5"
                >
                  {choices.map((choice) => (
                    <Listbox.Option key={choice} value={choice}>
                      {({ selected, active }) => (
                        <div
                          className={`${
                            active ? " bg-primary-400" : ""
                          } cursor-default select-none text-gray-900 relative py-2  px-4`}
                        >
                          <span className={`${selected ? "font-semibold" : "font-normal"} block truncate`}>
                            {choice}
                          </span>
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          )}
        </Listbox>
      </div>
    </div>
  )
}

export default SelectLight
