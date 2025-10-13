import React from "react";
import ReactApexChart from "react-apexcharts";
import "./FeedbackSourceChart.css";

const sources = [
  {
    id: "gmb",
    name: "Google My Business",
    logo: "/google-my-business-logo-1 1.svg",
    value: 45,
  },
  {
    id: "trustpilot",
    name: "Trustpilot",
    logo: "/trustpilot 1.svg",
    value: 25,
  },
  { id: "facebook", name: "Facebook", logo: "/Facebook.svg", value: 20 },
  { id: "yelp", name: "Yelp", logo: "/yelp-1 1.svg", value: 10 },
];

const FeedbackSourceChart: React.FC = () => {
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "donut",
    },
    colors: ["#4285F4", "#00B67A", "#1877F2", "#FF1A1A"], // brand colors
    labels: sources.map((s) => s.name),
    legend: { show: false }, // we'll do custom legend
    dataLabels: { enabled: false }, // no numbers inside arcs
    stroke: { width: 0 },
    plotOptions: {
      pie: {
        donut: {
          size: "80%", // thinner donut
          labels: {
            show: false,
          },
        },
      },
    },
  };

  const series = sources.map((s) => s.value);

  return (
    <div className="feedback-source-container">
      {/* Donut chart */}
      <ReactApexChart
        options={chartOptions}
        series={series}
        type="donut"
        width={220}
      />

      {/* Custom legend with logo + name + percentage */}
      <div className="feedback-source-legend">
        {sources.map((source, idx) => (
          <div className="legend-item" key={source.id}>
            <img src={source.logo} alt={source.name} className="legend-logo" />
            <span className="legend-name">{source.name}</span>
            <span className="legend-value">{source.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSourceChart;
