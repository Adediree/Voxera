"use client";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const FeedbackChart: React.FC = () => {
  const [series] = useState([
    {
      name: "Feedback",
      data: [10, 25, 22, 35, 40, 50, 60], // Replace with real data
    },
  ]);

  const options: ApexOptions = {
    chart: {
      type: "area",
      height: 200,
      toolbar: { show: false },
      sparkline: { enabled: true }, // removes axes, grid, etc.
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#FF5B22"], // ✅ put colors here, not inside gradient
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.0,
        stops: [0, 100],
      },
    },
    grid: { show: false },
    dataLabels: { enabled: false },
    xaxis: {
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: { show: false },
    tooltip: { enabled: false },
  };

  return (
    <div
      style={{
        width: "230px",
        height: "220px",
        // padding: "12px",
        borderRadius: "12px",
        background: "white",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Top text (number + label) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "16px",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "1.25rem",
            fontWeight: "600",
            color: "#4B5563",
          }}
        >
          320
        </h2>
        <p style={{ margin: 0, fontSize: "0.8125rem", color: "#4B5563" }}>
          Total Feedback
        </p>
      </div>

      {/* Chart below */}
      <Chart
        options={options}
        series={series}
        type="area"
        height="150"
        width="100%"
      />
    </div>
  );
};

export default FeedbackChart;
