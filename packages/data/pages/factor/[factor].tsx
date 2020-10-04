import React from "react"
import { SidebarLayout } from "@perfolio/components/nav/layout/sidebar-layout/sidebar-layout"
import { Link } from "@perfolio/components/clickable/link/link"
import fs from "fs"
import renderToString from "next-mdx-remote/render-to-string"
import hydrate from "next-mdx-remote/hydrate"
import matter from "gray-matter"
import path from "path"
import { menuContent } from "../../content/menu-content"


export interface FactorProps {
  source: string
  meta: { authors: string; publishYear: number; factor: string }
}

export const Factor = ({ source, meta }: FactorProps) => {
  const buttonStyles =
    "flex items-center space-x-2 md:text-lg text-base font-medium focus:outline-none hover:text-gray-700"

  return (
    <div>
      <SidebarLayout breadcrumbs={["data", "Factors", meta.factor]} menuContent={menuContent()}>
        <div className="p-16 prose-sm md:prose lg:prose-lg xl:prose-xl max-w-none">
          <div className="flex items-center space-x-4 text-sm font-medium text-gray-700">
            <span>{meta.authors}</span>
            <span>{meta.publishYear}</span>
          </div>
          {hydrate(source)}
        </div>
        <div className="flex items-center justify-center space-x-16">
          <p className="text-gray-800 md:text-lg">Access this data through our builders:</p>
          <Link
            textColor="text-gray-900"
            label="API"
            href="/builder/api"
            iconLeft={
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 code">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            }
          />
          <Link
            textColor="text-gray-900"
            label="File"
            href="/builder/file"
            iconLeft={
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 cloud-download">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                />
              </svg>
            }
          />
          <Link
            textColor="text-gray-900"
            label="Charts"
            href="/builder/chart"
            iconLeft={
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 chart-square-bar">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            }
          />
        </div>
      </SidebarLayout>
    </div>
  )
}

export default Factor

const factorDirectory = `${process.cwd()}/packages/content/src/lib/research/factor/`

export async function getStaticPaths() {
  const files = fs.readdirSync(factorDirectory)
  return {
    paths: files.map((f) => {
      return { params: { factor: path.basename(f, ".mdx") } }
    }),
    fallback: false, // See the "fallback" section below
  }
}
export async function getStaticProps({ params }) {
  const source = fs.readFileSync(path.join(factorDirectory, params.factor + ".mdx"))

  const { content, data } = matter(source)
  const mdxSource = await renderToString(content, { scope: data })
  return { props: { source: mdxSource, meta: data } }
}
