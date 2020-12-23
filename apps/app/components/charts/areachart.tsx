import React from "react"
import Chart from "./chart";

export interface AreaChartProps {
  data: {
    time: Date;
    value: number;
  }[];
  width?: number;
  height?: number;
}

export const AreaChart = ({
  data,
  width = 1200,
  height = 500,
}: AreaChartProps) => {
  return (
    <div className="flex flex-col py-4 text-gray-900">
      {data.length > 0 ? (
        <Chart
          data={data}
          parentWidth={width * 0.6}
          parentHeight={height * 0.45}
        />
      ) : null}
    </div>
  );
};
