import React, { useEffect, useState } from "react"
import { Transition, Menu, Listbox } from "@headlessui/react"
/* eslint-disable-next-line */
export interface SelectProps {
  label: string
  choices: string[]
  selected: number
  setSelected: React.Dispatch<React.SetStateAction<number>>
}

export const Select = ({ label, choices, selected, setSelected }: SelectProps) => {
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
              <span className="inline-block w-full rounded-md shadow-sm">
                <Listbox.Button
                  aria-label={label}
                  className="relative w-full py-2 pl-3 pr-10 text-left transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md cursor-default focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                >
                  <span className="flex items-center h-5 truncate">{choices[selected]}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
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
                className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg"
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
                            active ? " bg-data-500 text-white" : "text-gray-800"
                          } cursor-default select-none relative py-2  px-4`}
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

    // <div className="w-full">
    //   <Listbox as="div" value={choices[selected]} onChange={localSetSelected} className="space-y-1">
    //     {({ open }) => (
    //       <>
    //         <div className="relative">
    //           <span className="inline-block w-full rounded-md shadow-sm">
    //             <Listbox.Button
    //               aria-label={label}
    //               className={`cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5 ${
    //                 selected < 0 ? "border-data-500" : "border-gray-300"
    //               }`}
    //             >
    //               <span className="block truncate" value={selected >= 0 ? choices[selected] : ""}></span>
    //               <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
    //                 <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
    //                   <path
    //                     d="M7 7l3-3 3 3m0 6l-3 3-3-3"
    //                     strokeWidth="1.5"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                   />
    //                 </svg>
    //               </span>
    //             </Listbox.Button>
    //           </span>
    //           <Transition
    //             show={open}
    //             enter="transition duration-100 ease-out"
    //             enterFrom="transform scale-95 opacity-0"
    //             enterTo="transform scale-100 opacity-100"
    //             leave="transition duration-75 ease-out"
    //             leaveFrom="transform scale-100 opacity-100"
    //             leaveTo="transform scale-95 opacity-0"
    //           >
    //             <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
    //               <Listbox.Options className="flex flex-col items-start py-1 overflow-auto text-base leading-6 rounded-sm shadow-xs max-h-56 focus:outline-none sm:text-sm sm:leading-5 ">
    //                 {choices.map((choice, i) => {
    //                   return (
    //                     <Listbox.Option
    //                       key={i}
    //                       className="w-full py-2 pl-3 text-left text-gray-900 cursor-default select-none hover:bg-data-300"
    //                       value={choices[selected]}
    //                     >
    //                       {({ active }) => (
    //                         <button
    //                           onClick={() => setSelected(i)}
    //                           className={`block font-normal truncate ${active ? "font-semibold" : ""}`}
    //                         >
    //                           {choice}
    //                         </button>
    //                       )}
    //                     </Listbox.Option>
    //                   )
    //                 })}
    //               </Listbox.Options>
    //             </div>
    //           </Transition>
    //         </div>
    //       </>
    //     )}
    //   </Listbox>
    // </div>
  )
}

export default Select
