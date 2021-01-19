import React, { useEffect, useState, useMemo } from "react";
import { NextPageContext } from "next";
import { SidebarLayout } from "@perfolio/components/nav/layout/sidebar-layout/sidebar-layout";
import { Table } from "@perfolio/components/table/table";
import { Tag } from "@perfolio/components/table/cells/tag/tag";
import { Multiline } from "@perfolio/components/table/cells/multiline/multiline";
import { RangePicker, chartRangeState } from "@perfolio/components/rangepicker";
import AreaChart from "@perfolio/charts/area-chart";
import { selector, atom, useRecoilValue, useRecoilState } from "recoil";
import aapl from "@perfolio/charts/data";
import getConfig from "next/config";
import { DonutChart } from "@perfolio/charts/donut-chart";
import axios from "axios";
import { getAPI, ApiProps } from "@perfolio/backend/api"

interface StatsProps {
  label: string;
  change: number;
  value: number;
  addSign?: boolean;
  unit: string;
}

const Stats = ({ label, change, value, addSign, unit = "$" }: StatsProps) => {
  return (
    <div className="text-gray-900">
      <div className="flex items-center justify-between space-x-1">
        <span className="text-lg text-gray-600 ">{label}</span>
        <span
          className={`px-2 rounded-sm ${
            change >= 0
              ? "text-emerald-800 bg-emerald-100"
              : "text-red-800 bg-red-100"
          }`}
        >
          {`${change >= 0 ? "+" : "-"}${formatValue(change)}`}%
        </span>
      </div>
      <div className="text-4xl font-semibold">
        {`${addSign ? (value >= 0 ? "+" : "") : ""}${unit}${formatValue(
          value
        )}`}
      </div>
    </div>
  );
};

const formatValue = (v: number): string => {
  return v.toLocaleString("en-US", {
    minimumIntegerDigits: 1,
    useGrouping: true,
    maximumFractionDigits: 2,
  });
};

interface Datum {
  time: Date;
  value: number;
}

const seriesState = atom<Datum[]>({
  key: "seriesState",
  default: [],
});

const selectedSeriesState = selector({
  key: "selectedSeriesState",
  get: ({ get }) => {
    const startTime = get(chartRangeState).startTime;
    return get(seriesState).filter((d) => d.time.getTime() >= startTime);
  },
});

const firstValueState = selector({
  key: "firstValue",
  get: ({ get }) => {
    return get(selectedSeriesState)[0].value || 0;
  },
});

const lastValueState = selector({
  key: "lastValue",
  get: ({ get }) => {
    const selectedSeries = get(selectedSeriesState);
    return selectedSeries[selectedSeries.length - 1]?.value || 0;
  },
});

const intervalNameState = selector({
  key: "intervalNameState",
  get: ({ get }) => {
    const label = get(chartRangeState).label;
    switch (label) {
      case "1W":
        return "Last Week";
        case "1M":
          return "Last Month";
          case "3M":
            return "Three Months";
            case "1Y":
              return "Last Year";
              case "YTD":
                return "Current Year";
                case "MAX":
                  return "All time";
                }
              },
            });
            const totalChangeState = selector({
              key: "totalChangeState",
              get: ({ get }) => {
                const series = get(seriesState);
                
                if (series.length === 0) {
                  return { absolute: 0, relative: 0 };
                }
                
    return {
      absolute: series[series.length - 1].value - series[0].value,
      relative: series[series.length - 1].value / series[0].value - 1,
    };
  },
});

const localChangeState = selector({
  key: "localChangeState",
  get: ({ get }) => {
    const series = get(selectedSeriesState);
    if (series.length === 0) {
      return { absolute: 0, relative: 0 };
    }
    return {
      absolute: series[series.length - 1].value - series[0].value,
      relative: series[series.length - 1].value / series[0].value - 1,
    };
  },
});
export type IndexProps = ApiProps
export const Index = ({ user }: IndexProps) => {
  const [_, setSeries] = useRecoilState(seriesState);
  useEffect(() => {
    setSeries(
      aapl.map((d) => {
        return { time: new Date(d.date), value: d.close };
      })
      );
  }, [setSeries]);
  const selectedSeries = useRecoilValue(selectedSeriesState);

  const totalChange = useRecoilValue(totalChangeState);
  const localChange = useRecoilValue(localChangeState);

  return (
    <SidebarLayout
      breadcrumbs={[
        { label: "Perfolio", href: "/" },
        { label: "Analytics", href: "/" },
        { label: "Dashboard", href: "/" },
      ]}
      user={user}
    >
      <div className="p-8 space-y-16">
        <div className="flex ">
          <div className="flex-grow">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-between space-x-8 divide-x divide-gray-300">
                <Stats
                  label="Investment"
                  value={useRecoilValue(lastValueState)}
                  change={totalChange.relative * 100}
                  unit="$"
                />
                <div className="pl-8">
                  <Stats
                    label={useRecoilValue(intervalNameState)}
                    value={localChange.absolute}
                    addSign
                    change={localChange.relative * 100}
                    unit="$"
                  />
                </div>
              </div>
              <RangePicker />
            </div>
            <AreaChart data={selectedSeries} />
          </div>
          <div className="flex-grow">
            <div className="h-full m-8">
              {<DonutChart width={400} height={400} />}
            </div>
          </div>
        </div>

        <Table
          columnNames={["Stock", "Shares", "Since Buy (relative)"]}
          cells={[
            [
              <Multiline title="MSFT" content="Microsoft Corporation" />,
              <Multiline title={4} content="@240.11" />,

              <Tag label="-0.2%" color="orange" />,
            ],
            [
              <Multiline title="TSLA" content="Tesla" />,
              <Multiline title={1} content="@9000.1" />,
              <Tag label="+2.1%" color="emerald" />,
            ],
            [
              <Multiline title="PRFL" content="Perfolio" />,
              <Multiline title={3} content="@9000.1" />,

              <Tag label="+9999%" color="purple" />,
            ],
            [
              <Multiline title="PRFL" content="Perfolio" />,
              <Multiline title={1} content="@9000.1" />,

              <Tag label="+9999%" color="purple" />,
            ],
            [
              <Multiline title="PRFL" content="Perfolio" />,
              <Multiline title={1} content="@9000.1" />,

              <Tag label="+9999%" color="purple" />,
            ],
          ]}
        />
      </div>
    </SidebarLayout>
  );
};

export default Index;


export async function getServerSideProps(ctx: NextPageContext) {
  return {
    props: await getAPI(ctx.req, ctx.res),
  };
}
