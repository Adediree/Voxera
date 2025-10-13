"use client";

import React from "react";
import "./InsightCard.css";

interface InsightCardProps {
  icon: string;
  value: string | number;
  label: string;
}

export const InsightCard: React.FC<InsightCardProps> = ({
  icon,
  value,
  label,
}) => {
  return (
    <div className="insights">
      <img src={icon} alt={label} />
      <div className="insights-container">
        <p className="ride-insights">{value}</p>
        <p className="insights-description">{label}</p>
      </div>
    </div>
  );
};
