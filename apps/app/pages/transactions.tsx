import React, { useEffect, useState } from "react"
import { NextPageContext } from "next"
import { SidebarLayout } from "@perfolio/components/nav/layout/sidebar-layout/sidebar-layout"
import { requireUser } from "@perfolio/backend/api"
import { User } from "@perfolio/backend/user"
import { Table } from "@perfolio/components/table/table"
import { Simple } from "@perfolio/components/table/cells/simple/simple"
import { Icon } from "@perfolio/components/table/cells/icon/icon"
import { Button } from "@perfolio/components/table/cells/button/button"

const Row = ({ tx }: { tx: Transaction }) => {
  console.log({ tx })
  const [symbol, setSymbol] = useState<string>("")
  const [sector, setSector] = useState<string>("")

  const deleteTX = async (id: string): Promise<void> => {
    fetch("/api/transaction/delete", {
      method: "POST",
      body: JSON.stringify({
        transactionID: id,
      }),
    })
  }

  useEffect(() => {
    fetch(`/api/company/read?isin=${tx.asset.id}`)
      .then((res) => res.json())
      .then((json) => {
        setSector(json.sector)
        setSymbol(json.symbol.toUpperCase())
      })
  }, [tx.asset.id])
  return (
    <tr key={tx.asset.id}>
      <td className="text-left">
        <Icon
          label={symbol}
          content={sector}
          align="justify-start"
          icon={
            <img
              src={`https://storage.googleapis.com/iex/api/logos/${symbol}.png`}
              alt={`${symbol} logo`}
              width="64"
              height="64"
            />
          }
        />
      </td>
      <td className="text-right">
        <Simple label={tx.quantity} />
      </td>
      <td className="text-right">
        <Simple label={tx.value} />
      </td>
      <td className="text-right">
        <Simple label={tx.executedAt} />
      </td>
      <td>
        <Button label="Delete" onClick={() => deleteTX(tx.id)} />
      </td>
    </tr>
  )
}

const TransactionTable = ({
  transactions,
}: {
  transactions: Transaction[]
}) => {
  const columnNames = [
    "Asset",
    "Quantity",
    "Price per share",
    "Execution Time",
    "",
  ]
  const rows = transactions.map((tx) => {
    return <Row tx={tx} />
  })
  console.log({ rows })
  return <Table columnNames={columnNames} rows={rows} />
}

interface Transaction {
  id: string
  userID: string
  asset: {
    id: string
    type: string
  }
  quantity: number
  value: number
  executedAt: string
}

export interface TransactionsProps {
  user: User
}
export const Transactions = ({ user }: TransactionsProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  useEffect(() => {
    const url = "/api/transaction/read"
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTransactions(data))
  }, [])

  return (
    <SidebarLayout
      breadcrumbs={[
        { label: "Perfolio", href: "/" },
        { label: "Analysis", href: "/" },
        { label: "Transactions", href: "/transactions" },
      ]}
      user={user}
    >
      <div className="p-16">
        <h1 className="py-6 -mt-12 text-3xl font-medium text-gray-900">
          Your Transactions
        </h1>

        <TransactionTable transactions={transactions} />
      </div>
    </SidebarLayout>
  )
}

export default Transactions

export async function getServerSideProps(ctx: NextPageContext) {
  return {
    props: {
      user: await requireUser(ctx),
    },
  }
}
