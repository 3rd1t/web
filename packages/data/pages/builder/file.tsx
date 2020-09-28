import React, { useState, useEffect } from "react"
import { MultiColumn } from "@perfolio/shared/nav"
import { Select } from "@perfolio/shared/components"
import { Table, Button, SimpleTable } from "@perfolio/shared/components"
import { Menu, Transition } from "@headlessui/react"
import { updateModuleBlock } from "typescript"

export interface FileProps {
  factorModels: { name: string; description: string; factors: { name: string; description: string }[] }[]
  regions: string[]
  currencies: string[]
  intervals: string[]
}

const FormPart = (i: number, select: React.ReactNode, title: string, description: string): React.ReactNode => {
  return (
    <div className={`flex items-center justify-between p-2 m-4 border border-gray-400 rounded $`}>
      <div className="flex flex-col items-start w-2/3">
        <h3 className="text-2xl font-extrabold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>

      <div className="w-1/3">{select}</div>
    </div>
  )
}

export const File = (props: FileProps) => {
  const [model, setModel] = useState<number>(-1)
  const [factor, setFactor] = useState<number>(-1)
  const [region, setRegion] = useState<number>(-1)
  const [currency, setCurrency] = useState<number>(-1)
  const [interval, setInterval] = useState<number>(-1)

  const updateModel = (index: number) => {
    if (model === -1) {
      setActiveStep(activeStep + 1)
    }
    setModel(index)
  }

  const updateFactor = (index: number) => {
    if (factor === -1) {
      setActiveStep(activeStep + 1)
    }
    setFactor(index)
  }

  const updateRegion = (index: number) => {
    if (region === -1) {
      setActiveStep(activeStep + 1)
    }
    setRegion(index)
  }

  const updateCurrency = (index: number) => {
    if (currency === -1) {
      setActiveStep(activeStep + 1)
    }
    setCurrency(index)
  }

  const updateInterval = (index: number) => {
    if (interval === -1) {
      setActiveStep(activeStep + 1)
    }
    setInterval(index)
  }

  const submit = () => {
    console.log(path())
  }

  const [tableContent, setTableContent] = useState([])

  const formData: { step: string; description: string; select: React.ReactNode }[] = [
    {
      step: "Model",
      description: "Quisque ultrices odio ut tellus congue, scelerisque egestas augue accumsan.",
      select: (
        <Select
          selected={model}
          setSelected={updateModel}
          choices={props.factorModels.map((m) => m.description)}
        ></Select>
      ),
    },
    {
      step: "Factor",
      description: "Quisque ultrices odio ut tellus congue, scelerisque egestas augue accumsan.",
      select: (
        <Select
          selected={factor}
          setSelected={updateFactor}
          choices={
            model >= 0
              ? props.factorModels
                  .filter((f) => f.name === props.factorModels[model].name)[0]
                  .factors.map((f) => f.description)
              : []
          }
        ></Select>
      ),
    },
    {
      step: "Region",
      description: "Quisque ultrices odio ut tellus congue, scelerisque egestas augue accumsan.",
      select: <Select selected={region} setSelected={updateRegion} choices={props.regions}></Select>,
    },
    {
      step: "Currency",
      description: "Quisque ultrices odio ut tellus congue, scelerisque egestas augue accumsan.",
      select: <Select selected={currency} setSelected={updateCurrency} choices={props.currencies}></Select>,
    },
    {
      step: "Interval",
      description: "Quisque ultrices odio ut tellus congue, scelerisque egestas augue accumsan.",
      select: <Select selected={interval} setSelected={updateInterval} choices={props.intervals}></Select>,
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
        <div className="p-8">
          <div className="flex justify-between">
            <span className="text-lg font-semibold text-gray-800">Build your custom file</span>
            <div className="flex space-x-4">
              {formData.map((part, i) => (
                <div className="flex items-center focus:outline-none">
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
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 space-y-4"></div>
        </div>
        <div>
          <Button textColor="text-gray-900" label="Submit" onClick={submit} />
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
