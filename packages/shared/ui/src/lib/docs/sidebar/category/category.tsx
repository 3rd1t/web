import React from "react"
import { Collection } from "@perfolio/shared/types"
import { motion } from "framer-motion"
import { DocumentLink } from "../link/link"
import { useRouter } from "next/router"
export interface CategoryProps {
  collection: Collection
}

export const Category = ({ collection }: CategoryProps) => {
  const router = useRouter()

  const active = router && collection.documents.map((document) => document.href).includes(router.pathname)

  return (
    <div className={`px-4 border-l-4 ${active ? "border-docs-700" : "border-transparent"}`}>
      <span className="text-sm font-bold tracking-wide text-gray-700 uppercase lg:text-xs">{collection.name}</span>
      <motion.ul layout className="pl-4">
        {collection.documents &&
          collection.documents.map((document) => {
            return (
              <li className="" key={document.name}>
                <DocumentLink href={document.href} label={document.name}></DocumentLink>
              </li>
            )
          })}
      </motion.ul>
    </div>
  )
}

export default Category
