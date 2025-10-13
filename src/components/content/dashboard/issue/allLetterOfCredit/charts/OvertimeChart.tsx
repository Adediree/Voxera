import React from "react";
import Chart from "react-apexcharts";
import "./FeedbackVolumeChart.css";

const OvertimeChart: React.FC = () => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "line",
      height: 250,
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    legend: {
      show: false,
    },

    stroke: {
      curve: "smooth",
      width: 5,
    },
    grid: { show: false },
    yaxis: {
      show: false, // hide Y axis values
    },
    xaxis: {
      categories: ["M", "T", "W", "T", "F", "S", "Today"],
      axisTicks: { show: false },
      axisBorder: { show: false },
      labels: {
        style: {
          fontSize: "12px",
          colors: "#555",
        },
      },
    },
    markers: { size: 0 }, // remove dots on line
    dataLabels: { enabled: false },
    plotOptions: {
      bar: {
        columnWidth: "95%", // slim bars
        borderRadius: 0, // no rounded edges
      },
    },
    colors: ["#EBEDFCBD", "#F4A800"], // bars first, line second
  };

  const series = [
    {
      name: "Volume",
      type: "column", // vertical bars
      data: [40, 60, 80, 70, 50, 65, 45],
    },
    {
      name: "Trend",
      type: "line", // wave line
      data: [30, 50, 40, 60, 45, 70, 55],
    },
  ];

  return (
    <div className="feedback-volume-container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3 className="feedback-volume-title">Sentiment Overtime</h3>
          <p className="feedback-volume-subtitle">
            Increases as feedback grows
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: "6px" }}>
            <p
              style={{
                fontSize: "0.9rem",
                fontWeight: "600",
                color: "#000000",
              }}
            >
              1,235
            </p>
            <img src="/Union.svg" />
            <img src="/wave2.svg" />
          </div>
          <p className="feedback-volume-subtitle">Positive increase</p>
        </div>
      </div>
      <Chart options={options} series={series} height={200} width="100%" />
    </div>
  );
};

export default OvertimeChart;
