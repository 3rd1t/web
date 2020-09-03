import React from "react"

/* eslint-disable-next-line */
export interface BreadcrumbsProps {
  path: string[]
}

export const Breadcrumbs = ({ path }: BreadcrumbsProps) => {
  const targetStyle = "font-medium text-gray-900 text-research-500"
  const pathStyle = "text-gray-700"

  return path ? (
    <div className="flex items-center space-x-2">
      {path.map((s, i) => {
        return (
          <>
            {i > 0 ? (
              <li key={i} className="font-thin text-gray-600">
                /
              </li>
            ) : null}
            <li key={s} className={`capitalize ${i < path.length - 1 ? pathStyle : targetStyle}`}>
              {s}
            </li>
          </>
        )
      })}
    </div>
  ) : null
}

export default Breadcrumbs
{
  /* <span>Perfolio</span>
<span className="font-thin"> / </span>
<span>Research</span>
<span className="font-thin"> / </span>
<span className="font-medium text-gray-900">CSV</span> */
}
