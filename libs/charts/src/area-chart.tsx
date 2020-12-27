import React from "react";
import { useRecoilValue } from "recoil";
import { curveMonotoneX } from "@visx/curve";
import {
  AnimatedAreaSeries,
  XYChart,
  AnimatedAxis,
  buildChartTheme,
  Tooltip,
} from "@visx/xychart";
import { LinearGradient } from "@visx/gradient";
import { formatDate, formatDateWithYear } from "./utils/formatDate";
import formatValue from "./utils/formatValue";
import { chartRangeState } from "@perfolio/components/rangepicker";
import { format } from "path";

export interface Datum {
  time: Date;
  value: number;
}

// accessors
const getX = (d: Datum) => new Date(d.time);
const getY = (d: Datum) => d.value;

export type AreaChartProps = {
  data: Datum[];
};

const theme = buildChartTheme({
  backgroundColor: "transparent", // used by Tooltip, Annotation
  colors: ["#5B21B6"], // categorical colors, mapped to series via `dataKey`s
  tickLength: 8,
  gridColor: "transparent",
  gridColorDark: "transparent",
});

export const AreaChart = ({ data }: AreaChartProps) => {
  return (
    <XYChart
      theme={theme}
      height={300}
      xScale={{ type: "band" }}
      yScale={{ type: "linear" }}
    >
      <LinearGradient
        id="fill"
        from="#5B21B6"
        to="#5B21B6"
        fromOpacity={0.2}
        toOpacity={0}
      />
      <AnimatedAxis
        tickFormat={
          Date.now() - useRecoilValue(chartRangeState).startTime >
          1.2 * 1000 * 60 * 60 * 24 * 365
            ? formatDateWithYear
            : formatDate
        }
        key="time"
        orientation="bottom"
        numTicks={3}
        animationTrajectory="center"
      />
      <AnimatedAxis
        key="Total worth"
        orientation="right"
        numTicks={3}
        animationTrajectory="center"
        tickFormat={(value) => `$${value}`}
      />
      <AnimatedAreaSeries
        dataKey="total"
        data={data}
        xAccessor={getX}
        yAccessor={getY}
        fill="url(#fill)"
        curve={curveMonotoneX}
      />

      <Tooltip<Datum>
        snapTooltipToDatumX
        snapTooltipToDatumY
        showHorizontalCrosshair={true}
        showVerticalCrosshair
        showDatumGlyph
        verticalCrosshairStyle={{ color: "#ff0000" }}
        renderTooltip={({ tooltipData, colorScale }) => (
          <div className="flex flex-col p-3 -m-2 border border-gray-300 shadow-sm bg-gray-50 ">
            <span className="font-normal text-gray-800">
              {formatDateWithYear(getX(tooltipData?.nearestDatum?.datum))}
            </span>
            <span className="text-xl text-gray-900">
              {formatValue(tooltipData.nearestDatum.datum.value)}
            </span>
          </div>
        )}
      />
    </XYChart>
  );
};

export default AreaChart;
