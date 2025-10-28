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
import styles from "./KeywordTopics.module.css";

export default function KeywordTopics() {
  const topKeywordsOptions: ModernSelectOption[] = [
    { label: "Delivery Speed", value: "Delivery Speed" },
    { label: "Customer Service", value: "Customer Service" },
    { label: "Food Quality", value: "Food Quality" },
    { label: "Pricing", value: "Pricing" },
  ];

  return (
    <div className={styles.overallContainer}>
      <div className={styles.container1}>
        <div>
          <p className={styles.heading}>Keyword & Topics</p>
          <p className={styles.subheading}>
            Track trending topics and keywords shaping customer feedback.
          </p>
        </div>
        <div>
          <p className={styles.synced}>All data synced 10 mins ago</p>
        </div>
      </div>

      <div className={styles.container2}>
        <div className={styles.topMentionedLeft}>
          <div className={styles.topMentionedHeader}>
            <img src="/keyword-icon.svg" />
            <p className={styles.reviewTitle}>Top Mentioned Topics</p>
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
          </div>
        </div>

        <div className={styles.topMentionedRight}>
          <div className={styles.topMentionedHeader}>
            <img src="/keyword-icon.svg" />
            <p className={styles.reviewTitle}>Trending 5 Keywords</p>
          </div>
          <div>
            <TrendingKeywords feedbacks={[]} />
          </div>
        </div>
      </div>

      <div className={styles.container3}>
        <div className={styles.keywordTrendsChart}>
          <div className={styles.keywordTrendsHeader}>
            <p className={styles.chartTitle}>Keywords Trends Over Time</p>
            <div className={styles.filterGroup}>
              <BaseDatePicker />
              <ModernSelect
                placeholderLabel="Keywords"
                selectOptions={topKeywordsOptions}
                size="small"
                style={{ fontSize: "16px", color: "#667085", border: "none" }}
              />
            </div>
          </div>
          <KeywordTrendsChart />
        </div>

        <div className={styles.aiSummaryContainer}>
          <div className={styles.aiSummaryHeader}>
            <AISummary />
            <p className={styles.aiSummaryTitle}>Delivery Speed</p>
          </div>
          <ReadMore
            text="Mentions of Delivery Speed rose by 40% this week, with most feedback highlighting longer wait times during peak hours. While a few customers praised timely service during off-peak periods, 62% of mentions were negative, linking delays to frustration and lower ratings. Addressing staffing or logistics during high-demand windows could reduce complaints and improve satisfaction by up to 10%."
            maxWords={70}
          />
        </div>
      </div>

      <div className={styles.container4}>
        <div className={styles.tableHeader}>
          <p className={styles.chartTitle}>Keywords Trends Over Time</p>
          <p style={{ width: "150px" }}>This Month</p>
        </div>
        <PaginatedTable feedbacks={[]} rowsPerPage={10} />
      </div>
    </div>
  );
}
