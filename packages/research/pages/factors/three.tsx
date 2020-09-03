import React from "react"
import { MultiColumn } from "@perfolio/shared/nav"
import { Builder } from "@perfolio/urlbuilder"
/* eslint-disable-next-line */
export interface ThreeProps {}

export const Three = (props: ThreeProps) => {
  return (
    <div>
      <MultiColumn breadcrumbs={["research", "factors", "three"]}>
        <div className="p-16 mx-auto prose-sm md:prose lg:prose-lg max-w-none">
          <h1>Three factor model by Fama & French (1993)</h1>
          <div className="flex items-center justify-between space-x-4">
            <div className="w-3/5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel lorem nisl. In tempor facilisis
                lorem vel pretium. Vivamus tincidunt imperdiet posuere. Fusce sodales cursus nisl et ultrices.
                Pellentesque auctor massa ornare urna egestas maximus. Aliquam nec mollis eros. Phasellus consectetur
                velit vel metus consectetur tincidunt. Proin vel turpis lobortis, tempus turpis sed, ultricies felis.
                Cras accumsan mi lectus, eget tincidunt risus ultricies sit amet. Sed interdum elementum fringilla.
              </p>
            </div>

            <div className="w-2/5">
              <img src="https://via.placeholder.com/500x300" alt="Placeholder for a chart"></img>
            </div>
          </div>
        </div>
        <div>
          <Builder></Builder>
        </div>
      </MultiColumn>
    </div>
  )
}

export default Three
