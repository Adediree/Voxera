"use client";
import "./summaries-page.css";

import { InsightCard } from "@/components/content/dashboard/issue/allLetterOfCredit/charts/InsightCard";
import SummariesPieChart from "@/components/content/dashboard/issue/allLetterOfCredit/charts/Summaries-Piechart";
import SummariesTrendingThemes from "@/components/content/dashboard/issue/allLetterOfCredit/charts/SummariesTrendingThemes";
import ReadMore from "@/components/layouts/ReadMore";
import { Summary } from "@/components/layouts/SummaryHeader";
import { BaseButton } from "qucoon-components";

export default function Feedback() {
  const insightsData = [
    { icon: "/total-feedback-icon.svg", value: 320, label: "Total Feedback" },
    {
      icon: "/summaries-positive-icon.svg",
      value: "78%",
      label: "Positive",
    },
    {
      icon: "/summaries-negative-icon.svg",
      value: "8%",
      label: "Negative",
    },
    {
      icon: "/summaries-star-icon.svg",
      value: "4.2/5",
      label: "Avg Rating",
    },
  ];

  const feedbackData = [
    { name: "Google", value: 40 },
    { name: "Facebook", value: 20 },
    { name: "Trustpilot", value: 20 },
    { name: "Yelp", value: 10 },
  ];

  const themes = [
    "Customer Service",
    "Food Delivery",
    "Product Quality",
    "Pricing",
    "Ambience",
    "After-Sales Service",
    "Ease of Use",
    "Fulfillment Speed",
    "Ethical Practices",
  ];

  return (
    <div
      className="overall-container"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        height: "100%",
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
            AI Summaries
          </p>
          <p
            style={{
              fontSize: "0.875rem",
              fontWeight: "400",
              color: "#4B5563",
            }}
          >
            Get instant insights from every review
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

      <div className="summaries-container-2">
        {insightsData.map((item, index) => (
          <InsightCard
            key={index}
            icon={item.icon}
            value={item.value}
            label={item.label}
          />
        ))}
      </div>
      <div className="summaries-container-3">
        <div>
          <p
            style={{ fontSize: "1.25rem", fontWeight: "600", color: "#4B5563" }}
          >
            Sentiment Overview
          </p>
          <p
            style={{
              fontSize: "0.875rem",
              fontWeight: "400",
              color: "#4B5563",
            }}
          >
            Sentiment distribution from all sources (15-days) window
          </p>
        </div>
        <div className="summaries-chart-section">
          <div className="summaries-chart">
            <SummariesPieChart data={feedbackData} title="Feedback Sources" />
            <SummariesTrendingThemes title="Trending Themes" themes={themes} />
          </div>
        </div>
      </div>
      <div className="summaries-container-4">
        <div className="summary-div">
          <Summary />
          <BaseButton
            text="Export As"
            textStyle={{
              color: "#4B5563",
              fontFamily: "Poppins",
              fontWeight: "400",
            }}
            style={{ background: "none", backgroundColor: "none" }}
          />
        </div>

        <div>
          <ReadMore
            text={
              <>
                Customer sentiment in the past 15 days remains strongly
                positive, reflecting a generally satisfying user experience. A
                majority of reviews emphasize{" "}
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "700",
                    color: "#F44A0E",
                  }}
                >
                  product quality, ease of use
                </span>
                , and{" "}
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: "700",
                    color: "#F44A0E",
                  }}
                >
                  responsive support
                </span>
                , contributing to a consistent rise in satisfaction levels. Many
                users described their experiences as{" "}
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "700",
                    color: "#F44A0E",
                  }}
                >
                  “smooth,” “reliable,” and “worth the value,”
                </span>{" "}
                reinforcing trust and loyalty toward the brand.
                <br /> However, a smaller portion of feedback highlights areas
                that need improvement mainly around pricing transparency and
                response time during busy periods. These recurring mentions
                suggest opportunities for better communication and clearer
                expectation management.
              </>
            }
            maxWords={1000}
          />
        </div>
      </div>
    </div>
  );
}
