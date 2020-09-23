import React from "react"
import { SimpleTable } from "./builder"
export default {
  title: "components/table/builder",
}

export const simpleTable = () => {
  const rows = [
    {
      period: "2019",
      mom: "-0.01770000",
    },
    {
      period: "2018",
      mom: "0.09850000",
    },
    {
      period: "2017",
      mom: "0.04440000",
    },
    {
      period: "2016",
      mom: "-0.21080000",
    },
    {
      period: "2015",
      mom: "0.23110000",
    },
    {
      period: "2014",
      mom: "0.01770000",
    },
    {
      period: "2013",
      mom: "0.07630000",
    },
    {
      period: "2012",
      mom: "0.01890000",
    },
    {
      period: "2011",
      mom: "0.07510000",
    },
    {
      period: "2010",
      mom: "0.06440000",
    },
    {
      period: "2009",
      mom: "-0.79720000",
    },
    {
      period: "2008",
      mom: "0.13850000",
    },
    {
      period: "2007",
      mom: "0.19520000",
    },
    {
      period: "2006",
      mom: "-0.06980000",
    },
    {
      period: "2005",
      mom: "0.17140000",
    },
    {
      period: "2004",
      mom: "-0.00430000",
    },
    {
      period: "2003",
      mom: "-0.20380000",
    },
    {
      period: "2002",
      mom: "0.21740000",
    },
    {
      period: "2001",
      mom: "0.04560000",
    },
    {
      period: "2000",
      mom: "0.16470000",
    },
    {
      period: "1999",
      mom: "0.40160000",
    },
    {
      period: "1998",
      mom: "0.21650000",
    },
    {
      period: "1997",
      mom: "0.13900000",
    },
    {
      period: "1996",
      mom: "0.07000000",
    },
    {
      period: "1995",
      mom: "0.16350000",
    },
    {
      period: "1994",
      mom: "0.02920000",
    },
  ]
  return SimpleTable(rows)
}
