import React from "react"

import { Collection } from "@perfolio/shared/types"
import Category from "../category/category"
export interface MenuProps {
  collections: Collection[]
}

export const Menu = ({ collections }: MenuProps) => {
  return (
    <ul className="space-y-4 bg-gray-100">
      {collections.map((collection) => {
        return (
          <li key={collection.name}>
            <Category collection={collection}></Category>
          </li>
        )
      })}
    </ul>
  )
}

export default Menu
