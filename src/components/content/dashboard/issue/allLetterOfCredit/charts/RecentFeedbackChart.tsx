import React from "react";
import "./RecentFeedbackChart.css";

interface FeedbackItem {
  source: {
    id: string;
    name: string;
    logo: string;
  };
  comment: string;
  date: string;
}

const feedbackData: FeedbackItem[] = [
  {
    source: {
      id: "gmb",
      name: "Google My Business",
      logo: "/google-my-business-logo-1 1.svg",
    },
    comment: "Bad product with high price",
    date: "2w ago",
  },
  {
    source: {
      id: "trustpilot",
      name: "Trustpilot",
      logo: "/trustpilot 1.svg",
    },
    comment: "Great product and price",
    date: "2d ago",
  },
  {
    source: {
      id: "facebook",
      name: "Facebook",
      logo: "/Facebook.svg",
    },
    comment: "I love the product but costly",
    date: "5w ago",
  },
];

interface RecentFeedbackProps {
  feedbacks: FeedbackItem[];
}

const RecentFeedback: React.FC<RecentFeedbackProps> = ({ feedbacks }) => {
  return (
    <div className="recent-feedback">
      <div className="rf-header">
        <h3 className="rf-title">Recent Feedback</h3>
        <p className="rf-subtitle">View all</p>
      </div>
      <table className="recent-feedback-table">
        <thead>
          <tr className="table-header">
            <th className="header-text">Source</th>
            <th className="header-text">Comment</th>
            <th className="header-text">Date</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map((item, index) => (
            <tr key={index} style={{ width: "394px" }}>
              <td className="source-cell">
                <img
                  src={item.source.logo}
                  alt={item.source.name}
                  className="source-logo"
                />
                <p style={{ fontSize: "0.7rem" }}>{item.source.name}</p>
              </td>
              <td style={{ fontSize: "0.7rem" }}>{item.comment}</td>
              <td style={{ fontSize: "0.7rem" }}>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentFeedback;
