import React from "react"
import { Tooltip } from '@visx/tooltip';

export const Tooltips = ({ yTop, yLeft, yLabel, xTop, xLeft, xLabel }) => {
  return (
    <div>
      <Tooltip
        top={xTop}
        left={xLeft}
        unstyled={true}
        className="bg-red-500"
        style={{
          transform: 'translateX(-50%)'
        }}
      >
        {xLabel}
      </Tooltip>
      <Tooltip
        top={yTop}
        left={yLeft}
        style={{
          background: "linear-gradient(to top, #312E81, #5B21B6)", // indigo-700
          color: 'white'
        }}
      >
        {yLabel}
      </Tooltip>
    </div>
  );
};

export default Tooltips;
