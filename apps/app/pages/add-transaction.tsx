import React, { useEffect, useState } from "react"
import { NextPageContext } from "next"
import { SidebarLayout } from "@perfolio/components/nav/layout/sidebar-layout/sidebar-layout"
import { requireUser } from "@perfolio/backend/api"
import { User } from "@perfolio/backend/user"
import { useRouter } from "next/router"
import axios from "axios"
import { Button } from "@perfolio/components/clickable/button/button"
import { Transition } from "@headlessui/react"
import { Icon } from "@perfolio/components/table/cells/icon/icon"
import useSWR from "swr"

const GET = async (url: string) => {
  const res = await fetch(url)
  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.")
    // Attach extra info to the error object.
    error.message = await res.json()
    throw error
  }
  return res.json()
}
const Company = ({ isin }: { isin: string }) => {
  const { data, error } = useSWR(`/api/get-company?isin=${isin}`, GET)
  console.log(data)

  if (error) {
    return null
  }
  if (!data) {
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
    <Icon
      label={data.symbol.toUpperCase()}
      content={data.name}
      align="justify-start"
      icon={
        <img
          src={`https://storage.googleapis.com/iex/api/logos/${data.symbol.toUpperCase()}.png`}
          alt={`${data.symbol} logo`}
          width="64"
          height="64"
        />
      }
    />
  )
}

interface ICompany {
  symbol: string
  sector: string
}
const Question = ({ label }: { label: string }) => {
  return <label className="text-lg font-medium text-gray-800">{label}</label>
}

interface InputProps {
  type: string
  label: string
  placeholder?: string
  value?: string | number
  disabled?: boolean
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
  validate: (value: string | number) => boolean
}
const Input = ({
  type,
  label,
  placeholder,
  value,
  disabled,
  onChange,
  validate,
}: InputProps) => {
  const isValid = validate(value)
  return (
    <div className="">
      <div className="space-y-1">
        <div className="relative">
          <span className="absolute top-0 left-0 pt-2 pl-6 text-xs text-gray-600 ">
            {label}
          </span>
          <input
            disabled={disabled}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`flex items-center justify-between w-full px-6 pt-5 pb-2 space-x-8 text-lg text-gray-900  ${
              isValid ? "border-gray-300 border" : "border-purple-300 border-2"
            } rounded-sm bg-gray-50 focus:bg-white ring-purple-700 focus:ring-1 focus:outline-none`}
          />
        </div>
      </div>
    </div>
  )
}

interface Transaction {
  assetID: string
  quantity: number
  value: number
  executedAt: string
}

