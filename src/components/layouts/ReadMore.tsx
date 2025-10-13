import React, { useState } from "react";

interface ReadMoreProps {
  text: React.ReactNode;
  maxWords?: number;
}

const ReadMore: React.FC<ReadMoreProps> = ({ text, maxWords = 1000 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Split the text into words
  const plainText = typeof text === "string" ? text : "";
  const words = plainText.split(" ");
  const shouldTruncate = words.length > maxWords;

  // Show only the first N words if not expanded
  const displayText =
    !isExpanded && shouldTruncate
      ? words.slice(0, maxWords).join(" ") + "..."
      : text;

  return (
    <p style={{ fontSize: "0.875rem", fontWeight: "400", color: "#4B5563" }}>
      {displayText}{" "}
      {shouldTruncate && (
        <span
          onClick={() => setIsExpanded(!isExpanded)}
          style={{ color: "blue", cursor: "pointer" }}
        >
          {isExpanded ? " Show less" : " Read more"}
        </span>
      )}
    </p>
  );
};

export default ReadMore;
