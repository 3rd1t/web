import React from "react"
import { Feature } from "../feature/feature"
/* eslint-disable-next-line */
export interface BuildersProps {}

const builders: {
  title: string
  sellingPoints: string[]
  href: string
}[] = [
  {
    title: "API",
    sellingPoints: ["Any programing language", "Always up to date", "Code examples available", "Available as csv, json, xml, xlsx"],
    href: "/builder/api",
  },
  {
    title: "File",
    sellingPoints: ["Use directly in Excel", "Straightforward information schema", "Easy to handle", "Available as csv, json, xml, xlsx"],
    href: "/builder/file",
  },
  {
    title: "Chart",
    sellingPoints: ["Analyse directly in your browser", "Who doesn't like charts", "Visual reprerentation", "TODO: need one more :)"],
    href: "/builder/chart",
  },
]

export const Builders = (props: BuildersProps) => {
  return (
    <ul className="flex flex-col justify-center mt-20 space-y-4 lg:space-x-4 lg:space-y-0 lg:flex-row">
      {builders.map((builder, i) => {
        return (
          <li key={i} className="w-1/3">
            <Feature title={builder.title} sellingPoints={builder.sellingPoints} href={builder.href} />
          </li>
        )
      })}
    </ul>
  )
}

export default Builders
