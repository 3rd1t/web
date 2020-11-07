import React, { useState, useEffect } from "react"
import { SidebarLayout } from "@perfolio/components/nav/layout/sidebar-layout/sidebar-layout"
import { MultistepForm } from "@perfolio/components/form/multistep-form/multistep-form"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import { menuContent } from "../../../content/menu-content"
import { SimpleChart } from './builder1'
//import LineChart from "./line-chart"

export interface LineChartProps {
  factorModels: { value: string; display: string; factors: { value: string; display: string }[] }[]
  regions: { value: string; display: string }[]
  currencies: { value: string; display: string }[]
  intervals: { value: string; display: string }[]
}

export const LineChart = (props: LineChartProps) => {
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
      const url = "https://api.perfol.io/d/beta/" + path()
      fetch(url)
        .then((res) => res.json())
        .then((data) => setCells(data))
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

/* Not needed for chart
  function download(url: string, filename: string) {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.style.display = "none"
        a.href = url
        a.download = filename
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
      })
      .catch(() => console.error("Could not download file"))
  }
  */

  return (
    <div>
      <AnimateSharedLayout>
        <SidebarLayout breadcrumbs={["data", "builder", "line chart"]} menuContent={menuContent("factor")}>
          <div className="p-8 space-y-4">
            <MultistepForm steps={steps} title="Build your custom chart" />

            <AnimatePresence>
              {complete ? (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ damping: 300 }}
                  >
                    {SimpleChart(cells.slice(0, 5))}
                  </motion.div>

                  <motion.div
                    layout
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ damping: 300 }}
                  />
                </>
              ) : null}
            </AnimatePresence>
          </div>
        </SidebarLayout>
      </AnimateSharedLayout>
    </div>
  )
}

export default LineChart

export async function getStaticProps() {
  const url = process.env.NEXT_PUBLIC_BUILDER_CONFIG_URL
  if (!url) {
    throw new Error("NEXT_PUBLIC_BUILDER_CONFIG_URL must be set")
  }
  const config = await fetch(url).then((res) => res.json())
  return {
    props: config,
  }
}
