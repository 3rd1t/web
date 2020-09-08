import React from "react"
import { Feature, FeatureProps } from "../feature/feature"
/* eslint-disable-next-line */
export interface BuildersProps {}

const builders: FeatureProps[] = [
  {
    title: "API",
    subtitle: "Query data directly from our API",
    sellingPoints: [
      "Any programing language",
      "Always up to date",
      "Code examples available",
      "Available as csv, json, xml, xlsx",
    ],
    icon: (
      <svg
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    href: "/builder/api",
  },
  {
    title: "File",
    subtitle: "Build your file by defining the data you want",
    sellingPoints: [
      "Use directly in Excel",
      "Straightforward information schema",
      "Easy to handle",
      "Available as csv, json, xml, xlsx",
    ],
    icon: (
      <svg
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
        />
      </svg>
    ),
    href: "/builder/file",
  },
  {
    title: "Charts",
    subtitle: "Explore charts and analyse them in the browser",
    sellingPoints: [
      "Analyse directly in your browser",
      "Who doesn't like charts",
      "Visual reprerentation",
      "TODO: need one more :)",
    ],
    icon: (
      <svg
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    href: "/builder/chart",
  },
]

export const Builders = (props: BuildersProps) => {
  return (
    <ul className="flex flex-col justify-center mt-20 space-y-4 lg:space-x-4 lg:space-y-0 lg:flex-row">
      {builders.map((builder, i) => {
        return (
          <li key={i} className="w-1/3">
            <Feature
              title={builder.title}
              subtitle={builder.subtitle}
              sellingPoints={builder.sellingPoints}
              icon={builder.icon}
              href={builder.href}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default Builders
