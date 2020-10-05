import React from "react"
import { Item } from "@perfolio/components/nav/sidebar/tiered-sidebar/menu/item/item"
import { Title } from "@perfolio/components/nav/sidebar/tiered-sidebar/menu/title/title"

export const menuContent = (
  area: string,
): {
  title: React.ReactNode
  items: React.ReactNode[]
}[] => {
  if (!area) {
    throw new Error("area must be defined")
  }

  return [
    {
      title: <Title label="Builder" />,
      items: [
        <Item
          label="API"
          href={`/${area}/api`}
          icon={
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 code">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          }
        />,
        <Item
          label="File Download"
          href={`/${area}/file`}
          icon={
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 cloud-download">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
              />
            </svg>
          }
        />,
        <Item
          label="Charts"
          href={`/${area}/chart`}
          icon={
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 chart-square-bar">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          }
          tag="coming soon"
        />,
      ],
    },
    {
      title: <Title label="Factor Models" />,
      items: [
        <Item
          tag="WIP"
          label="Quickstart"
          href="/notImlemented"
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          }
        />,
        <Item
          tag="WIP"
          label="Example USA"
          href="/notImplemented"
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          }
        />,
      ],
    },
    {
      title: <Title label="Learn more" />,
      items: [
        <Item
          label="Documentation"
          href="https://docs.perfol.io"
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          }
        />,
      ],
    },
  ]
}
