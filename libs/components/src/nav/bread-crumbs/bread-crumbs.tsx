import React from "react";
/* eslint-disable-next-line */
export interface BreadcrumbsProps {
  path: {label:string,href:string}[];
}

export const Breadcrumbs = ({ path }: BreadcrumbsProps) => {
  const targetStyle = "font-medium text-purple-900";
  const pathStyle = "text-gray-700";

  const divider = <span className="font-thin text-gray-700">/</span>;

  const toBreadcrumbs = (path: {label:string,href:string}[]): React.ReactNode[] => {
    const breadcrumbs: React.ReactNode[] = [];

    for (let i = 0; i < path.length; i++) {
      if (i > 0) {
        breadcrumbs.push(divider);
      }
      breadcrumbs.push(
          <a href={path[i].href} className={i < path.length - 1 ? pathStyle : targetStyle}> 
          {path[i].label}
          </a>
      );
    }

    return breadcrumbs;
  };

  return path ? (
    <div className="flex items-center space-x-2">
      {toBreadcrumbs(path).map((s, i) => {
        return <span key={i}>{s}</span>;
      })}
    </div>
  ) : null;
};

export default Breadcrumbs;
