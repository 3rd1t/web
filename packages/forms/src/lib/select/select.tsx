import React, { useState } from "react"
import { motion, AnimateSharedLayout } from "framer-motion"
/* eslint-disable-next-line */
export interface SelectProps {}

const Option = ({ label }) => {
  return <input type="radio"></input>
}

export const Select = (props: SelectProps) => {
  return (
    <div>
      <Option label="CSV" />
      <Option label="CSV" />
      <Option label="CSV" />
      <Option label="CSV" />
    </div>
  )
}

export default Select
