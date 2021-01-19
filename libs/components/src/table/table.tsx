import React from "react";
import { Header } from "./header/header";
import { Preview } from "./cells/preview/preview";

export interface TableProps {
  columnNames: string[];
  rows: React.ReactNode[];
}

export const Table = ({ columnNames, rows }: TableProps) => {
  console.log({rows})
  const usedRows =
    rows.length > 0
      ? rows
      : [1, 2, 3].map((_) => {
          return (
            <tr>
              {columnNames.map((_) => (
                <Preview />
              ))}
            </tr>
          );
        });
  return (
    <div className="flex flex-col ">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border border-gray-200 sm:rounded">
            <table className="min-w-full ">
              {<Header labels={columnNames} />}
              <tbody className="bg-white divide-y divide-gray-200">
                {usedRows}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
