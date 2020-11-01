import React from "react"
import { NextPageContext } from "next"

import { SidebarLayout } from "@perfolio/components/nav/layout/sidebar-layout/sidebar-layout"
import { menuContent } from "../../content/menu-content"
import { auth0, requireUser } from "@perfolio/auth/auth0/auth0"

export interface AppProps {
  user: {
    nickname: string
  }
}

export const App = ({ user }: AppProps) => {
  return (
    <div>
      <SidebarLayout breadcrumbs={["WEHR", "FOLIO"]} menuContent={menuContent("factor")} user={user}>
        <div className="p-8 space-y-16">WEHRFOLIO WAS HERE</div>
      </SidebarLayout>
    </div>
  )
}

export default App

export async function getServerSideProps(ctx: NextPageContext) {
  const user = await requireUser(ctx)

  return {
    props: {
      user,
    },
  }
}
