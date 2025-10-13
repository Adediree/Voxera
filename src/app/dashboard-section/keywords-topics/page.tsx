"use client";

import KeywordTrendsChart from "@/components/content/dashboard/issue/allLetterOfCredit/charts/Keyword-trends-chart";
import DynamicKeywordsCloud from "@/components/content/dashboard/issue/allLetterOfCredit/charts/Keywords";
import PaginatedTable from "@/components/content/dashboard/issue/allLetterOfCredit/charts/Keywords-Topic-Table";
import TrendingKeywords from "@/components/content/dashboard/issue/allLetterOfCredit/charts/TrendingKeywordsTable";
import { AISummary } from "@/components/layouts/AISummaryHeader";
import ReadMore from "@/components/layouts/ReadMore";
import {
  BaseDatePicker,
  ModernSelect,
  type ModernSelectOption,
} from "qucoon-components";

export default function Feedback() {
  const topKeywordsOptions: ModernSelectOption[] = [
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
            Keyword & Topics
          </p>
          <p
            style={{
              fontSize: "0.875rem",
              fontWeight: "400",
              color: "#4B5563",
            }}
          >
            Track trending topics and keywords shaping customer feedback.
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
        className="container-2"
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "space-between",
        }}
      >
        <div
          className="top-mentioned-container"
          style={{
            display: "flex",
            flexDirection: "column",
            // gap: "40px",
            padding: "16px",
            backgroundColor: "white",
            borderRadius: "6px",
            width: "554px",
            height: "200px",
          }}
        >
          <div
            className="top-mentioned-header"
            style={{ display: "flex", alignItems: "center", gap: "6px" }}
          >
            <img src="/keyword-icon.svg" />
            <p
              className="review-title"
              style={{
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#4B5563",
              }}
            >
              Top Mentioned Topics
            </p>
          </div>
          <div>
            <DynamicKeywordsCloud
              keywords={[
                "Support",
                "Delivery",
                "Quality",
                "Price",
                "Service",
                "Attendance",
              ]}
            />
            {/* <KeywordsTopicsCloud /> */}
          </div>
        </div>
        <div
          className="top-mentioned-container"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "16px",
            backgroundColor: "white",
            borderRadius: "6px",
            width: "400px",
            height: "200px",
          }}
        >
          <div
            className="top-mentioned-header"
            style={{ display: "flex", alignItems: "center", gap: "6px" }}
          >
            <img src="/keyword-icon.svg" />
            <p
              className="review-title"
              style={{
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#4B5563",
              }}
            >
              Trending 5 Keywords
            </p>
          </div>
          <div>
            <TrendingKeywords feedbacks={[]} />
          </div>
        </div>
      </div>
      <div
        className="container-3"
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "space-between",
        }}
      >
        <div
          className="KeywordTrendsChart"
          style={{
            display: "flex",
            flexDirection: "column",
            // gap: "40px",
            padding: "16px",
            backgroundColor: "white",
            borderRadius: "6px",
            width: "580px",
            height: "265px",
            minHeight: "220px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "4px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.9rem",
                fontWeight: "600",
                color: "#4B5563",
              }}
            >
              Keywords Trends Over Time
            </p>
            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                // justifyContent: "space-between",
              }}
            >
              {/* <p style={{ width: "150px" }}>This Month</p> */}
              <BaseDatePicker/>
              <ModernSelect
                placeholderLabel="Keywords"
                // onOptionSelect={}
                selectOptions={topKeywordsOptions}
                size="small"
                // label="Top Keywords"
                style={{ fontSize: "16px", color: "#667085", border: "none" }}
              />
            </div>
          </div>
          <KeywordTrendsChart />
        </div>
        <div
          className="ai-summary-container"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            backgroundColor: "white",
            borderRadius: "8px",
            gap: "12px",
            width: "387px",
            height: "266px",
            // border: "1px solid",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <AISummary />
            <p
              style={{
                fontSize: "1rem",
                fontWeight: "600",
                color: "#474747",
              }}
            >
              Delivery Speed
            </p>
          </div>
          <ReadMore
            text="Mentions of Delivery Speed rose by 40% this week, with most feedback highlighting longer wait times during peak hours. While a few customers praised timely service during off-peak periods, 62% of mentions were negative, linking delays to frustration and lower ratings. Addressing staffing or logistics during high-demand windows could reduce complaints and improve satisfaction by up to 10%."
            maxWords={70}
          />
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
            gap: "4px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.9rem",
              fontWeight: "600",
              color: "#4B5563",
            }}
          >
            Keywords Trends Over Time
          </p>
          <p style={{ width: "150px" }}>This Month</p>
        </div>
        <PaginatedTable feedbacks={[]} rowsPerPage={10} />
      </div>
    </div>
  );
}
