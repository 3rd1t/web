import React from "react"
import { MultiColumn } from "@perfolio/shared/nav"
import fs from "fs"
import renderToString from "next-mdx-remote/render-to-string"
import hydrate from "next-mdx-remote/hydrate"
import matter from "gray-matter"
import path from "path"

export interface FactorProps {
  source: string
  meta: { authors: string; publishYear: number, factor: string }
}

export const Factor = ({ source, meta }: FactorProps) => {
  return (
    <div>
      <MultiColumn breadcrumbs={["Research", "Factors", meta.factor]}>
        <div className="p-16 prose-sm md:prose lg:prose-lg xl:prose-xl max-w-none">
          <div className="flex items-center space-x-4 text-sm font-medium text-gray-700">
            <span>{meta.authors}</span>
            <span>{meta.publishYear}</span>
          </div>
          {hydrate(source)}
        </div>
      </MultiColumn>
    </div>
  )
}

export default Factor

export async function getStaticPaths() {
  const files = fs.readdirSync(`${process.cwd()}/packages/content/src/lib/research/factor/`)
  return {
    paths: files.map((f) => {
      return { params: { factor: path.basename(f, ".mdx") } }
    }),
    fallback: false, // See the "fallback" section below
  }
}
export async function getStaticProps({ params }) {
  const source = fs.readFileSync(`${process.cwd()}/packages/content/src/lib/research/factor/${params.factor}.mdx`)

  const { content, data } = matter(source)
  const mdxSource = await renderToString(content, { scope: data })
  return { props: { source: mdxSource, meta: data } }
}
