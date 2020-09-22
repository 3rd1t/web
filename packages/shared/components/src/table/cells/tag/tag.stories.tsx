import React from "react"
import { Tag, TagProps } from "./tag"

export default {
  component: Tag,
  title: "components/table/cell/Tag",
}

export const primary = () => {
  const props: TagProps = {
    label: "Active",
    color: "green",
  }

  return <Tag label={props.label} color={props.color} />
}

export const withIcon = () => {
  const props: TagProps = {
    label: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
        />
      </svg>
    ),
    color: "purple",
  }

  return <Tag label={props.label} color={props.color} />
}
