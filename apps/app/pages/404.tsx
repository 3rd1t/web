import React from "react"
import { SidebarLayout } from "@perfolio/components/nav/layout/sidebar-layout/sidebar-layout";
import { Section } from "@perfolio/components/layout/section/section"

import { NextPageContext } from "next";


export  interface NotFound404Props{
    user: {
        nickname: string
    }
}

export const NotFound404 = ({user}: NotFound404Props) => {
  return (
    <SidebarLayout
      breadcrumbs={[
        {label: "Lost", href: "/"},
        { label: "In", href: "/" },
        { label: "Space", href: "/" },
      ]}
      
      user={{nickname: "Not Found"}}
    >
    <Section>
        <h1 className="flex items-center justify-center mt-24 text-gray-800">
          <span className="p-3 px-8 py-4 font-black text-7xl text-gradient bg-gradient-to-tr from-red-600 to-amber-500">404</span>
        </h1>
        <p className="mt-8 text-3xl font-thin text-center text-gray-800">
          Just like guarantees of future returns, this page does not exist.
        </p>
    </Section>

    </SidebarLayout>
  )
}

export default NotFound404
