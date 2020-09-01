import React, { useState } from "react"
import { AutoSuggest, Status } from "./auto-suggest/auto-suggest"

/* eslint-disable-next-line */
export interface BuilderProps {}

export const Builder = (props: BuilderProps) => {
  const newState = (initial: string | Status) => {
    const [state, setState] = useState(initial)
    return {
      state,
      setState,
    }
  }

  const fields = [
    {
      name: "factor",
      value: newState(""),
      status: newState(Status.IDLE),

      options: ["3", "4", "5", "6"],
    },
    {
      name: "region",
      value: newState(""),
      status: newState(Status.IDLE),

      options: [
        "USA",
        "Developed",
        "Developed_ex_US",
        "Europe",
        "Japan",
        "Asia_Pacific_ex_Japan",
        "North_America",
        "Emerging",
      ],
    },
    {
      name: "currency",
      value: newState(""),
      status: newState(Status.IDLE),

      options: [
        "EUR",
        "JPY",
        "GBP",
        "CHF",
        "RUB",
        "AUD",
        "BRL",
        "CAD",
        "CNY",
        "INR",
        "DKK",
        "NZD",
        "NOK",
        "SEK",
        "PLN",
        "ILS",
        "KRW",
        "TRY",
      ],
    },
    {
      name: "interval",
      value: newState(""),
      status: newState(Status.IDLE),

      options: ["daily", "monthly", "annual"],
    },
  ]

  const isValid = () => {
    const v = fields.every((field) => {
      return field.status.state === Status.DONE
    })
    console.log(v)
    return v
  }

  return (
    <div>
      <div>
        <h2></h2>
      </div>
      <form className="flex items-center justify-center mt-20 appearance-none">
        <div className="flex items-center mx-20 text-gray-700 border border-gray-300 rounded shadow">
          <span className="p-2 font-thin bg-gray-100 border-r border-gray-300">https://api.perfol.io/v1/factor/</span>

          {fields.map((f, i) => (
            <div key={i} className="flex items-center">
              {i > 0 ? <span className="font-thin"> /</span> : null}
              {
                <AutoSuggest
                  placeholder={f.name}
                  value={f.value.state}
                  options={f.options}
                  updateValue={f.value.setState}
                  status={f.status.state}
                  updateStatus={f.status.setState}
                />
              }
            </div>
          ))}
          <span className="p-2 font-thin bg-gray-100 border-l border-gray-300">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-500">
              {isValid() ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                ></path>
              )}
            </svg>
          </span>
        </div>
      </form>
    </div>
  )
}

export default Builder
