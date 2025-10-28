"use client";

import GoogleBar from "@/components/content/dashboard/issue/allLetterOfCredit/charts/GoogleBarChart";
import StackedProgressBar from "@/components/content/dashboard/issue/allLetterOfCredit/charts/ProgressBarChart";
import TrustPilotBar from "@/components/content/dashboard/issue/allLetterOfCredit/charts/TrustPilotBarChart";
import VoxeraBar from "@/components/content/dashboard/issue/allLetterOfCredit/charts/VoxeraBarChart";
import { AISummary } from "@/components/layouts/AISummaryHeader";
import { Prediction } from "@/components/layouts/PredictionHeader";
import ReadMore from "@/components/layouts/ReadMore";
import BaseProgress from "@/components/ui/progress/BaseProgress";
import { ModernSelect, ModernSelectOption } from "qucoon-components";
import styles from "./SourceComparison.module.css";

export default function SourceComparison() {
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
    <div className={`overall-container ${styles.overallContainer}`}>
      <div className={`container-1 ${styles.container1}`}>
        <div>
          <p className={styles.headerTitle}>Source Comparison</p>
          <p className={styles.headerSubtitle}>
            Compare how your business is performing across different review
            platforms.
          </p>
        </div>
        <div>
          <p className={styles.lastSync}>All data synced 10 mins ago</p>
        </div>
      </div>
      <div className={`container-2 ${styles.container2}`}>
        <div className={`review-container ${styles.reviewContainer}`}>
          <div className={`review-header ${styles.reviewHeader}`}>
            <img src="/ReviewsImage.svg" alt="reviews" />
            <p className={`review-title ${styles.reviewTitle}`}>
              Total Reviews by Source
            </p>
            <img src="/info.svg" alt="info" />
          </div>
          <div className={`review-chart ${styles.reviewChart}`}>
            <div className={`review-1 ${styles.review1}`}>
              <img
                src="/google-icon.svg"
                className={styles.icon24}
                alt="google"
              />
              <p>420</p>
            </div>
            <div className={`review-2 ${styles.review2}`}>
              <img
                src="/trustpilot 1.svg"
                className={styles.icon24}
                alt="trustpilot"
              />
              <p>120</p>
            </div>
            <div className={`review-3 ${styles.review3}`}>
              <img
                src="/Voxera-Submark 2.svg"
                className={styles.icon24}
                alt="voxera"
              />
              <p>500</p>
            </div>
          </div>
        </div>
        <div
          className={`average-sentiment-container ${styles.averageSentimentContainer}`}
        >
          <div className={styles.avgSentimentHeader}>
            <div className={styles.reviewHeader}>
              <img src="/Emoji-Image.svg" alt="emoji" />
              <p className={`review-title ${styles.reviewTitle}`}>
                Average Sentiment
              </p>
              <img src="/info.svg" alt="info" />
            </div>
            <p className={styles.avgPercent}>65%</p>
          </div>
          <div className={styles.progressColumn}>
            <BaseProgress currentProgressValue={65} />
            <p className={styles.progressNote}>
              Overall customer sentiment across each source.
            </p>
          </div>
        </div>
        <div className={`star-rating-container ${styles.starRatingContainer}`}>
          <div className={styles.reviewHeader}>
            <img src="/Star-Rating-Image.svg" alt="star" />
            <p className={`review-title ${styles.reviewTitle}`}>
              Star Rating Trend
            </p>
          </div>
          <div className={styles.progressColumn}>
            <StackedProgressBar data={StarRatingData} height={25} />
            <div className={`rating ${styles.rating}`}>
              <div className={styles.ratingValue}>
                <img src="/star-rate.svg" alt="rate" />
                <p className={styles.ratingText}>4.8</p>
              </div>
              <div className={styles.ratingTrend}>
                <img src="/trend-up-fill.svg" alt="trend" />
                <p className={styles.trendText}>+23%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`container-3 ${styles.container3}`}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            className={`sentiment-source-container ${styles.sentimentSourceContainer}`}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p className={styles.sentimentBySource}>Sentiment By Source</p>
            <p className={styles.reviewsLabel}>Reviews</p>
          </div>
          <div
            className={`PNN-review-chart ${styles.PNNReviewChart}`}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div
              className={`PNN container ${styles.PNNContainer}`}
              style={{ display: "flex", gap: "8px" }}
            >
              <div
                style={{ display: "flex", gap: "4px", alignItems: "center" }}
              >
                <img src="/positive-circle.svg" alt="positive" />
                <p className={styles.smallText}>Positive</p>
              </div>
              <div
                style={{ display: "flex", gap: "4px", alignItems: "center" }}
              >
                <img src="/neutral-circle.svg" alt="neutral" />
                <p className={styles.smallText}>Neutral</p>
              </div>
              <div
                style={{ display: "flex", gap: "4px", alignItems: "center" }}
              >
                <img src="/negative-circle.svg" alt="negative" />
                <p className={styles.smallText}>Negative</p>
              </div>
            </div>
            <div className={`review-chart ${styles.reviewChart}`}>
              <div className={styles.review1Small}>
                <img src="/google-icon.svg" className={styles.icon18} alt="g" />
                <p className={styles.smallNumber}>420</p>
              </div>
              <div className={styles.review2Small}>
                <img
                  src="/trustpilot 1.svg"
                  className={styles.icon18}
                  alt="t"
                />
                <p className={styles.smallNumber}>120</p>
              </div>
              <div className={styles.review3Small}>
                <img
                  src="/Voxera-Submark 2.svg"
                  className={styles.icon18}
                  alt="v"
                />
                <p className={styles.smallNumber}>500</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.compareBarsRow}>
          <div className={styles.barBlock}>
            <GoogleBar data={GoogleData} height={40} />
            <div className={styles.barLabel}>
              <img src="/google-icon.svg" className={styles.icon18} alt="g" />
              <p className={styles.barText}>Google</p>
            </div>
          </div>
          <div className={styles.barBlock}>
            <TrustPilotBar data={TrustPilotData} height={40} />
            <div className={styles.barLabel}>
              <img src="/trustpilot 1.svg" className={styles.icon18} alt="t" />
              <p className={styles.barText}>TrustPilot</p>
            </div>
          </div>
          <div className={styles.barBlock}>
            <VoxeraBar data={VoxeraData} height={40} />
            <div className={styles.barLabel}>
              <img
                src="/Voxera-Submark 2.svg"
                className={styles.icon18}
                alt="v"
              />
              <p className={styles.barText}>Voxera</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`container-4 ${styles.container4}`}>
        <div className={`ai-summary-container ${styles.aiSummaryContainer}`}>
          <AISummary />
          <p className={styles.keypoints}>Keypoints</p>
          <ReadMore
            text="Most customers express satisfaction with the friendly staff and fast delivery, though a number of reviews highlight delays during peak hours. Pricing is generally perceived as fair, with little variation in opinion"
            maxWords={30}
          />
          <div className={styles.iconRow}>
            <button className={styles.iconButton}>
              <img
                src="/person-icon.svg"
                className={styles.icon24}
                alt="person"
              />
            </button>
            <button className={styles.iconButton}>
              <img src="/copy-icon.svg" className={styles.icon24} alt="copy" />
            </button>
          </div>
        </div>
        <div className={`prediction-container ${styles.predictionContainer}`}>
          <div className={styles.predictionHeader}>
            <Prediction />
            <ModernSelect
              placeholderLabel="Last Year"
              selectOptions={predictionOptions}
              size="small"
              className={styles.modernSelect}
            />
          </div>
          <div className={styles.predictionBody}>
            <div style={{ width: "366px" }}>
              <ReadMore
                text={
                  <>
                    Customer sentiment is expected to stay positive over the
                    next <span className={styles.highlight}>30 days</span>,
                    boosted by praise for staff and service quality.🚀 Positive
                    reviews may grow{" "}
                    <span className={styles.highlight}>(+5%)</span>, but
                    unresolved delays could cause satisfaction to drop by{" "}
                    <span className={styles.highlight}>12%</span> during peak
                    hours.
                  </>
                }
                maxWords={50}
              />
            </div>
            <button className={styles.createActionButton}>
              <p className={styles.createActionText}>Create Action Plan</p>
              <img src="/arrow-right.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
