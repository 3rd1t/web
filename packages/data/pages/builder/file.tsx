import React, { useState } from "react"
import { MultiColumn } from "@perfolio/shared/nav"
import { Select } from "@perfolio/shared/components"
import { Transition } from "@tailwindui/react"
import { finished } from "stream"

enum State {
  TODO,
  ACTIVE,
  DONE,
}

export interface FileProps {
  factorModels: { name: string; factors: { key: string; description: string }[] }[]
  regions: string[]
  currencies: string[]
  intervals: string[]
}

export const File = (props: FileProps) => {
  const [factorModel, setFactorModel] = useState(props.factorModels[0].name)
  const [factor, setFactor] = useState<string>()
  const [region, setRegion] = useState<string>()
  const [currency, setCurrency] = useState<string>()
  const [interval, setInterval] = useState<string>()

  const submit = (model: string, factor: string, region: string, currency: string, interval: string) => {
    const url = "https://api.perfol.io/d/beta/" + [model, factor, region, currency, interval].join("/")
    fetch(url, {
      mode: "no-cors",
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
  }

  const steps = ["Model", "Factor", "Region", "Currency", "Interval"]
  const [state, setState] = useState<State[]>(steps.map((_, i) => (i === 0 ? State.ACTIVE : State.TODO)))

  const updateState = (i: number, newState: State) => {
    const newStates = state.map((s) => s)
    newStates[i] = newState
    setState(newStates)
  }

  return (
    <div>
      <MultiColumn breadcrumbs={["data", "builder", "file"]}>
        <div className="flex items-center justify-center">
          <aside className="flex flex-col space-y-4">
            {steps.map((step, i) => (
              <div className="flex items-center space-x-4">
                <div
                  className={`border-4 rounded-full ${
                    state[i] === State.DONE
                      ? "border-data-600 "
                      : state[i] === State.ACTIVE
                      ? "border-data-200"
                      : "border-transparent"
                  }`}
                >
                  <div
                    className={`w-2 h-2 flex rounded-full ${
                      state[i] === State.DONE || state[i] === State.ACTIVE ? "bg-data-600" : "bg-gray-300"
                    }`}
                  ></div>
                </div>
                <span
                  className={`text-sm  leading-5 ${
                    state[i] === State.ACTIVE ? "text-gray-900 font-semibold" : "text-gray-600 font-medium"
                  } `}
                >
                  {step}
                </span>
              </div>
            ))}
          </aside>
          <main>
            <h2></h2>
            <div></div>
            <div>
              <button>Prev</button>
              <button>Next</button>
            </div>
          </main>
        </div>

        <div className="max-w-lg p-20">
          <form>
            <Select
              setValue={setFactorModel}
              label="Factor model"
              choices={props.factorModels.map((f) => f.name)}
            ></Select>
            <Select
              setValue={setFactor}
              label="Factor"
              choices={props.factorModels.filter((f) => f.name === factorModel)[0].factors.map((f) => f.key)}
            ></Select>
            <Select setValue={setRegion} label="Region" choices={props.regions}></Select>
            <Select setValue={setCurrency} label="Currency" choices={props.currencies}></Select>
            <Select setValue={setInterval} label="Interval" choices={props.intervals}></Select>

            <button type="button" onClick={() => submit(factorModel, factor, region, currency, interval)}>
              Submit
            </button>
          </form>
        </div>
      </MultiColumn>
    </div>
  )
}

export default File

export async function getStaticProps() {
  return {
    props: {
      factorModels: [
        {
          name: "3factor",
          factors: [
            {
              key: "XXX",
              description: "maybe just spell it out",
            },
            {
              key: "XXX",
              description: "maybe just spell it out",
            },
            {
              key: "XXX",
              description: "maybe just spell it out",
            },
            {
              key: "all",
              description: "All factors",
            },
          ],
        },
        {
          name: "4factor",
          factors: [
            {
              key: "XXX",
              description: "maybe just spell it out",
            },
            {
              key: "XXX",
              description: "maybe just spell it out",
            },
            {
              key: "XXX",
              description: "maybe just spell it out",
            },
            {
              key: "XXX",
              description: "maybe just spell it out",
            },
            {
              key: "all",
              description: "All factors",
            },
          ],
        },
        {
          name: "5factor",
          factors: [
            {
              key: "XXX",
              description: "maybe just spell it out",
            },
            {
              key: "XXX",
              description: "maybe just spell it out",
            },
            {
              key: "XXX",
              description: "maybe just spell it out",
            },
            {
              key: "XXX",
              description: "maybe just spell it out",
            },
            {
              key: "XXX",
              description: "maybe just spell it out",
            },

            {
              key: "all",
              description: "All factors",
            },
          ],
        },
        {
          name: "5factor",
          factors: [
            {
              key: "XXX",
              description: "maybe just spell it out",
            },
            {
              key: "XXX",
              description: "maybe just spell it out",
            },
            {
              key: "XXX",
              description: "maybe just spell it out",
            },
            {
              key: "XXX",
              description: "maybe just spell it out",
            },
            {
              key: "XXX",
              description: "maybe just spell it out",
            },
            {
              key: "XXX",
              description: "maybe just spell it out",
            },

            {
              key: "all",
              description: "All factors",
            },
          ],
        },
      ],
      regions: [
        "USA",
        "Developed",
        "Developed_ex_US",
        "Europe",
        "Japan",
        "Asia_Pacific_ex_Japan",
        "North_America",
        "Emerging",
      ],

      currencies: [
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

      intervals: ["daily", "monthly", "annual"],
    },
  }
}
