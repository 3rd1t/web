import React from "react"

/* eslint-disable-next-line */
export interface BreadcrumbsProps {
  path: string[]
}

export const Breadcrumbs = ({ path }: BreadcrumbsProps) => {
  const targetStyle = "font-medium text-gray-900 text-research-500"
  const pathStyle = "text-gray-700"

  const divider =  <span className="font-thin text-gray-600">/</span>

  const toBreadcrumbs = (path): React.ReactNode[] => {
      const breadcrumbs: React.ReactNode[] = []

      for(let i = 0; i <path.length; i++) {
        if (i > 0) {
          breadcrumbs.push(divider)
        }
        breadcrumbs.push(<span className={i < path.length - 1 ? pathStyle : targetStyle}>{path[i]}</span>)
      };

      return breadcrumbs
  }


  return path ? (
    <div className="flex items-center space-x-2">
      {toBreadcrumbs(path).map((s, i) => {
        return (
          <li key={i}>{s}</li>
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
