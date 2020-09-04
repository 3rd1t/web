import React from "react"
import { MultiColumn } from "@perfolio/shared/nav"
import Content, { metadata } from "@perfolio/content/research/factor/3.mdx"
/* eslint-disable-next-line */
export interface ThreeProps {}

export const Three = (props: ThreeProps) => {
  return (
    <div>
      <MultiColumn breadcrumbs={["Research", "Factors", "Three"]}>
        <div className="p-16 prose-sm md:prose lg:prose-lg xl:prose-xl max-w-none">
          <div className="flex items-center space-x-4 text-sm font-medium text-gray-700">
            <span>{metadata.authors}</span>
            <span>{metadata.publishYear}</span>
          </div>
          <Content />
        </div>
      </MultiColumn>
    </div>
  )
}

export default Three
