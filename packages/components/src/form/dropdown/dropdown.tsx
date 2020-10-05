import React from "react"
import { Menu, Transition } from "@headlessui/react"

/* eslint-disable-next-line */
export interface DropdownProps {
  button: string | React.ReactNode
  options: React.ReactNode[]
}

export const Dropdown = ({ button, options }: DropdownProps) => {
  return (
    <Menu>
      {({ open }) => (
        <div className="relative">
          <Menu.Button className="focus:outline-none">{button}</Menu.Button>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <div className="absolute w-full mt-1 bg-white rounded-md shadow-lg">
              <Menu.Items as="ul" className="max-h-56 focus:outline-none sm:text-sm sm:leading-5 ">
                {options.map((option, i) => {
                  return (
                    <Menu.Item
                      as="li"
                      key={i}
                      className="w-full px-4 py-2 text-gray-700 cursor-default select-none hover:text-gray-900 hover:bg-gray-100"
                    >
                      {option}
                    </Menu.Item>
                  )
                })}
              </Menu.Items>
            </div>
          </Transition>
        </div>
      )}
    </Menu>
  )
}

export default Dropdown
