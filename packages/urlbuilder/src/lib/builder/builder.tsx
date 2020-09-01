import React from "react"
import { AutoSuggest } from "./auto-suggest/auto-suggest"

/* eslint-disable-next-line */
export interface BuilderProps {}

export const Builder = (props: BuilderProps) => {
  const factors = (
    <datalist id="factors">
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
    </datalist>
  )
  const regions = (
    <datalist id="regions">
      <option>USA</option>
      <option>Developed</option>
      <option>Developed_ex_US</option>
      <option>Europe</option>
      <option>Japan</option>
      <option>Asia_Pacific_ex_Japan</option>
      <option>North_America</option>
      <option>Emerging</option>
    </datalist>
  )
  const currency = (
    <datalist id="currency">
      <option>EUR</option>
      <option>JPY</option>
      <option>GBP</option>
      <option>CHF</option>
      <option>RUB</option>
      <option>AUD</option>
      <option>BRL</option>
      <option>CAD</option>
      <option>CNY</option>
      <option>INR</option>
      <option>DKK</option>
      <option>NZD</option>
      <option>NOK</option>
      <option>SEK</option>
      <option>PLN</option>
      <option>ILS</option>
      <option>KRW</option>
      <option>TRY</option>
    </datalist>
  )
  const interval = (
    <datalist className="appearance-none" id="interval">
      <option>daily</option>
      <option>monthly</option>
      <option>annually</option>
    </datalist>
  )

  const fields = [
    <AutoSuggest className="flex flex-shrink w-1/4" placeholder="factor" suggestions={["3", "4", "5", "6"]} />,
    <AutoSuggest
      className="w-1/4"
      placeholder="region"
      suggestions={[
        "USA",
        "Developed",
        "Developed_ex_US",
        "Europe",
        "Japan",
        "Asia_Pacific_ex_Japan",
        "North_America",
        "Emerging",
      ]}
    />,
    <AutoSuggest
      className="w-1/4"
      placeholder="currrency"
      suggestions={[
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
      ]}
    />,
    <AutoSuggest
      className="w-1/4"
      placeholder="interval"
      suggestions={["daily", "monthly", "annually"]}
      icon={
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 calendar">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      }
    />,
  ]
  return (
    <div>
      <form className="flex items-center justify-center mt-20 appearance-none">
        <div className="flex items-center w-1/2 text-gray-700 border border-gray-300 rounded shadow">
          <span className="p-2 font-thin bg-gray-100 border-r border-gray-300">https://api.perfol.io/v1/</span>
          {fields.map((f, i) => (
            <div key={i}>
              {i > 0 ? <span className="font-thin"> /</span> : null}
              {f}
            </div>
          ))}
        </div>
      </form>
    </div>
  )
}

export default Builder
