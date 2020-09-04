import React from "react"
import { MultiColumn } from "@perfolio/shared/nav"
import { Builder } from "@perfolio/urlbuilder"
/* eslint-disable-next-line */
export interface CsvProps {}

export const Csv = (props: CsvProps) => {
  return (
    <div>
      <MultiColumn>
        <main className="">
          <div className="w-full p-8 bg-white">
            <h1 className="text-xl">API Builder</h1>
            <p className="text-gray-700">Build a custom url to get exactly the data you need.</p>
          </div>
          <div>
            <Builder></Builder>
          </div>
        </main>
      </MultiColumn>
    </div>
  )
}

export default Csv
