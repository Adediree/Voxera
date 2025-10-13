"use client";

import GoogleBar from "@/components/content/dashboard/issue/allLetterOfCredit/charts/GoogleBarChart";
import GoogleBarChart from "@/components/content/dashboard/issue/allLetterOfCredit/charts/GoogleBarChart";
import StackedProgressBar from "@/components/content/dashboard/issue/allLetterOfCredit/charts/ProgressBarChart";
import TrustPilotBar from "@/components/content/dashboard/issue/allLetterOfCredit/charts/TrustPilotBarChart";
import VoxeraBar from "@/components/content/dashboard/issue/allLetterOfCredit/charts/VoxeraBarChart";
import { AISummary } from "@/components/layouts/AISummaryHeader";
import { Prediction } from "@/components/layouts/PredictionHeader";
import ReadMore from "@/components/layouts/ReadMore";
import BaseProgress from "@/components/ui/progress/BaseProgress";
import { ModernSelect, ModernSelectOption } from "qucoon-components";

export default function Feedback() {
  const StarRatingData = [
    { name: "Positive", value: 50, color: "#00B67A" },
    { name: "Neutral", value: 27, color: "#FBBC05" },
    { name: "Negative", value: 23, color: "#DC2626" },
  ];
  const GoogleData = [
    { name: "Positive", value: 70, color: "#00B67A" },
    { name: "Neutral", value: 18, color: "#FBBC05" },
    { name: "Negative", value: 10, color: "#DC2626" },
  ];
  const TrustPilotData = [
    { name: "Positive", value: 25, color: "#00B67A" },
    { name: "Neutral", value: 20, color: "#FBBC05" },
    { name: "Negative", value: 55, color: "#DC2626" },
  ];
  const VoxeraData = [
    { name: "Positive", value: 10, color: "#00B67A" },
    { name: "Neutral", value: 60, color: "#FBBC05" },
    { name: "Negative", value: 30, color: "#DC2626" },
  ];

  const predictionOptions: ModernSelectOption[] = [
    {
      label: "Last Year",
      value: "Last Year",
    },

    {
      label: "2023",
      value: "2023",
    },

    {
      label: "2022",
      value: "2022",
    },
    {
      label: "2021",
      value: "2021",
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
            Source Comparison
          </p>
          <p
            style={{
              fontSize: "0.875rem",
              fontWeight: "400",
              color: "#4B5563",
            }}
          >
            Compare how your business is performing across different review
            platforms.
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
      <div className="container-2" style={{ display: "flex", gap: "10px" }}>
        <div
          className="review-container"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            padding: "16px",
            backgroundColor: "white",
            borderRadius: "6px",
            width: "310px",
            height: "150px",
          }}
        >
          <div
            className="review-header"
            style={{ display: "flex", alignItems: "center", gap: "6px" }}
          >
            <img src="/ReviewsImage.svg" />
            <p
              className="review-title"
              style={{
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#4B5563",
              }}
            >
              Total Reviews by Source
            </p>
            <img src="/info.svg" />
          </div>
          <div className="review-chart" style={{ display: "flex" }}>
            <div
              className="review-1"
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                paddingRight: "12px",
                borderRight: "1px solid #E4E4E4",
              }}
            >
              <img
                src="/google-icon.svg"
                style={{ width: "24px", height: "24px" }}
              />
              <p>420</p>
            </div>
            <div
              className="review-2"
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                paddingLeft: "12px",
                paddingRight: "12px",
                borderRight: "1px solid #E4E4E4",
              }}
            >
              <img
                src="/trustpilot 1.svg"
                style={{ width: "24px", height: "24px" }}
              />
              <p>120</p>
            </div>
            <div
              className="review-3"
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                paddingLeft: "12px",
                paddingRight: "12px",
              }}
            >
              <img
                src="/Voxera-Submark 2.svg"
                style={{ width: "24px", height: "24px" }}
              />
              <p>500</p>
            </div>
          </div>
        </div>
        <div
          className="average-sentiment-container"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            padding: "16px",
            backgroundColor: "white",
            borderRadius: "6px",
            width: "310px",
            height: "150px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              className="review-header"
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
            >
              <img src="/Emoji-Image.svg" />
              <p
                className="review-title"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#4B5563",
                }}
              >
                Average Sentiment
              </p>
              <img src="/info.svg" />
            </div>
            <p
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "#4B5563",
              }}
            >
              65%
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <BaseProgress currentProgressValue={65} />
            <p style={{ fontSize: "0.6875rem", fontWeight: "400" }}>
              Overall customer sentiment across each source.
            </p>
          </div>
        </div>
        <div
          className="star-rating-container"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            padding: "16px",
            backgroundColor: "white",
            borderRadius: "6px",
            width: "310px",
            height: "150px",
          }}
        >
          <div
            className="review-header"
            style={{ display: "flex", alignItems: "center", gap: "6px" }}
          >
            <img src="/Star-Rating-Image.svg" />
            <p
              className="review-title"
              style={{
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#4B5563",
              }}
            >
              Star Rating Trend
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <StackedProgressBar data={StarRatingData} height={25} />
            <div className="rating" style={{ display: "flex", gap: "8px" }}>
              <div
                style={{ display: "flex", gap: "4px", alignItems: "center" }}
              >
                <img src="/star-rate.svg" />
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: "500",
                    color: "#4B5563",
                  }}
                >
                  4.8
                </p>
              </div>
              <div
                style={{ display: "flex", gap: "4px", alignItems: "flex-end" }}
              >
                <img src="/trend-up-fill.svg" />
                <p
                  style={{
                    fontSize: "0.625rem",
                    fontWeight: "500",
                    color: "#34A853",
                  }}
                >
                  +23%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-3"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          padding: "16px",
          backgroundColor: "white",
          borderRadius: "6px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            className="sentiment-source-container"
            style={{
              display: "flex",
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
              Sentiment By Source
            </p>
            <p
              style={{
                fontSize: "0.875rem",
                fontWeight: "400",
                color: "#4B5563",
              }}
            >
              Reviews
            </p>
          </div>
          <div
            className="PNN-review-chart"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div
              className="PNN container"
              style={{ display: "flex", gap: "8px" }}
            >
              <div
                style={{ display: "flex", gap: "4px", alignItems: "center" }}
              >
                <img src="/positive-circle.svg" />
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "400",
                    color: "#4B5563",
                  }}
                >
                  Positive
                </p>
              </div>
              <div
                style={{ display: "flex", gap: "4px", alignItems: "center" }}
              >
                <img src="/neutral-circle.svg" />
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "400",
                    color: "#4B5563",
                  }}
                >
                  Neutral
                </p>
              </div>
              <div
                style={{ display: "flex", gap: "4px", alignItems: "center" }}
              >
                <img src="/negative-circle.svg" />
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "400",
                    color: "#4B5563",
                  }}
                >
                  Negative
                </p>
              </div>
            </div>
            <div className="review-chart" style={{ display: "flex" }}>
              <div
                className="review-1"
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                  paddingRight: "12px",
                  borderRight: "1px solid #E4E4E4",
                }}
              >
                <img
                  src="/google-icon.svg"
                  style={{ width: "18px", height: "18px" }}
                />
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    color: "#4B5563",
                  }}
                >
                  420
                </p>
              </div>
              <div
                className="review-2"
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                  paddingLeft: "12px",
                  paddingRight: "12px",
                  borderRight: "1px solid #E4E4E4",
                }}
              >
                <img
                  src="/trustpilot 1.svg"
                  style={{ width: "18px", height: "18px" }}
                />
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    color: "#4B5563",
                  }}
                >
                  120
                </p>
              </div>
              <div
                className="review-3"
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                  paddingLeft: "12px",
                  paddingRight: "12px",
                }}
              >
                <img
                  src="/Voxera-Submark 2.svg"
                  style={{ width: "18px", height: "18px" }}
                />
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    color: "#4B5563",
                  }}
                >
                  500
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              alignItems: "center",
              width: "fit-content",
              // border: "1px solid",
            }}
          >
            <GoogleBar data={GoogleData} height={40} />
            <div
              className=""
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                paddingRight: "12px",
              }}
            >
              <img
                src="/google-icon.svg"
                style={{ width: "18px", height: "18px" }}
              />
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "450",
                  color: "#4B5563",
                }}
              >
                Google
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              alignItems: "center",
              width: "fit-content",
              // border: "1px solid",
            }}
          >
            <TrustPilotBar data={TrustPilotData} height={40} />
            <div
              className=""
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                paddingRight: "12px",
              }}
            >
              <img
                src="/trustpilot 1.svg"
                style={{ width: "18px", height: "18px" }}
              />
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "450",
                  color: "#4B5563",
                }}
              >
                TrustPilot
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              alignItems: "center",
              width: "fit-content",
              // border: "1px solid",
            }}
          >
            <VoxeraBar data={VoxeraData} height={40} />
            <div
              className=""
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                paddingRight: "12px",
              }}
            >
              <img
                src="/Voxera-Submark 2.svg"
                style={{ width: "18px", height: "18px" }}
              />
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "450",
                  color: "#4B5563",
                }}
              >
                Voxera
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-4"
        style={{
          display: "flex",
          gap: "4px",
          justifyContent: "space-between",
          paddingBottom: "2rem",
        }}
      >
        <div
          className="ai-summary-container"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            backgroundColor: "white",
            borderRadius: "8px",
            gap: "12px",
            width: "400px",
            height: "260px",
            // border: "1px solid",
          }}
        >
          <AISummary />
          <p
            style={{ fontSize: "0.9rem", fontWeight: "600", color: "#4B5563" }}
          >
            Keypoints
          </p>
          <ReadMore
            text="Most customers express satisfaction with the friendly staff and fast delivery, though a number of reviews highlight delays during peak hours. Pricing is generally perceived as fair, with little variation in opinion"
            maxWords={30}
          />
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <img
                src="/person-icon.svg"
                style={{ width: "24px", height: "24px" }}
              />
            </button>
            <button
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <img
                src="/copy-icon.svg"
                style={{ width: "24px", height: "24px" }}
              />
            </button>
          </div>
        </div>
        <div
          className="prediction-container"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            backgroundColor: "white",
            borderRadius: "8px",
            gap: "40px",
            width: "520px",
            height: "260px",
            // border: "1px solid",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "8px",
              justifyContent: "space-between",
            }}
          >
            <Prediction />
            <ModernSelect
              placeholderLabel="Last Year"
              // onOptionSelect={}
              selectOptions={predictionOptions}
              size="small"
              // label="Top Keywords"
              style={{
                fontSize: "16px",
                color: "#667085",
                width: "150px",
                border: "none",
              }}
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <div style={{ width: "366px" }}>
              <ReadMore
                text={
                  <>
                    Customer sentiment is expected to stay positive over the
                    next{" "}
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: "700",
                        color: "#4B5563",
                      }}
                    >
                      30 days
                    </span>
                    , boosted by praise for staff and service quality.🚀
                    Positive reviews may grow{" "}
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: "700",
                        color: "#4B5563",
                      }}
                    >
                      (+5%)
                    </span>
                    , but unresolved delays could cause satisfaction to drop by{" "}
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: "700",
                        color: "#4B5563",
                      }}
                    >
                      12%
                    </span>{" "}
                    during peak hours.
                  </>
                }
                maxWords={50}
              />
            </div>
            <button
              style={{
                display: "flex",
                gap: "2px",
                alignItems: "center",
                width: "fit-content",
                background: "none",
                border: "none",
              }}
            >
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#F44A0E",
                  borderBottom: "1px solid",
                }}
              >
                Create Action Plan
              </p>
              <img src="/arrow-right.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
