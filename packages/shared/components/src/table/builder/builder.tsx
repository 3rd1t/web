import { Table } from "../table"
import { Simple } from "../cells/simple/simple"
import React from "react"
export type Row = Record<string, string | number>

/**
 * Checks for equality of two string arrays, ignoring their order.
 * @param a - string array A
 * @param b - string array B
 * @returns true if both arrays contain the same strings
 */
export const isEqual = (a: string[], b: string[]): boolean => {
  if (a.length !== b.length) {
    return false
  }
  const aSorted = a.sort()
  const bSorted = b.sort()
  for (let i = 0; i < a.length; i++) {
    if (aSorted[i] !== bSorted[i]) {
      return false
    }
  }
  return true
}

/**
 * validateFields ensure every row has the same field names.
 *
 * @param rows - Json array of fields
 * @returns True if all rows have the same field names
 */
export function validateFields(rows: Row[]): boolean {
  if (rows.length === 0) {
    return false
  }

  const firstKeys = Object.keys(rows[0])
  if (firstKeys.length === 0) {
    return false
  }

  if (rows.length === 1) {
    return true
  }
  for (let i = 1; i < rows.length; i++) {
    const compareKeys = Object.keys(rows[i])
    if (!isEqual(firstKeys, compareKeys)) {
      return false
    }
  }
  return true
}

export const SimpleTable = (rows: Row[]): React.ReactElement => {
  if (rows.length === 0) {
    return <Table columnNames={[]} cells={[]} />
  }
  if (!validateFields(rows)) {
    throw new Error("rows do not have the same field names")
  }

  const columnNames = Object.keys(rows[0])

  const simpleCells = rows.map((row) => columnNames.map((name) => <Simple label={row[name]} />))

  return <Table columnNames={columnNames} cells={simpleCells} />
}
