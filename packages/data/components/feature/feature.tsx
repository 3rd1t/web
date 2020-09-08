import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
/* eslint-disable-next-line */
export interface FeatureProps {
  title: string
  subtitle: string
  sellingPoints: string[]
  icon: React.ReactNode
  href: string
}

export const Feature = ({ title, subtitle, sellingPoints, icon, href }: FeatureProps) => {
  return (
    <motion.div className="flex flex-col space-y-4 overflow-hidden duration-100 transform bg-white border rounded-md lg:hover:scale-105 hover:shadow-xl hover:border-2 border-data-500">
      <div className="flex flex-col items-center justify-between p-4">
        <h1 className="text-xl font-semibold tracking-wide text-center text-carbon-900">{title}</h1>
        <p className="text-gray-700">{subtitle}</p>
      </div>
      <Link href={href}>
        <a className="w-16 h-16 mx-auto duration-100 transform text-data-500 hover:scale-105 hover:text-data-700 ">
          {icon}
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-4 bg-gray-100 lg:items-start">
        <ul className="space-y-3 text-gray-800">
          {sellingPoints.map((point, key) => {
            return (
              <li className="flex items-center space-x-3" key={key}>
                <svg className="w-5 h-5 text-data-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{point}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </motion.div>
  )
}

export default Feature
