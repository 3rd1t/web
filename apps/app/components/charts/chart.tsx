import React, { useRef, useMemo } from "react";
import { Group } from "@visx/group";
import { AreaClosed, LinePath, Bar } from "@visx/shape";
import { withParentSize } from "@visx/responsive";
import { scaleTime, scaleLinear } from "@visx/scale";
import { LinearGradient } from "@visx/gradient";
import { PatternLines } from "@visx/pattern";
import { AxisBottom, AxisRight } from "@visx/axis";
import { curveNatural, curveMonotoneX } from "@visx/curve";
import { withTooltip } from "@visx/tooltip";
import { localPoint } from "@visx/event";
import { bisector } from "d3-array";

import Tooltips from "./tooltips";
import HoverLine from "./hoverline";
import formatPrice from "./utils/formatPrice";
import formatDate from "./utils/formatDate";
import { defaultMaxListeners } from "stream";

interface Datum {
  time: Date;
  value: number;
}
export interface ChartProps {
  data: Datum[];
  parentWidth?: number;
  parentHeight?: number;
  margin?: Record<string, number>;
  tooltipData?: number;
  tooltipLeft?: number;
  tooltipTop?: number;
  showTooltip?: (x: any) => void;
  hideTooltip?: () => void;
}

export const Chart = ({
  data,
  parentWidth = 600,
  parentHeight = 400,
  margin = { top: 0, left: 0, right: 45, bottom: 45 },
  tooltipData,
  tooltipLeft,
  tooltipTop,
  showTooltip,
  hideTooltip,
}: ChartProps) => {
  const svgRef = useRef(null);
  const width = parentWidth - margin.left - margin.right;
  const height = parentHeight - margin.top - margin.bottom;

  const x = (d: Datum) => d.time;
  const y = (d: Datum) => d.value;
  const bisectDate = bisector<Datum, Date>((d) => x(d)).left;

  const firstPoint = data[0];
  const currentPoint = data[data.length - 1];
  const minPrice = Math.min(...data.map(y));
  const maxPrice = Math.max(...data.map(y));
  const maxData = [
    { time: x(firstPoint), value: maxPrice },
    { time: x(currentPoint), value: maxPrice },
  ];
  const minData = [
    { time: x(firstPoint), value: minPrice },
    { time: x(currentPoint), value: minPrice },
  ];

  const xScale = useMemo(
    () =>
      scaleTime({
        range: [0, width],
        domain: [x(firstPoint), x(currentPoint)],
      }),
    [width, margin.left, data]
  );
  const yScale = useMemo(
    () =>
      scaleLinear({
        range: [height, 0],
        domain: [minPrice, maxPrice],
      }),
    [margin.top, height, data]
  );

  return (
    <div>
      <svg ref={svgRef} width={parentWidth} height={parentHeight}>
        <LinearGradient
          id="fill"
          from="#5B21B6"
          to="#5B21B6"
          fromOpacity={0.1}
          toOpacity={0}
        />

        <Group top={margin.top} left={margin.left}>
          <AxisBottom
            scale={xScale}
            top={height}
            left={margin.left}
            numTicks={3}
            hideTicks
            hideAxisLine
          />
          <AxisRight
            scale={yScale}
            left={margin.left + width}
            numTicks={3}
            hideAxisLine
          />
          <AreaClosed<Datum>
            curve={curveMonotoneX}
            stroke="transparent"
            data={data}
            xScale={xScale}
            yScale={yScale}
            x={(d) => xScale(x(d))}
            y={(d) => yScale(y(d))}
            fill="url(#fill)"
          />
          <LinePath<Datum>
            curve={curveMonotoneX}
            data={data}
            yScale={yScale}
            xScale={xScale}
            x={(d) => xScale(x(d))}
            y={(d) => yScale(y(d))}
            stroke="#5B21B6"
            strokeWidth={1.5}
          />
          {/* Used to enable hover effects */}
          <Bar
            x={margin.left}
            y={margin.top}
            width={width}
            height={height - margin.bottom}
            fill="transparent"
            onMouseLeave={(data) => (event) => hideTooltip()}
            onMouseMove={(data) => (event) => {
              const { x: xPoint } = localPoint(svgRef.current, event);
              const x0 = xScale.invert(xPoint);
              const index = bisectDate(data, x0, 1);
              const d0 = data[index - 1];
              const d1 = data[index];
              const d = x0 - xScale(x(d0)) > xScale(x(d1)) - x0 ? d1 : d0;
              showTooltip({
                tooltipData: d,
                tooltipLeft: xScale(x(d)),
                tooltipTop: yScale(y(d)),
              });
            }}
          />
        </Group>
        {tooltipData ? (
          <HoverLine
            from={{
              x: tooltipLeft,
              y: yScale(y(maxData[0])),
            }}
            to={{
              x: tooltipLeft,
              y: yScale(y(minData[0])),
            }}
            tooltipLeft={tooltipLeft}
            tooltipTop={tooltipTop}
          />
        ) : null}
      </svg>
      {tooltipData ? (
        <Tooltips
          yTop={tooltipTop - 12}
          yLeft={tooltipLeft + 12}
          yLabel={formatPrice(y(tooltipData))}
          xTop={yScale(y(minData[0])) + 4}
          xLeft={tooltipLeft}
          xLabel={formatDate(x(tooltipData))}
        />
      ) : null}
    </div>
  );
};

export default withTooltip(Chart);
