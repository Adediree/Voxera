import React, { useState } from "react";
import "./All-Feedback-Table.css";

interface FeedbackItem {
  logosrc: string;
  name: string;
  change: string;
  breakdown: string;
}

const feedbackData: FeedbackItem[] = [
  {
    logosrc: "/trustpilot 1.svg",
    name: "Adebayo O.",
    change:
      "The product quality was good overall, but delivery took longer than expected.",
    breakdown: "3 days ago",
  },
  {
    logosrc: "/trustpilot 1.svg",
    name: "Adebayo O.",
    change:
      "The product quality was good overall, but delivery took longer than expected.",
    breakdown: "3 days ago",
  },
  {
    logosrc: "/trustpilot 1.svg",
    name: "Adebayo O.",
    change:
      "The product quality was good overall, but delivery took longer than expected.",
    breakdown: "3 days ago",
  },
  {
    logosrc: "/trustpilot 1.svg",
    name: "Adebayo O.",
    change:
      "The product quality was good overall, but delivery took longer than expected.",
    breakdown: "3 days ago",
  },
  {
    logosrc: "/trustpilot 1.svg",
    name: "Adebayo O.",
    change:
      "The product quality was good overall, but delivery took longer than expected.",
    breakdown: "3 days ago",
  },
  {
    logosrc: "/trustpilot 1.svg",
    name: "Adebayo O.",
    change:
      "The product quality was good overall, but delivery took longer than expected.",
    breakdown: "3 days ago",
  },
  {
    logosrc: "/google-icon.svg",
    name: "Adebayo O.",
    change:
      "The product quality was good overall, but delivery took longer than expected.",
    breakdown: "3 days ago",
  },
  {
    logosrc: "/google-icon.svg",
    name: "Adebayo O.",
    change:
      "The product quality was good overall, but delivery took longer than expected.",
    breakdown: "3 days ago",
  },
  {
    logosrc: "/google-icon.svg",
    name: "Adebayo O.",
    change:
      "The product quality was good overall, but delivery took longer than expected.",
    breakdown: "3 days ago",
  },
  {
    logosrc: "/google-icon.svg",
    name: "Adebayo O.",
    change:
      "The product quality was good overall, but delivery took longer than expected.",
    breakdown: "3 days ago",
  },
  {
    logosrc: "/yelp-1 1.svg",
    name: "Adebayo O.",
    change:
      "The product quality was good overall, but delivery took longer than expected.",
    breakdown: "3 days ago",
  },
];

interface AllTableProps {
  feedbacks: FeedbackItem[];
  rowsPerPage?: number;
}

const AllTable: React.FC<AllTableProps> = ({
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
    <div className="all-feedback">
      <table className="all-feedback-table">
        {/* <thead>
          <tr className="feedback-table-header" style={{ padding: "12px" }}>
            <th className="feedback-header-text">Keyword / Topic</th>
            <th className="feedback-header-text centered-cell">
              Mentions(This Week)
            </th>
            <th className="feedback-header-text">Change vs Last Week</th>
            <th className="feedback-header-text">Sentiment Breakdown</th>
          </tr>
        </thead> */}
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index} style={{ width: "394px" }}>
              <td className="source-cell">
                <img src={item.logosrc} alt="logo" className="source-logo" />
              </td>

              <td className="feedback-header-sub-text centered-cell">
                {item.name}
              </td>
              <td className="feedback-header-sub-text change-cell">
                {item.change}
              </td>
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

export default AllTable;
