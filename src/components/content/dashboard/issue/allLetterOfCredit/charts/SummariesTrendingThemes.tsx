"use client";

import React from "react";
import "./SummariesTrendingThemes.css";

interface SummariesTrendingThemesProps {
  title: string;
  themes: string[];
}

export default function SummariesTrendingThemes({
  title,
  themes,
}: SummariesTrendingThemesProps) {
  return (
    <div className="summaries-container">
      {/* Title */}
      <h2 className="summaries-title">{title}</h2>

      {/* Themes */}
      <div className="themes-wrapper">
        {themes && themes.length > 0 ? (
          themes.map((theme, index) => (
            <div key={index} className="theme-item">
              {theme}
            </div>
          ))
        ) : (
          <p className="no-themes">No themes available.</p>
        )}
      </div>
    </div>
  );
}
