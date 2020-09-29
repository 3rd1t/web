import React, { useState, useEffect } from "react"
import { MultiColumn } from "@perfolio/shared/nav"
import { MultistepForm, Table, Button } from "@perfolio/shared/components"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"

export interface FileProps {
  factorModels: { name: string; description: string; factors: { name: string; description: string }[] }[]
  regions: string[]
  currencies: string[]
  intervals: string[]
}

export const File = (props: FileProps) => {
  const [model, setModel] = useState<number>(-1)
  const [factor, setFactor] = useState<number>(-1)
  const [region, setRegion] = useState<number>(-1)
  const [currency, setCurrency] = useState<number>(-1)
  const [interval, setInterval] = useState<number>(-1)

  useEffect(() => {
    setFactor(-1)
  }, [model])

  const steps: {
    name: string
    description: string
    choices: string[]
    value: number
    setValue: React.Dispatch<React.SetStateAction<number>>
  }[] = [
    {
      name: "Model",
      description: "Quisque ultrices odio ut tellus congue, scelerisque egestas augue accumsan.",
      choices: props.factorModels.map((m) => m.description),
      value: model,
      setValue: setModel,
    },
    {
      name: "Factor",
      description: "Quisque ultrices odio ut tellus congue, scelerisque egestas augue accumsan.",
      choices:
        model >= 0
          ? props.factorModels.find((f) => f.name === props.factorModels[model].name).factors.map((f) => f.description)
          : [],
      value: factor,
      setValue: setFactor,
    },
    {
      name: "Region",
      description: "Quisque ultrices odio ut tellus congue, scelerisque egestas augue accumsan.",
      choices: props.regions,
      value: region,
      setValue: setRegion,
    },
    {
      name: "Currency",
      description: "Quisque ultrices odio ut tellus congue, scelerisque egestas augue accumsan.",
      choices: props.currencies,
      value: currency,
      setValue: setCurrency,
    },
    {
      name: "Interval",
      description: "Quisque ultrices odio ut tellus congue, scelerisque egestas augue accumsan.",
      choices: props.intervals,
      value: interval,
      setValue: setInterval,
    },
  ]

  const [cells, setCells] = useState([])
  const [complete, setComplete] = useState(false)
  // Checks if form is complete and sets table content
  useEffect(() => {
    if (model >= 0 && factor >= 0 && region >= 0 && currency >= 0 && interval >= 0) {
      setComplete(true)
    } else {
      setComplete(false)
    }
  }, [model, factor, region, currency, interval])

  const path = () => {
    return [
      props.factorModels[model].name,
      props.factorModels[model].factors[factor].name,
      props.regions[region],
      props.currencies[currency],
      props.intervals[interval],
    ].join("/")
  }

  const columnNames = (): string[] => {
    if (model < 0 || factor < 0) {
      return []
    }

    const selectedFactor = props.factorModels[model].factors[factor].name
    if (selectedFactor.toLowerCase() === "all") {
      return ["Date", ...props.factorModels[model].factors.map((f) => f.name)]
    }
    return ["Date", props.factorModels[model].factors[factor].name]
  }

  return (
    <div>
      <AnimateSharedLayout>
        <MultiColumn breadcrumbs={["data", "builder", "file"]}>
          <div className="p-8 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Build your custom file</h3>
            <MultistepForm steps={steps} />

            <AnimatePresence>
              {complete ? (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ damping: 300 }}
                  >
                    <Table columnNames={columnNames()} cells={cells}></Table>
                  </motion.div>

                  <motion.div
                    layout
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ damping: 300 }}
                  >
                    <Button
                      onClick={() => console.log("DONE")}
                      label="Download"
                      bgColor="bg-carbon-900"
                      textColor="text-gray-100"
                      iconRight={
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      }
                    ></Button>
                  </motion.div>
                </>
              ) : null}
            </AnimatePresence>
          </div>
        </MultiColumn>
      </AnimateSharedLayout>
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
