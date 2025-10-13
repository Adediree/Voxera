import React from "react";
import "./TrendingKeywordsTable.css";

interface FeedbackItem {
  keywords: string;
  mentions: string;
  trends: string;
}

const feedbackData: FeedbackItem[] = [
  {
    keywords: "Delivery Speed",
    mentions: "42",
    trends: "2w ago",
  },
  {
    keywords: "Food Quality",
    mentions: "65",
    trends: "2d ago",
  },
  {
    keywords: "Pricing",
    mentions: "28",
    trends: "5w ago",
  },
];

interface RecentFeedbackProps {
  feedbacks: FeedbackItem[];
}

const TrendingKeywords: React.FC<RecentFeedbackProps> = ({ feedbacks }) => {
  return (
    <div className="recent-feedback">
      <table className="recent-feedback-table">
        <thead>
          <tr className="table-header">
            <th className="header-text">Keywords</th>
            <th className="header-text">Mentions</th>
            <th className="header-text">Trends</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map((item, index) => (
            <tr key={index} style={{ width: "394px" }}>
              <td className="header-sub-text">{item.keywords}</td>
              <td className="header-sub-text">{item.mentions}</td>
              <td style={{ fontSize: "0.75rem" }}>{item.trends}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrendingKeywords;
