import React, { useState } from "react"
import { MultiColumn } from "@perfolio/shared/nav"
import { Select } from "@perfolio/shared/components"
import { Transition } from "@tailwindui/react"
import { Table, Button, SimpleTable } from "@perfolio/shared/components"
export interface FileProps {
  factorModels: { name: string; description: string; factors: { name: string; description: string }[] }[]
  regions: string[]
  currencies: string[]
  intervals: string[]
}

const FormPart = (i: number, select: React.ReactNode, title: string, description: string): React.ReactNode => {
  return (
    <div>
      <h3 className="text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        {title}
      </h3>
      <p className="max-w-2xl mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">{description}</p>

      <div className="max-w-md mt-10">{select}</div>
    </div>
  )
}

export const File = (props: FileProps) => {
  const [model, setModel] = useState<number>(0)
  const [factor, setFactor] = useState<number>(0)
  const [region, setRegion] = useState<number>(0)
  const [currency, setCurrency] = useState<number>(0)
  const [interval, setInterval] = useState<number>(0)

  const submit = (model: string, factor: string, region: string, currency: string, interval: string) => {
    const url = "https://api.perfol.io/d/beta/" + path()
    fetch(url, {
      mode: "no-cors",
    })
      .then((res) => res.json())
      .then((json) => setTableContent(json))
      .catch((err) => {
        console.error(err)
      })
  }

  const [tableContent, setTableContent] = useState([])

  const formData: { step: string; title: string; description: string; select: React.ReactNode }[] = [
    {
      step: "Model",
      title: "Select a factor model",
      description: "Quisque ultrices odio ut tellus congue, scelerisque egestas augue accumsan.",
      select: (
        <Select
          selected={model}
          setSelected={setModel}
          label="Factor model"
          choices={props.factorModels.map((m) => m.description)}
        ></Select>
      ),
    },
    {
      step: "Factor",
      title: "Select a factor",
      description: "Quisque ultrices odio ut tellus congue, scelerisque egestas augue accumsan.",
      select: (
        <Select
          selected={factor}
          setSelected={setFactor}
          label="Factor"
          choices={props.factorModels
            .filter((f) => f.name === props.factorModels[model].name)[0]
            .factors.map((f) => f.description)}
        ></Select>
      ),
    },
    {
      step: "Region",
      title: "Select a region",
      description: "Quisque ultrices odio ut tellus congue, scelerisque egestas augue accumsan.",
      select: <Select selected={region} setSelected={setRegion} label="Region" choices={props.regions}></Select>,
    },
    {
      step: "Currency",
      title: "Select a currency",
      description: "Quisque ultrices odio ut tellus congue, scelerisque egestas augue accumsan.",

      select: (
        <Select selected={currency} setSelected={setCurrency} label="Currency" choices={props.currencies}></Select>
      ),
    },
    {
      step: "Interval",
      title: "Select an interval",
      description: "Quisque ultrices odio ut tellus congue, scelerisque egestas augue accumsan.",
      select: (
        <Select selected={interval} setSelected={setInterval} label="Interval" choices={props.intervals}></Select>
      ),
    },
  ]

  const [activeStep, setActiveStep] = useState<number>(0)
  const next = () => {
    if (activeStep + 1 < formData.length) {
      setActiveStep(activeStep + 1)
    }
  }
  const previous = () => {
    if (activeStep - 1 >= 0) {
      setActiveStep(activeStep - 1)
    }
  }

  const path = () => {
    return [
      props.factorModels[model].name,
      props.factorModels[model].factors[factor].name,
      props.regions[region],
      props.currencies[currency],
      props.intervals[interval],
    ].join("/")
  }
  return (
    <div>
      <MultiColumn breadcrumbs={["data", "builder", "file"]}>
        <div className="flex flex-col items-center justify-center w-full h-full space-y-20">
          <div className="flex items-center justify-center">
            <aside className="flex flex-col w-1/3 space-y-4">
              {formData.map((part, i) => (
                <button key={i} onClick={() => setActiveStep(i)} className="flex items-center space-x-4 focus:outline-none">
                  <div
                    className={`border-4 rounded-full ${
                      i < activeStep
                        ? "border-transparent"
                        : i === activeStep
                        ? "border-data-200"
                        : "border-transparent"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 flex rounded-full ${i <= activeStep ? "bg-data-600" : "bg-gray-300"}`}
                    ></div>
                  </div>
                  <span
                    className={`text-sm  ${
                      i === activeStep ? "text-gray-900 font-semibold" : "text-gray-600 font-medium"
                    } `}
                  >
                    {part.step}
                  </span>
                </button>
              ))}
            </aside>
            <main className="inset-y-0 w-2/3 ml-20">
              {formData.map((part, i) => {
                return (
                  <Transition key={i} show={i === activeStep}>
                    {FormPart(i, part.select, part.title, part.description)}
                  </Transition>
                )
              })}
              <div className="flex items-center justify-end mt-10 divide-x divide-gray-200">
                <Button
                  textColor="text-gray-800"
                  iconLeft={
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                  bgColor="bg-transparent"
                  onClick={previous}
                  label="Prev"
                />
                <Button
                  textColor="text-gray-800"
                  iconRight={
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                  bgColor="bg-transparent"
                  onClick={() => {
                    activeStep < formData.length - 1 ? next : submit
                  }}
                  label={activeStep < formData.length - 1 ? "Next" : "Finish"}
                />
              </div>
            </main>
          </div>
          <div className="w-full px-20 space-y-2">
            <span className="text-lg font-medium leading-6 text-gray-600">Preview</span>
            <Table columnNames={["Date", "MOM", "HML", "OMG", "LOL", "WTF"]} cells={tableContent} />
          </div>
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
          description: "3 Factor model by Fama & French 1993",
          factors: [
            {
              name: "XXX",
              description: "maybe just spell it out",
            },
            {
              name: "XXX",
              description: "maybe just spell it out",
            },
            {
              name: "XXX",
              description: "maybe just spell it out",
            },
            {
              name: "all",
              description: "All factors",
            },
          ],
        },
        {
          name: "4factor",
          description: "4 Factor model by Fama & French 1993",

          factors: [
            {
              name: "XXX",
              description: "maybe just spell it out",
            },
            {
              name: "XXX",
              description: "maybe just spell it out",
            },
            {
              name: "XXX",
              description: "maybe just spell it out",
            },
            {
              name: "XXX",
              description: "maybe just spell it out",
            },
            {
              name: "all",
              description: "All factors",
            },
          ],
        },
        {
          name: "5factor",
          description: "5 Factor model by Fama & French 1993",

          factors: [
            {
              name: "XXX",
              description: "maybe just spell it out",
            },
            {
              name: "XXX",
              description: "maybe just spell it out",
            },
            {
              name: "XXX",
              description: "maybe just spell it out",
            },
            {
              name: "XXX",
              description: "maybe just spell it out",
            },
            {
              name: "XXX",
              description: "maybe just spell it out",
            },

            {
              name: "all",
              description: "All factors",
            },
          ],
        },
        {
          name: "6factor",
          description: "6 Factor model by Fama & French 1993",

          factors: [
            {
              name: "mom",
              description: "Momentum",
            },
            {
              name: "XXX",
              description: "maybe just spell it out",
            },
            {
              name: "XXX",
              description: "maybe just spell it out",
            },
            {
              name: "XXX",
              description: "maybe just spell it out",
            },
            {
              name: "XXX",
              description: "maybe just spell it out",
            },
            {
              name: "XXX",
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
