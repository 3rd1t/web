import React, { useState } from "react";

export const RangePicker = () => {
  const intervals = ["1W", "1M", "3M", "1Y", "YTD", "MAX"];
  const [selected, setSelected] = useState(intervals[0]);

  return (
    <ul className="inline-flex border border-gray-300 divide-x divide-gray-300 rounded">
      {intervals.map((interval, i) => (
        <li key={interval}>
          <button
            onClick={() => setSelected(interval)}
            className={`px-4 py-2 text-sm font-medium  transition duration-150 ease-in-out  bg-gradient-to-t hover:text-gray-100 hover:from-violet-800 hover:to-indigo-700 focus:outline-none
            ${
              interval === selected
                ? " bg-gradient-to-t from-violet-800 to-indigo-700 text-gray-100"
                : "bg-white text-gray-700"
            } 
            ${i === 0 ? "rounded-l" : ""}
            ${i === intervals.length - 1 ? "rounded-r" : ""}
            `}
          >
            {interval}
          </button>
        </li>
      ))}
    </ul>
  );
};
