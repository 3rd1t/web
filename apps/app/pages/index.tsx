import React, { useEffect, useState } from "react";
import { NextPageContext } from "next";
import { SidebarLayout } from "@perfolio/components/nav/layout/sidebar-layout/sidebar-layout";
import { requireUser } from "@perfolio/auth/auth0";
import { Table } from "@perfolio/components/table/table";
import { Tag } from "@perfolio/components/table/cells/tag/tag";
import { Multiline } from "@perfolio/components/table/cells/multiline/multiline";
import { RangePicker, chartRangeState } from "@perfolio/components/rangepicker";
import { AreaChart } from "../components/charts/areachart";
import { selector, atom, useRecoilValue, useRecoilState } from "recoil";
import aapl from "../components/charts/data";
import getConfig from "next/config";
const formatValue = (v: number): string => {
  return v.toLocaleString("en-US", {
    minimumIntegerDigits: 1,
    useGrouping: true,
    maximumFractionDigits: 2,
  });
};

export interface IndexProps {
  user: {
    nickname: string;
  };
  iexToken: string;
}
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
export const Index = ({ user }: IndexProps) => {
  const [series, setSeries] = useRecoilState(seriesState);

  useEffect(() => {
    setSeries(
      aapl.map((d) => {
        return { time: new Date(d.date), value: d.close };
      })
    );
    
  }, []);
  const selectedSeries = useRecoilValue(selectedSeriesState);
  const totalChange = useRecoilValue(totalChangeState);
  const localChange = useRecoilValue(localChangeState);
  console.log({selectedSeries})
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
              <div className="flex items-center justify-between divide-x divide-gray-300">
                <div className="pr-8">
                  <div className="flex items-center justify-between">
                    <span className="text-lg text-gray-600 ">Investment</span>
                    <span
                      className={`px-2 rounded-full ${
                        totalChange.absolute >= 0
                          ? "text-emerald-800 bg-emerald-100"
                          : "text-red-800 bg-red-100"
                      }`}
                    >
                      {formatValue(totalChange.relative * 100)}%
                    </span>
                  </div>
                  <div className="text-4xl font-semibold tracking-wide">
                    ${formatValue(useRecoilValue(lastValueState))}
                  </div>
                </div>
                <div className="pl-8">
                  <div className="flex items-center justify-between">
                    <span className="text-lg text-gray-600">Today</span>
                    <span
                      className={`px-2 rounded-full ${
                        localChange.relative >= 0
                          ? "text-emerald-800 bg-emerald-100"
                          : "text-red-800 bg-red-100"
                      }`}
                    >
                      {formatValue(localChange.relative * 100)}%
                    </span>
                  </div>
                  <div className="text-4xl font-semibold tracking-wide">
                    ${formatValue(localChange.absolute)}
                  </div>
                </div>
              </div>
              <RangePicker />
            </div>
            <AreaChart data={selectedSeries} />
          </div>
          <div className="flex-grow">
            <div className="h-full m-8">
              {/* <DonutChart /> */}
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
  const user = await requireUser(ctx);

  return {
    props: {
      user,
      iexToken: getConfig().serverRuntimeConfig.iexToken,
    },
  };
}
