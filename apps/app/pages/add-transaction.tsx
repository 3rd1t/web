import React, { useState } from "react";
import { NextPageContext } from "next";
import { SidebarLayout } from "@perfolio/components/nav/layout/sidebar-layout/sidebar-layout";
import { requireUser } from "@perfolio/auth/auth0";
import { Title } from "@perfolio/components/nav/sidebar/tiered-sidebar/menu/title/title";
import { Item } from "@perfolio/components/nav/sidebar/tiered-sidebar/menu/item/item";
import { useRouter } from "next/router";
export interface AddTransactionProps {
  user: {
    nickname: string;
  };
}
const Question = ({ label }: { label: string }) => {
  return <label className="text-lg font-medium text-gray-800">{label}</label>;
};

interface InputProps {
  type: string;
  label: string;
  placeholder?: string;
  value: string | number;
  disabled?: boolean;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}
const Input = ({
  type,
  label,
  placeholder,
  value,
  disabled,
  onChange,
}: InputProps) => {
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
            className="flex items-center justify-between w-full px-6 pt-5 pb-2 space-x-8 text-lg text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:bg-white ring-purple-700 focus:ring-1 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

interface Transaction {
  assetID: string;
  amount: number;
  executedAt: string;
}

export const AddTransaction = ({ user }: AddTransactionProps) => {
  const router = useRouter();
  const [createAnother, setCreateAnother] = useState(false);

  const [transaction, setTransaction] = useState<Transaction>({
    assetID: "",
    amount: 1,
    executedAt: new Date().toISOString().split(".")[0],
  });

  const updateTransaction = (key: string, value: number | string) => {
    setTransaction({
      ...transaction,
      [key]: value,
    });
  };

  const submit = () => {
    const cleanTransaction = {
      assetID: transaction.assetID,
      amount: transaction.amount.toString(),
      executedAt: Date.parse(transaction.executedAt).toString(),
    };
    const url =
      "/api/add-transaction?" +
      new URLSearchParams({ ...cleanTransaction }).toString();

    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));

    if (!createAnother) {
      router.back();
    }
  };

  return (
    <SidebarLayout
      breadcrumbs={["Perfolio", "Analysis", "Add Transaction"]}
      menuContent={[
        {
          title: <Title label="Add Transactions" />,
          items: [
            <Item
              label="Upload statement"
              href=""
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
                    d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              }
            />,
          ],
        },
      ]}
      user={user}
    >
      <div className="p-16">
        <div className="max-w-lg p-8 mx-auto bg-white border rounded">
          <h2 className="text-3xl font-medium">Add Transaction</h2>

          <p className="text-gray-600 ">
            Enter your transactions here, the price will be loaded
            automatically.
          </p>

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
                          amount:
                            (t === "buy" ? 1 : -1) *
                            Math.abs(transaction.amount),
                        })
                      }
                      className={`w-1/2 focus:outline-none flex items-center justify-between  p-4 space-x-8 border rounded-sm ${
                        (t === "buy" && transaction.amount >= 0) ||
                        (t === "sell" && transaction.amount < 0)
                          ? "border-purple-700 bg-purple-200"
                          : " border-gray-300"
                      }`}
                    >
                      <span
                        className={`${
                          (t === "buy" && transaction.amount >= 0) ||
                          (t === "sell" && transaction.amount < 0)
                            ? "border-4 border-purple-700 "
                            : "border border-gray-300 "
                        }  rounded-full w-4 h-4 `}
                      ></span>
                      <span className="text-gray-900 capitalize">{t}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="space-y-1">
              <Question
                label={`What did you ${
                  transaction.amount > 0 ? "buy" : "sell"
                }?`}
              />
              <Input
                type="text"
                label="Stock"
                value={transaction.assetID}
                onChange={(e) =>
                  setTransaction({
                    ...transaction,
                    assetID: e.currentTarget.value,
                  })
                }
              />
              <div className="flex items-center pt-3 space-x-4">
                <Input
                  type="number"
                  label="Shares"
                  value={transaction.amount}
                  onChange={(e) =>
                    setTransaction({
                      ...transaction,
                      amount: e.currentTarget.valueAsNumber,
                    })
                  }
                />
                <Input
                  type="number"
                  label="Price per share"
                  value=""
                  disabled
                />
              </div>
            </div>
            <div className="space-y-1">
              <Question
                label={`When did you ${
                  transaction.amount > 0 ? "buy" : "sell"
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
              <button
                onClick={submit}
                className="px-6 py-2 text-lg font-semibold text-purple-700 border border-purple-700 rounded-sm"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default AddTransaction;

export async function getServerSideProps(ctx: NextPageContext) {
  const user = await requireUser(ctx);

  return {
    props: {
      user,
    },
  };
}
