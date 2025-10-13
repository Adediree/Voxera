// components/KeywordTrendsChart.tsx
"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const KeywordTrendsChart = () => {
  const chartOptions: ApexOptions = {
    chart: {
      type: "line",
      height: 200,
      toolbar: { show: false },
    },
    colors: ["#FF6B57", "#3B82F6"], // orange and blue
    stroke: {
      curve: "smooth",
      width: 3,
    },
    markers: {
      size: 0,
      hover: { sizeOffset: 0 },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    xaxis: {
      categories: ["MON", "TUE", "WED", "THU", "FRI", "SAT"],
      labels: {
        style: { colors: "#6B7280", fontWeight: 500 },
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    legend: {
      show: false,
    },
  };

  const series = [
    {
      name: "Series 1",
      data: [60, 65, 90, 55, 95, 93],
    },
    {
      name: "Series 2",
      data: [40, 35, 50, 45, 55, 60],
    },
  ];

  return (
    <div style={{ width: "555px" }}>
      <ReactApexChart
        options={chartOptions}
        series={series}
        type="line"
        height={200}
        width="100%"
      />
    </div>
  );
};

export default KeywordTrendsChart;
