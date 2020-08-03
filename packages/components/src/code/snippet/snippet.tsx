import React from "react"
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter"
import style from "./style"
/* eslint-disable-next-line */
export interface SnippetProps {
  language: string
  children: string
}

export const Snippet = (props: SnippetProps) => {
  return (
    <SyntaxHighlighter data-testid="syntaxHighlighter" language={props.language} style={style} className="font-mono">
      {props.children}
    </SyntaxHighlighter>
  )
}

export default Snippet
