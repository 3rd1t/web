import React from "react"
import { CodeExamples, CodeExamplesProps } from "./code-examples"

export default {
  component: CodeExamples,
  title: "CodeExamples",
}

export const primary = () => {
  const props: CodeExamplesProps = {
    code: [
      {
        language: "python",
        snippet: `import requests

url = "https://api-beta.tgr22.net/v1"
params = { 
    "token": "zjGC6iUbbDXj9zoJqz7f", 
    "region": "Japan", 
    "model": "6", 
    "freq": "d", 
    "currency": "CNY", 
    "from": "2005-12-31", 
    "to": "2020-02-28", 
    "dropna": "0"
}

r = requests.get(url, params=params)

print(r.text)`,
      },
      {
        language: "r",
        snippet: `library(httr)
library(jsonlite)
call_api <- function(query) {
    url <- modify_url("https://api-beta.tgr22.net/v1",
    query = query)
    GET(url)
}
resp <- call_api(
    list(
        token="zjGC6iUbbDXj9zoJqz7f",
        region="Japan",
        model="6",
        freq="d",
        currency="CNY",
        from="2005-12-31",
        to="2020-02-28",
        dropna="0")
    )
cont <- fromJSON(
    content(
        resp,
        as="text",
        encoding="UTF-8"
    )
   )
test <- data.frame(cont)`,
      },
    ],
  }

  return <CodeExamples code={props.code} />
}
