import React, { useState } from "react";
import "./Keywords-Topic-Table.css";

interface FeedbackItem {
  keywords: string;
  mentions: number;
  change: string;
  breakdown: string;
}

const feedbackData: FeedbackItem[] = [
  {
    keywords: "Delivery Speed",
    mentions: 42,
    change: "2w ago",
    breakdown: "62% Neg · 25% Neu · 13% Pos",
  },
  {
    keywords: "Delivery Speed",
    mentions: 65,
    change: "2d ago",
    breakdown: "62% Neg · 25% Neu · 13% Pos",
  },
  {
    keywords: "Delivery Speed",
    mentions: 28,
    change: "5w ago",
    breakdown: "62% Neg · 25% Neu · 13% Pos",
  },
  {
    keywords: "Delivery Speed",
    mentions: 28,
    change: "5w ago",
    breakdown: "62% Neg · 25% Neu · 13% Pos",
  },
  {
    keywords: "Delivery Speed",
    mentions: 28,
    change: "5w ago",
    breakdown: "62% Neg · 25% Neu · 13% Pos",
  },
  {
    keywords: "Delivery Speed",
    mentions: 28,
    change: "5w ago",
    breakdown: "62% Neg · 25% Neu · 13% Pos",
  },
  {
    keywords: "Delivery Speed",
    mentions: 28,
    change: "5w ago",
    breakdown: "62% Neg · 25% Neu · 13% Pos",
  },
  {
    keywords: "Delivery Speed",
    mentions: 28,
    change: "5w ago",
    breakdown: "62% Neg · 25% Neu · 13% Pos",
  },
  {
    keywords: "Delivery Speed",
    mentions: 28,
    change: "5w ago",
    breakdown: "62% Neg · 25% Neu · 13% Pos",
  },
  {
    keywords: "Delivery Speed",
    mentions: 28,
    change: "5w ago",
    breakdown: "62% Neg · 25% Neu · 13% Pos",
  },
  {
    keywords: " Speed",
    mentions: 28,
    change: "5w ago",
    breakdown: "62% Neg · 25% Neu · 13% Pos",
  },
];

interface PaginatedTableProps {
  feedbacks: FeedbackItem[];
  rowsPerPage?: number;
}

const PaginatedTable: React.FC<PaginatedTableProps> = ({
  feedbacks,
  rowsPerPage = 10, // default rows per page
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(feedbackData.length / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = feedbackData.slice(startIndex, startIndex + rowsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="keywords-topics">
      <table className="keywords-topics-table">
        <thead>
          <tr className="table-header" style={{ padding: "12px" }}>
            <th className="header-text">Keyword / Topic</th>
            <th className="header-text centered-cell">Mentions(This Week)</th>
            <th className="header-text">Change vs Last Week</th>
            <th className="header-text">Sentiment Breakdown</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index} style={{ width: "394px" }}>
              <td className="header-sub-text">{item.keywords}</td>
              <td className="header-sub-text centered-cell">{item.mentions}</td>
              <td className="header-sub-text">{item.change}</td>
              <td style={{ fontSize: "0.75rem" }}>{item.breakdown}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "12px",
        }}
      >
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          style={{
            width: "32px",
            height: "32px",
            paddingTop: "4px",
            alignItems: "center",
            borderRadius: "4px",
            background: currentPage === 1 ? "white" : "white",
            color: "white",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
          }}
        >
          <img src="/Arrow-Left.svg" />
        </button>

        {/* <span style={{ fontSize: "0.875rem", color: "#4B5563" }}>
          Page {currentPage} of {totalPages}
        </span> */}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          style={{
            width: "32px",
            height: "32px",
            paddingTop: "4px",
            alignItems: "center",
            borderRadius: "4px",
            background: currentPage === totalPages ? "white" : "white",
            color: "white",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
          }}
        >
          <img src="/Alt-Arrow-Right.svg" />
        </button>
      </div>
    </div>
  );
};

export default PaginatedTable;