export interface AddTransactionProps {
  user: User
}
export const AddTransaction = ({ user }: AddTransactionProps) => {
  const router = useRouter()
  const [createAnother, setCreateAnother] = useState(false)
  const [company, setCompany] = useState<ICompany>(null)
  const [transaction, setTransaction] = useState<Transaction>({
    assetID: "",
    quantity: 1,
    value: 0,
    executedAt: new Date().toISOString().split(".")[0],
  })
  useEffect(() => {
    const regex = new RegExp("([A-Z]{2}[a-zA-Z0-9]{10})")
    const isValid = regex.test(transaction.assetID)
    if (!isValid) {
      setCompany(null)
      return
    }
    fetch(`/api/get-company?isin=${transaction.assetID}`)
      .then((res) => res.json())
      .then((json) => {
        setCompany(json)
      })
  }, [transaction.assetID])

  const updateTransaction = (key: string, value: number | string) => {
    setTransaction({
      ...transaction,
      [key]: value,
    })
  }

  const submit = async () => {
    const url = "/api/add-transaction"
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        asset: {
          id: transaction.assetID,
          type: "SHARE",
        },
        quantity: transaction.quantity,
        value: transaction.value,
        executedAt: Date.parse(transaction.executedAt) / 1000,
      }),
    })

    if (!createAnother) {
      router.push("/transactions")
    }
  }

  return (
    <SidebarLayout
      breadcrumbs={[
        { label: "Perfolio", href: "/" },
        { label: "Analysis", href: "/" },
        { label: "Add Transaction", href: "/add-transaction" },
      ]}
      user={user}
    >
      <div className="p-16">
        <div className="max-w-lg p-8 mx-auto bg-white border rounded">
          <h2 className="text-3xl font-medium">Add Transaction</h2>

          <p className="text-gray-600 ">Enter your transactions here</p>

          <div className="mt-8 space-y-8">
            <div className="space-y-1">
              <Question label="Did you buy or sell?" />
              <div className="flex justify-center space-x-4">
                {["buy", "sell"].map((t) => {
                  return (
                    <button
                      onClick={() =>
                        setTransaction({
                          ...transaction,
                          quantity:
                            (t === "buy" ? 1 : -1) *
                            Math.abs(transaction.quantity),
                        })
                      }
                      className={`w-1/2 focus:outline-none flex items-center justify-between hover:bg-purple-100  p-4 space-x-8 border hover:border-purple-700 rounded-sm ${
                        (t === "buy" && transaction.quantity >= 0) ||
                        (t === "sell" && transaction.quantity < 0)
                          ? "border-purple-700 bg-purple-200"
                          : " border-gray-300"
                      }`}
                    >
                      <span
                        className={`${
                          (t === "buy" && transaction.quantity >= 0) ||
                          (t === "sell" && transaction.quantity < 0)
                            ? "border-4 border-purple-700"
                            : "border border-gray-300"
                        } rounded-full w-4 h-4 `}
                      ></span>
                      <span
                        className={`text-gray-900 capitalize ${
                          (t === "buy" && transaction.quantity >= 0) ||
                          (t === "sell" && transaction.quantity < 0)
                            ? "font-semibold"
                            : ""
                        }`}
                      >
                        {t}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
            <div className="space-y-1">
              <Question
                label={`What did you ${
                  transaction.quantity > 0 ? "buy" : "sell"
                }?`}
              />
              <div className="flex items-center w-full space-x-4">
                <div className={company == null ? "w-full" : "w-1/2"}>
                  <Input
                    type="text"
                    label="ISIN"
                    value={transaction.assetID}
                    onChange={(e) =>
                      setTransaction({
                        ...transaction,
                        assetID: e.currentTarget.value,
                      })
                    }
                    validate={(value: string) =>
                      RegExp("[A-Z]{2}[a-zA-Z0-9]{10}").test(value)
                    }
                  />
                </div>
                {company != null ? (
                  <div className="w-1/2 border border-gray-300 rounded-sm bg-gray-50">
                    <Company isin={transaction.assetID} />
                  </div>
                ) : null}
              </div>
              <div className="flex items-center justify-center pt-3 space-x-4">
                <Input
                  type="number"
                  label="Shares"
                  value={transaction.quantity}
                  onChange={(e) =>
                    setTransaction({
                      ...transaction,
                      quantity: e.currentTarget.valueAsNumber,
                    })
                  }
                  validate={(value: number) => value !== 0}
                />
                <Input
                  type="number"
                  label="Price per share"
                  value={transaction.value}
                  onChange={(e) =>
                    setTransaction({
                      ...transaction,
                      value: e.currentTarget.valueAsNumber,
                    })
                  }
                  validate={(value: number) => value > 0}
                />
              </div>
            </div>
            <div className="space-y-1">
              <Question
                label={`When did you ${
                  transaction.quantity > 0 ? "buy" : "sell"
                }?`}
              />
              <div className="w-full">
                <Input
                  type="datetime-local"
                  label="Executed at"
                  value={transaction.executedAt}
                  onChange={(e) =>
                    updateTransaction("executedAt", e.currentTarget.value)
                  }
                  validate={(value: string) => value !== ""}
                />
              </div>
            </div>
            <div className="flex items-center justify-end space-x-4">
              <div className="flex items-center space-x-2">
                <input
                  id="createAnother"
                  onChange={(e) => setCreateAnother(e.currentTarget.checked)}
                  checked={createAnother}
                  className="text-purple-700 border border-purple-700 rounded-sm focus:outline-none form-checkbox"
                  type="checkbox"
                ></input>
                <label htmlFor="createAnother" className="text-sm">
                  Create another
                </label>
              </div>
              <Button textColor="text-white" label="Add" onClick={submit} />
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  )
}

export default AddTransaction

export async function getServerSideProps(ctx: NextPageContext) {
  return {
    props: {
      user: await requireUser(ctx),
    },
  }
}
