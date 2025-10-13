import React from "react";
import "./PositiveChart.css";

type FeedbackSummaryProps = {
  percentage: number;
  positive: number;
  negative: number;
  neutral: number;
};

const PositiveChart: React.FC<FeedbackSummaryProps> = ({
  percentage,
  positive,
  negative,
  neutral,
}) => {
  return (
    <div className="feedback-summary">
      {/* Top percentage */}
      <h2
        className="summary-percentage"
        style={{
          margin: 0,
          fontSize: "1.25rem",
          fontWeight: "600",
          color: "#4B5563",
        }}
      >
        {percentage}%
      </h2>

      {/* Breakdown */}
      <div className="summary-breakdown">
        <div className="summary-row">
          <span className="text">Positive</span>
          <span className="text">{positive}%</span>
        </div>
        <div className="summary-row">
          <span className="text">Negative</span>
          <span className="text">{negative}%</span>
        </div>
        <div className="summary-row">
          <span className="text">Neutral</span>
          <span className="text">{neutral}%</span>
        </div>
      </div>
    </div>
  );
};

export default PositiveChart;
