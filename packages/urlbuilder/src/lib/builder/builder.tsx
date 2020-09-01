import React, { useState } from "react"
import { AutoSuggest, State } from "./auto-suggest/auto-suggest"

/* eslint-disable-next-line */
export interface BuilderProps {}

export const Builder = (props: BuilderProps) => {
  const initValue = () => {
    const [state, setState] = useState("")
    return {
      state,
      setState,
    }
  }
  const initState = () => {
    const [state, setState] = useState(State.IDLE)
    return {
      state,
      setState,
    }
  }

  const fields = [
    {
      name: "factor",
      value: initValue(),
      status: initState(),

      options: ["3", "4", "5", "6"],
    },
    {
      name: "region",
      value: initValue(),
      status: initState(),

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
      value: initValue(),
      status: initState(),

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
      value: initValue(),
      status: initState(),

      options: ["daily", "monthly", "annual"],
    },
  ]

  const isValid = (): boolean => {
    return fields.every((field) => {
      return field.status.state === State.DONE
    })
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
              {i > 0 ? <span className="font-thin text-gray-500">/</span> : null}
              {
                <AutoSuggest
                  placeholder={f.name}
                  value={f.value.state}
                  options={f.options}
                  updateValue={f.value.setState}
                  state={f.status.state}
                  updateState={f.status.setState}
                />
              }
            </div>
          ))}
          <span className="p-2 font-thin bg-gray-100 border-l border-gray-300">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`w-6 h-6 block ${isValid() ? "text-green-500" : "text-gray-700"}`}>
              {isValid() ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              ) : (
   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              )}
            </svg>
          </span>
        </div>
      </form>
    </div>
  )
}

export default Builder
