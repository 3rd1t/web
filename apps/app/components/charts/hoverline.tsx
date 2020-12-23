import React from "react"
import { Line } from '@visx/shape';

export const Hoverline = ({ from, to, tooltipLeft, tooltipTop }) => {
  return (
    <g>
    
      <Line
        from={from}
        to={to}
        stroke="#312E81"
        strokeWidth={0.4}
        style={{ pointerEvents: 'none' }}
      />
      <circle
        cx={tooltipLeft}
        cy={tooltipTop}
        r={8}
        fill="#312E81"
        fillOpacity={0.2}
        style={{ pointerEvents: 'none' }}
      />
      <circle
        cx={tooltipLeft}
        cy={tooltipTop}
        r={4}
        fill="#5B21B6"
        fillOpacity={0.8}
        style={{ pointerEvents: 'none' }}
      />
    </g>
  );
};

export default Hoverline;
