import React, { useState, useEffect } from "react"
import { SidebarLayout } from "@perfolio/components/nav/layout/sidebar-layout/sidebar-layout"
import { MultistepForm } from "@perfolio/components/form/multistep-form/multistep-form"
import { Table } from "@perfolio/components/table/table"
import { Button } from "@perfolio/components/clickable/button/button"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"

export interface FileProps {
  factorModels: { value: string; display: string; factors: { value: string; display: string }[] }[]
  regions: { value: string; display: string }[]
  currencies: { value: string; display: string }[]
  intervals: { value: string; display: string }[]
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
    choice: number
    setChoice: React.Dispatch<React.SetStateAction<number>>
  }[] = [
    {
      name: "Model",
      description: "Quisque ultrices odio ut tellus congue, scelerisque egestas augue accumsan.",
      choices: props.factorModels.map((m) => m.display),
      choice: model,
      setChoice: setModel,
    },
    {
      name: "Factor",
      description: "Quisque ultrices odio ut tellus congue, scelerisque egestas augue accumsan.",
      choices:
        model >= 0
          ? props.factorModels.find((f) => f.value === props.factorModels[model].value).factors.map((f) => f.display)
          : [],
      choice: factor,
      setChoice: setFactor,
    },
    {
      name: "Region",
      description: "Quisque ultrices odio ut tellus congue, scelerisque egestas augue accumsan.",
      choices: props.regions.map((r) => r.display),
      choice: region,
      setChoice: setRegion,
    },
    {
      name: "Currency",
      description: "Quisque ultrices odio ut tellus congue, scelerisque egestas augue accumsan.",
      choices: props.currencies.map((c) => c.display),
      choice: currency,
      setChoice: setCurrency,
    },
    {
      name: "Interval",
      description: "Quisque ultrices odio ut tellus congue, scelerisque egestas augue accumsan.",
      choices: props.intervals.map((i) => i.display),
      choice: interval,
      setChoice: setInterval,
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
      props.factorModels[model].value,
      props.factorModels[model].factors[factor].value,
      props.regions[region].value,
      props.currencies[currency].value,
      props.intervals[interval].value,
    ].join("/")
  }

  const columnNames = (): string[] => {
    if (model < 0 || factor < 0) {
      return []
    }

    const selectedFactor = props.factorModels[model].factors[factor].value
    if (selectedFactor.toLowerCase() === "all") {
      return ["Date", ...props.factorModels[model].factors.map((f) => f.value)]
    }
    return ["Date", props.factorModels[model].factors[factor].value]
  }

  return (
    <div>
      <AnimateSharedLayout>
        <SidebarLayout breadcrumbs={["data", "builder", "file"]}>
          <div className="p-8 space-y-4">
            <MultistepForm steps={steps} title="Build your custom file" />

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
        </SidebarLayout>
      </AnimateSharedLayout>
    </div>
  )
}

export default File

export async function getStaticProps() {
  const config = await fetch("https://api.perfol.io/d/beta/builder/factor").then((res) => res.json())
  return {
    props: config,
  }
}
