import React from "react"
import { MultiColumn } from "@perfolio/shared/nav"
import { Builder } from "@perfolio/urlbuilder"
/* eslint-disable-next-line */
export interface CsvProps {}

export const Csv = (props: CsvProps) => {
  return (
    <div>
      <MultiColumn>
        <Builder></Builder>
      </MultiColumn>
    </div>
  )
}

export default Csv
