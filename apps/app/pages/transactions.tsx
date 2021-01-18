import React, { useEffect, useState } from "react";
import { NextPageContext } from "next";
import { SidebarLayout } from "@perfolio/components/nav/layout/sidebar-layout/sidebar-layout";
import { Title } from "@perfolio/components/nav/sidebar/tiered-sidebar/menu/title/title";
import { Item } from "@perfolio/components/nav/sidebar/tiered-sidebar/menu/item/item";
import { useRouter } from "next/router";
import axios from "axios";
import { Button } from "@perfolio/components/clickable/button/button";
import getConfig from "next/config";
import { requireUser, getAccessToken } from "@perfolio/auth/auth0";
import { SimpleTable } from "@perfolio/components/table/builder/builder";
import { Table } from "@perfolio/components/table/table";
import { Simple } from "@perfolio/components/table/cells/simple/simple";
import { Icon } from "@perfolio/components/table/cells/icon/icon";
import Image from "next/image";
import useSWR from "swr";
async function GET(url: string): Promise<any> {
  return await fetch(url, { mode: "no-cors" })
    .then((r) => {
      return r.json();
    })
    .catch((err) => console.error(err));
}

const TransactionTable = (
  apiAddr: string,
  accessToken: string
): React.ReactNode => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    const url = `${apiAddr}/v1/transaction?token=${accessToken}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, [accessToken, apiAddr]);

  const columnNames = [
    "Asset",
    "Quantity",
    "Price per share",
    "Execution Time",
  ];

  const cells = transactions.map((row) => {
    return [
      <Icon
        label={row.asset.id.toUpperCase()}
        content="description"
        icon={
          <img
            src={`https://storage.googleapis.com/iex/api/logos/${row.asset.id.toUpperCase()}.png`}
            alt={`${row.asset.id} logo`}
            width="64"
            height="64"
          />
        }
      />,
      <Simple label={row.quantity} />,
      <Simple label={row.value} />,
      <Simple label={row.executedAt} />,
    ];
  });

  return <Table columnNames={columnNames} cells={cells} />;
};

export interface TransactionsProps {
  user: {
    nickname: string;
  };
  apiAddr: string;
  accessToken: string;
}
interface Transaction {
  id: string;
  userID: string;
  asset: {
    id: string;
    type: string;
  };
  quantity: number;
  value: number;
  executedAt: string;
}

export const Transactions = ({
  user,
  apiAddr,
  accessToken,
}: TransactionsProps) => {
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

        {TransactionTable(apiAddr, accessToken)}
      </div>
    </SidebarLayout>
  );
};

export default Transactions;

export async function getServerSideProps(ctx: NextPageContext) {
  const { apiAddr } = getConfig().serverRuntimeConfig;
  const user = await requireUser(ctx);

  const accessToken = await getAccessToken(ctx.req, ctx.res);

  return {
    props: {
      user,
      accessToken,
      apiAddr,
    },
  };
}
