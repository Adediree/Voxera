"use client";

import React from "react";
import dynamic from "next/dynamic";
import styles from "./SummariesPiechart.module.css";
import { ApexOptions } from "apexcharts";

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface SummariesPieChartData {
  name?: string;
  label?: string;
  value?: number;
}

interface SummariesPieChartProps {
  data?: SummariesPieChartData[];
  title?: string;
  height?: number;
  showLegend?: boolean;
  showDataLabels?: boolean;
  colors?: string[];
  className?: string;
}

export default function SummariesPieChart({
  data = [],
  title = "Chart",
  height = 200,
  showLegend = true,
  showDataLabels = false,
  colors = [
    "#FF6B35",
    "#4285F4",
    "#FFB84D",
    "#00C851",
    "#E74C3C",
    "#9B59B6",
    "#1ABC9C",
    "#F39C12",
  ],
  className = "",
}: SummariesPieChartProps) {
  // Transform data for ApexCharts format
  const series = data.map((item) => item.value || 0);
  const labels = data.map((item) => item.name || item.label || "Unknown");

  // Use provided colors or cycle through default colors
  const chartColors = data.map((_, index) => colors[index % colors.length]);

  const total = series.reduce((a, b) => a + b, 0);

  const options: ApexOptions = {
    chart: {
      type: "pie",
      height,
      fontFamily: "system-ui, -apple-system, sans-serif",
    },
    labels,
    colors: chartColors,
    dataLabels: {
      enabled: showDataLabels,
      formatter: function (val: number) {
        return `${Math.round(val)}%`;
      },
      style: {
        fontSize: "14px",
        fontWeight: "600",
        colors: ["#fff"],
      },
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
      },
    },
    legend: {
      show: false, // disable built-in legend
    },
    stroke: {
      width: 2,
      colors: ["#fff"],
    },
  };

  if (!data || data.length === 0) {
    return (
      <div className={`${styles.chartContainer} ${className}`}>
        <div className={styles.noData}>No data available</div>
      </div>
    );
  }

  return (
    <div className={`${styles.chartContainer} ${className}`}>
      {title && <h2 className={styles.chartTitle}>{title}</h2>}

      <div className={styles.chartContent}>
        <div className={styles.chartWrapper}>
          {typeof window !== "undefined" && (
            <Chart
              options={options}
              series={series}
              type="pie"
              height={height}
            />
          )}
        </div>

        {/* Custom legend / percentage results beside the chart */}
        <div className={styles.chartLegend}>
          {data.map((item, index) => {
            const percentage =
              total > 0 ? ((item.value! / total) * 100).toFixed(1) : "0";
            return (
              <div key={index} className={styles.legendItem}>
                <span
                  className={styles.legendColor}
                  style={{ backgroundColor: chartColors[index] }}
                ></span>
                <span className={styles.legendLabel}>
                  {item.label || item.name || "Unknown"}
                </span>
                <span className={styles.legendValue}>{percentage}%</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
