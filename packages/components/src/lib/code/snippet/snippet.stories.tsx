import { text } from "@storybook/addon-knobs"
import React from "react"
import { Snippet, SnippetProps } from "./snippet"

export default {
  component: Snippet,
  title: "Snippet",
}

export const primary = () => {
  const props: SnippetProps = {
    language: text("language", ""),
    children: text("children", ""),
  }

  return <Snippet language={props.language} children={props.children} />
}
