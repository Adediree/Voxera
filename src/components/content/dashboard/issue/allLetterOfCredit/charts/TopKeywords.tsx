import React, { useEffect, useState } from "react";
import "./TopKeywords.css";

const keywords = [
  "Customer Service",
  "Pricing",
  "Product Quality",
  "Delivery Time",
  "Support",
  "Ease of Use",
];

const TopKeywords: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % keywords.length);
    }, 3000); // every 3s scrolls

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="top-keywords-container">
      <h3 className="top-keywords-title">Top Keywords</h3>

      <div className="circle-wrapper">
        {keywords.map((word, i) => {
          // calculate position relative to activeIndex
          const angle =
            ((i - activeIndex + keywords.length) % keywords.length) *
            (360 / keywords.length);
          return (
            <span
              key={i}
              className="circle-word"
              style={{
                transform: `rotate(${angle}deg) translate(95px) rotate(-${angle}deg)`,
                transition: "transform 1s ease",
              }}
            >
              {word}
            </span>
          );
        })}

        <div className="center-word">{keywords[activeIndex]}</div>
      </div>
    </div>
  );
};

export default TopKeywords;
