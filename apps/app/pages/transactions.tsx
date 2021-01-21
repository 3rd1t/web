import React, { useEffect, useState } from "react"
import { NextPageContext } from "next"
import { SidebarLayout } from "@perfolio/components/nav/layout/sidebar-layout/sidebar-layout"
import { requireUser } from "@perfolio/backend/api"
import { User } from "@perfolio/backend/user"
import { Table } from "@perfolio/components/table/table"
import { Simple } from "@perfolio/components/table/cells/simple/simple"
import { Icon } from "@perfolio/components/table/cells/icon/icon"
import { Button } from "@perfolio/components/table/cells/button/button"
import { useSWR } from "@perfolio/util/swr"
const Row = ({ tx }: { tx: Transaction }) => {
  console.log({ tx })

  const deleteTX = async (id: string): Promise<void> => {
    fetch("/api/transaction/delete", {
      method: "POST",
      body: JSON.stringify({
        transactionID: id,
      }),
    })
  }
  const { data: company, error } = useSWR(
    `/api/companies/read?isin=${tx.asset.id}`,
  )
  if (error) {
    return null
  }
  if (!company) {
    return (
      <svg
        className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    )
  }
  return (
    <tr key={tx.asset.id}>
      <td className="text-left">
        <Icon
          label={company.symbol.toUpperCase()}
          content={company.name}
          align="justify-start"
          icon={
            <img
              src={`https://storage.googleapis.com/iex/api/logos/${company.symbol.toUpperCase()}.png`}
              alt={`${company.symbol} logo`}
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
      <td className="text-right">
        <Button
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          }
          color="text-pink-500 hover:text-pink-300"
          onClick={() => deleteTX(tx.id)}
        />
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
    const url = "/api/transactions/read"
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
