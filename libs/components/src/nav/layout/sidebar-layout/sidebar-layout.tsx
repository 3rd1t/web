import React from "react";
import { Header } from "../../top/header/header";
import TieredSidebar from "../../sidebar/tiered-sidebar/tiered-sidebar";
import {Title} from "@perfolio/components/nav/sidebar/tiered-sidebar/menu/title/title"
import {Item} from "@perfolio/components/nav/sidebar/tiered-sidebar/menu/item/item"

/* eslint-disable-next-line */
export interface SidebarLayoutProps {
  children: React.ReactNode;
  breadcrumbs?: {label: string, href: string}[];
  user: {
    nickname: string;
  };
}
const menuContent: {
  title: React.ReactNode;
  items: React.ReactNode[];
}[]= [
  {
    title: <Title label="Add Transactions" />,
    items: [
      <Item
        href=""
        label="Upload statement"
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
      <Item
        label="Add manually"
        href="/app/add-transaction"
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        }
      />,
    ],
  },
]
export const SidebarLayout = ({
  children,
  breadcrumbs,
  user,
}: SidebarLayoutProps) => {
  return (
    <div className="flex">
      <div>
        <div className="fixed top-0">
          <TieredSidebar menuContent={menuContent} />
        </div>
      </div>
      <div className="w-full min-h-screen pl-80">
        <div className="fixed top-0 w-full bg-white border-b border-gray-300">
          <div className="w-full">
            <Header breadcrumbs={breadcrumbs} user={user}></Header>
          </div>
        </div>
        <main className="min-h-screen pt-20 overflow-y-auto bg-warmGray-50">
          <div className="border-t border-gray-300 ">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default SidebarLayout;
