import React from "react";
import dynamic from "next/dynamic";
import styles from "./Piechart.module.css";
import { ApexOptions } from "apexcharts";

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface PieChartData {
  name?: string;
  label?: string;
  value?: number;
}

interface PieChartProps {
  data?: PieChartData[];
  title?: string;
  height?: number;
  showLegend?: boolean;
  showDataLabels?: boolean;
  colors?: string[];
  className?: string;
}

export default function PieChart({
  data = [],
  title = "Chart",
  height = 200,
  showLegend = true,
  showDataLabels = true,
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
}: PieChartProps) {
  // Transform data for ApexCharts format
  const series = data.map((item) => item.value || 0);
  const labels = data.map((item) => item.name || item.label || "Unknown");

  // Use provided colors or cycle through default colors
  const chartColors = data.map((_, index) => colors[index % colors.length]);

  const options: ApexOptions = {
    chart: {
      type: "pie",
      height: height,
      fontFamily: "system-ui, -apple-system, sans-serif",

      // animations: {
      //   enabled: true,
      //   // easing: "easeinout" as unknown as undefined,
      //   speed: 800,
      //   animateGradually: {
      //     enabled: true,
      //     delay: 150,
      //   },
      //   dynamicAnimation: {
      //     enabled: true,
      //     speed: 350,
      //   },
      // },
    },
    labels: labels,
    colors: chartColors,
    dataLabels: {
      enabled: showDataLabels,
      formatter: function (val: number, opts: any) {
        return `${Math.round(val)}%`;
      },
      style: {
        fontSize: "14px",
        fontWeight: "600",
        colors: ["#fff"],
      },
      dropShadow: {
        enabled: false,
      },
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        dataLabels: {
          offset: 0,
          minAngleToShowLabel: 10,
        },
      },
    },
    legend: {
      show: showLegend,
      position: "bottom",
      offsetY: 10,
      fontSize: "14px",
      fontWeight: 400,
      fontFamily: "system-ui, -apple-system, sans-serif",
      markers: {
        size: 12,
        // height: 12,
        strokeWidth: 0,
        // radius: 6,
        shape: "circle",
        offsetX: 0,
        offsetY: 0,
      },
      itemMargin: {
        horizontal: 8,
        vertical: 4,
      },
      formatter: function (seriesName: string, opts: any) {
        const value = opts.w.globals.series[opts.seriesIndex];
        const percentage = (
          (value /
            opts.w.globals.seriesTotals.reduce(
              (a: number, b: number) => a + b,
              0
            )) *
          100
        ).toFixed(0);
        return `${seriesName}: ${percentage}%`;
      },
    },
    tooltip: {
      enabled: true,
      theme: "light",
      style: {
        fontSize: "14px",
        fontFamily: "system-ui, -apple-system, sans-serif",
      },
      y: {
        formatter: function (val, opts) {
          const total = opts.config.series.reduce(
            (a: number, b: number) => a + b,
            0
          );
          const percentage = ((val / total) * 100).toFixed(1);
          return `${val} (${percentage}%)`;
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            height: Math.min(height, 300),
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
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

      <div className={styles.chartWrapper}>
        {typeof window !== "undefined" && (
          <Chart options={options} series={series} type="pie" height={height} />
        )}
      </div>
    </div>
  );
}
