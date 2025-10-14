"use client";
import FeedbackChart from "@/components/content/dashboard/issue/allLetterOfCredit/charts/FeedbackChart";
import FeedbackVolumeChart from "@/components/content/dashboard/issue/allLetterOfCredit/charts/FeedbackVolumeChart";
import DynamicKeywordsCloud from "@/components/content/dashboard/issue/allLetterOfCredit/charts/Keywords";
import OvertimeChart from "@/components/content/dashboard/issue/allLetterOfCredit/charts/OvertimeChart";
import PieChart from "@/components/content/dashboard/issue/allLetterOfCredit/charts/Piechart";
import PositiveChart from "@/components/content/dashboard/issue/allLetterOfCredit/charts/PositiveChart";
import RecentFeedback from "@/components/content/dashboard/issue/allLetterOfCredit/charts/RecentFeedbackChart";
import Sentiment from "@/components/content/dashboard/issue/allLetterOfCredit/charts/Sentiment";

export default function Feedback() {
  const feedbackData = [
    { name: "Google", value: 40 },
    { name: "Facebook", value: 20 },
    { name: "Trustpilot", value: 20 },
    { name: "Yelp", value: 10 },
  ];

  return (
    <div
      className="overall-container"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        backgroundColor: "#FAFBFC",
        padding: "24px",
      }}
    >
      <h1 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#A2AAB5" }}>
        Dashboard
      </h1>
      <div
        className="main-container"
        style={{
          display: "flex",
          // justifyContent: "space-between",
          gap: "48px",
        }}
      >
        <div
          className="container-1"
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <div style={{ display: "flex", gap: "4px" }}>
            <FeedbackChart />
            <PositiveChart
              percentage={58}
              positive={24.4}
              negative={18.8}
              neutral={1.0}
            />
          </div>
          <div>
            <RecentFeedback feedbacks={[]} />
          </div>
          <div>
            <FeedbackVolumeChart />
          </div>
        </div>
        <div
          className="container-2"
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <div>
            <Sentiment />
          </div>
          <DynamicKeywordsCloud />
          <div
            style={{
              display: "flex",
              padding: "16px",
              border: "1px solid",
              maxHeight: "300px",
              backgroundColor: "white",
              gap: "8px",
            }}
          >
            <PieChart data={feedbackData} title="Feedback Sources" />
          </div>
          <div>
            <OvertimeChart />
          </div>
        </div>
      </div>
    </div>
  );
}
