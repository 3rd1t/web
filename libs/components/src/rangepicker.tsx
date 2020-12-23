import React, { useState } from "react";
import {atom, useRecoilState, selector} from "recoil"

const nanosecondsPerDay = 24 * 60 * 60 * 1000

interface Option {
  label: string
  startTime: number
}

const options: Option[] = [
  {
    label: "1W",
    startTime: new Date(Date.now() - 7 * nanosecondsPerDay).getTime()
  },
  {
    label: "1M",
    startTime: new Date(Date.now() - 30 * nanosecondsPerDay).getTime()
  },
  {
    label: "3M",
    startTime: new Date(Date.now() - 90 * nanosecondsPerDay).getTime(),
    
  },
  {
    label: "1Y",
    startTime: new Date(Date.now() - 365 * nanosecondsPerDay).getTime(),
  },
  {
    label: "YTD",
    startTime: new Date(new Date().getFullYear(),0).getTime()
  },
  {
    label: "MAX",
    startTime: Number.NEGATIVE_INFINITY
  }
]

export const chartRangeState = atom({
  key: "chartRangeState",
  default: options[0],
})








export const RangePicker = () => {



  const [selection, setSelection] = useRecoilState<Option>(chartRangeState)





  
  return (
    <ul className="inline-flex border border-gray-300 divide-x divide-gray-300 rounded">
      {options.map((option, i) => (
        <li key={option.label}>
          <button
            onClick={() => setSelection(options[i])}
            className={`px-4 py-2 text-sm font-medium  transition duration-150 ease-in-out  bg-gradient-to-t hover:text-gray-100 hover:from-violet-800 hover:to-indigo-700 focus:outline-none
            ${
              option.label === selection.label
                ? " bg-gradient-to-t from-indigo-900 to-violet-800 text-gray-100"
                : "bg-white text-gray-700"
            } 
            ${i === 0 ? "rounded-l" : ""}
            ${i === options.length - 1 ? "rounded-r" : ""}
            `}
          >
            {option.label}
          </button>
        </li>
      ))}
    </ul>
  );
};
