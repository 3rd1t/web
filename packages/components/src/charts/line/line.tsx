import React, { createRef, useEffect, useState } from "react"
export interface LineProps {
  data: { time: string; value: number }[]
  className?: string
}

export const Line = (props: LineProps) => {
  const myref = createRef<HTMLDivElement>()
  const [series, setSeries] = useState(undefined)

  useEffect(() => {
    if (!series) {
      /* eslint-disable-next-line */
      const { createChart } = require("lightweight-charts")
      const chart = createChart(myref.current)
      const s = chart.addAreaSeries({
        localization: {
          dateFormat: "dd/MM/yyyy",
        },
      })
      chart.applyOptions({
        layout: {
          backgroundColor: "#F7FAFC",
        },
        overlayPriceScales: {
          scaleMargins: {
            top: 0.35,
            bottom: 0.2,
          },
          borderVisible: false,
        },
        timeScale: {
          borderVisible: false,
        },
        grid: {
          horzLines: {
            color: "#eee",
            visible: false,
          },
          vertLines: {
            color: "#ffffff",
          },
        },
        crosshair: {
          horzLine: {
            visible: false,
            labelVisible: false,
          },
          vertLine: {
            visible: true,
            style: 0,
            width: 2,
            color: "rgba(32, 38, 46, 0.1)",
            labelVisible: false,
          },
        },
      })
      s.applyOptions({
        lineColor: "rgba(0, 49, 153, 1)",
        topColor: "rgba(0, 81, 255, 0.4)",
        bottomColor: "rgba(153, 185, 255, 0.0)",
        lineStyle: 1,
        lineWidth: 2,
        priceLineVisible: true,
        priceLineWidth: 1,
        priceLineColor: "#0051FF",
        priceLineStyle: 3,
      })
      setSeries(s)
    }
  }, [props.data])

  useEffect(() => {
    if (series) {
      series.setData(props.data)
    }
  }, [props, series])

  return <div className={props.className} ref={myref} id="chart" />
}

export default Line
