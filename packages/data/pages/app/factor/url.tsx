import React, { useState, useEffect } from "react"
import { SidebarLayout } from "@perfolio/components/nav/layout/sidebar-layout/sidebar-layout"
import { Builder } from "@perfolio/urlbuilder"
import { menuContent } from "../../../content/menu-content"

export interface URLProps {
  factorModels: { value: string; display: string; factors: { value: string; display: string }[] }[]
  regions: { value: string; display: string }[]
  currencies: { value: string; display: string }[]
  intervals: { value: string; display: string }[]
}

export const URL = (props: URLProps) => {
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

  return (
    <SidebarLayout breadcrumbs={["data", "builder", "file"]} menuContent={menuContent("factor")}>
      <div className="p-8 space-y-4">
        <Builder />
      </div>
    </SidebarLayout>
  )
}

export default URL

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
