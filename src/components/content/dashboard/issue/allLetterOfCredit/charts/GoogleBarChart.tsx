"use client";

import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export type Segment = {
  name: string;
  value: number;
  color?: string;
};

export interface GoogleBarProps {
  data: Segment[]; // array of segments
  height?: number; // chart height in px
  showPercentSign?: boolean; // whether labels include '%' sign
  className?: string;
}

export default function GoogleBar({
  data,
  height = 36,
  showPercentSign = true,
  className = "",
}: GoogleBarProps) {
  // Defensive: ensure non-negative numbers
  const safeData = (data || []).map((d) => ({
    name: d.name || "item",
    value: Math.max(0, Number(d.value) || 0),
    color: d.color,
  }));

  const total = safeData.reduce((s, it) => s + it.value, 0) || 1; // avoid divide-by-zero

  // Apex expects series as array of objects where each has a single data point (we use one category)
  const series = safeData.map((it) => ({ name: it.name, data: [it.value] }));

  const colors = safeData.map((it) => it.color || undefined); // undefined => apex default

  const options: any = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: { show: false },
      sparkline: { enabled: true }, // minimal chrome
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "16px",
        borderRadius: 8, // keep it reasonable
        borderRadiusWhenStacked: "all",
        // distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
      offsetX: 0,
      style: {
        fontSize: "13px",
        fontWeight: 600,
        colors: ["#fff"],
      },
      formatter: function (val: number, opts: any) {
        // val is the raw value; compute percent of total
        const percent = Math.round((val / total) * 100);
        // Hide labels for very small segments (optional)
        if (percent === 0) return "";
        return showPercentSign ? `${percent}%` : `${percent}`;
      },
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (val: number) {
          const percent = ((val / total) * 100).toFixed(1);
          return `${val} (${percent}%)`;
        },
      },
    },
    xaxis: {
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
      min: 0,
      max: total,
    },
    yaxis: { show: false },
    grid: { show: false },
    legend: { show: false },
    stroke: { width: 0 },
    colors: colors,
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.05,
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          plotOptions: { bar: { barHeight: `${Math.max(10, height - 10)}px` } },
        },
      },
    ],
  };

  return (
    <div className={className} style={{ width: "100%", display: "block" }}>
      <div
        style={{
          height: `${height}px`,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Render chart */}
        {typeof window !== "undefined" && (
          <Chart options={options} series={series} type="bar" height={height} width={284} />
        )}
      </div>
    </div>
  );
}
