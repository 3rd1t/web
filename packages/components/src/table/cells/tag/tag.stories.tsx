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

export const warning = () => {
  const props: TagProps = {
    label: "Warning",
    color: "orange",
  }

  return <Tag label={props.label} color={props.color} />
}

export const info = () => {
  const props: TagProps = {
    label: "Info",
    color: "blue",
  }

  return <Tag label={props.label} color={props.color} />
}

export const error = () => {
  const props: TagProps = {
    label: "Error",
    color: "pink",
  }

  return <Tag label={props.label} color={props.color} />
}
