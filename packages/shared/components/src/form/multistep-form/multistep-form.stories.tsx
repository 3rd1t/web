import React from "react"
import { MultistepForm } from "./multistep-form"

export default {
  component: MultistepForm,
  title: "components/Form/MultistepForm",
}

export const twoSteps = () => {
  const first = -1
  const setFirst = (v: number) => {}
  const second = -1
  const setSecond = (v: number) => {}

  const props: {
    steps: {
      name: string
      description: string
      choices: string[]
      value: number
      setValue: React.Dispatch<React.SetStateAction<number>>
    }[]
  } = {
    steps: [
      {
        name: "First Question",
        description: "Description",
        choices: ["Hello", "World"],
        value: first,
        setValue: setFirst,
      },
      {
        name: "Second Question",
        description: "Description",
        choices: ["Hello", "World"],
        value: second,
        setValue: setSecond,
      },
    ],
  }

  return <MultistepForm steps={props.steps} />
}

export const realExample = () => {
  /* eslint-disable-next-line */
  const props = {
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
  }

  const model = -1
  const setModel = (v: number) => {}
  const factor = -1
  const setFactor = (v: number) => {}

  const region = -1
  const setRegion = (v: number) => {}
  const currency = -1
  const setCurrency = (v: number) => {}
  const interval = -1
  const setInterval = (v: number) => {}

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

  return <MultistepForm steps={steps} />
}
