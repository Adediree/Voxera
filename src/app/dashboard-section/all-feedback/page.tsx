"use client";

import AllFeedbackTable from "@/components/content/dashboard/issue/allLetterOfCredit/charts/All-Feedback-Table";
import KeywordTrendsChart from "@/components/content/dashboard/issue/allLetterOfCredit/charts/Keyword-trends-chart";
import DynamicKeywordsCloud from "@/components/content/dashboard/issue/allLetterOfCredit/charts/Keywords";
import PaginatedTable from "@/components/content/dashboard/issue/allLetterOfCredit/charts/Keywords-Topic-Table";
import KeywordsTopicsCloud from "@/components/content/dashboard/issue/allLetterOfCredit/charts/Keywords-topics-chart";
import TrendingKeywords from "@/components/content/dashboard/issue/allLetterOfCredit/charts/TrendingKeywordsTable";
import { AISummary } from "@/components/layouts/AISummaryHeader";
import ReadMore from "@/components/layouts/ReadMore";
import {
  BaseDatePicker,
  ModernSelect,
  type ModernSelectOption,
} from "qucoon-components";

export default function Feedback() {
  const platform: ModernSelectOption[] = [
    {
      label: "Delivery Speed",
      value: "Delivery Speed",
    },

    {
      label: "Customer Service",
      value: "Customer Service",
    },

    {
      label: "Food Quality",
      value: "Food Quality",
    },
    {
      label: "Pricing",
      value: "Pricing",
    },
  ];
  const sentiment: ModernSelectOption[] = [
    {
      label: "Delivery Speed",
      value: "Delivery Speed",
    },

    {
      label: "Customer Service",
      value: "Customer Service",
    },

    {
      label: "Food Quality",
      value: "Food Quality",
    },
    {
      label: "Pricing",
      value: "Pricing",
    },
  ];
  const dateRange: ModernSelectOption[] = [
    {
      label: "Delivery Speed",
      value: "Delivery Speed",
    },

    {
      label: "Customer Service",
      value: "Customer Service",
    },

    {
      label: "Food Quality",
      value: "Food Quality",
    },
    {
      label: "Pricing",
      value: "Pricing",
    },
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
      <div
        className="container-1"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div>
          <p
            style={{ fontSize: "1.25rem", fontWeight: "600", color: "#4B5563" }}
          >
            All Feedback
          </p>
          <p
            style={{
              fontSize: "0.875rem",
              fontWeight: "400",
              color: "#4B5563",
            }}
          >
            Track live customer feedback from all connected sources
          </p>
        </div>
        <div>
          <p
            style={{
              fontSize: "0.875rem",
              fontWeight: "400",
              color: "#4B5563",
            }}
          >
            All data synced 10 mins ago
          </p>
        </div>
      </div>

      <div
        className="container-4"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          padding: "16px",
          backgroundColor: "white",
          borderRadius: "6px",
          // width: "554px",
          // height: "200px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "1rem",
            backgroundColor: "#D9D9D945",
            // border: "1px solid red",
          }}
        >
          <div style={{ display: "flex", gap: "4px" }}>
            <img src="/platform.svg" />{" "}
            <ModernSelect
              placeholderLabel="Platform"
              // onOptionSelect={}
              selectOptions={platform}
              size="small"
              // label="Top Keywords"
              style={{ fontSize: "16px", color: "#667085", border: "none" }}
            />
          </div>
          <div style={{ display: "flex", gap: "4px" }}>
            <img src="/sentiment.svg" />{" "}
            <ModernSelect
              placeholderLabel="Sentiment"
              // onOptionSelect={}
              selectOptions={sentiment}
              size="small"
              // label="Top Keywords"
              style={{ fontSize: "16px", color: "#667085", border: "none" }}
            />
          </div>
          <BaseDatePicker />
        </div>

        <AllFeedbackTable feedbacks={[]} rowsPerPage={10} />
      </div>
    </div>
  );
}
