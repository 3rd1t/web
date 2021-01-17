import React from "react";
import { Item } from "./item/item";
/* eslint-disable-next-line */
export interface MenuProps {
  content?: {
    title: React.ReactNode;
    items: React.ReactNode[];
  }[];
}

export const Menu = ({ content }: MenuProps) => {
  return (
    <div className="flex flex-col justify-between min-h-screen px-4 py-4 ml-20 bg-white border-r border-gray-300">
      {content ? (
        <div className="flex flex-col space-y-16">
          {content.map((c, i) => {
            return (
              <div key={i}>
                {c.title}

                {c.items.map((item, key) => {
                  return <div key={key}>{item}</div>;
                })}
              </div>
            );
          })}
        </div>
      ) : null}
      <div className="pt-3 border-t border-gray-300">
        <Item
          label="Request feature"
          href="mailto:request@perfol.io"
          icon={
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-lightBlue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default Menu;
