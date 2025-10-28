"use client";

import AllFeedbackTable from "@/components/content/dashboard/issue/allLetterOfCredit/charts/All-Feedback-Table";
import {
  BaseDatePicker,
  ModernSelect,
  type ModernSelectOption,
} from "qucoon-components";
import styles from "./AllFeedback.module.css";

export default function AllFeedback() {
  const platform: ModernSelectOption[] = [
    { label: "Delivery Speed", value: "Delivery Speed" },
    { label: "Customer Service", value: "Customer Service" },
    { label: "Food Quality", value: "Food Quality" },
    { label: "Pricing", value: "Pricing" },
  ];
  const sentiment: ModernSelectOption[] = [...platform];
  const dateRange: ModernSelectOption[] = [...platform];

  return (
    <div className={styles.overallContainer}>
      <div className={styles.container1}>
        <div>
          <p className={styles.title}>All Feedback</p>
          <p className={styles.subtitle}>
            Track live customer feedback from all connected sources
          </p>
        </div>
        <div>
          <p className={styles.subtitle}>All data synced 10 mins ago</p>
        </div>
      </div>

      <div className={styles.container4}>
        <div className={styles.filterBar}>
          <div className={styles.filterGroup}>
            <img src="/platform.svg" />
            <ModernSelect
              placeholderLabel="Platform"
              selectOptions={platform}
              size="small"
              style={{
                fontSize: "16px",
                color: "#667085",
                border: "none",
              }}
            />
          </div>
          <div className={styles.filterGroup}>
            <img src="/sentiment.svg" />
            <ModernSelect
              placeholderLabel="Sentiment"
              selectOptions={sentiment}
              size="small"
              style={{
                fontSize: "16px",
                color: "#667085",
                border: "none",
              }}
            />
          </div>
          <BaseDatePicker />
        </div>

        <AllFeedbackTable feedbacks={[]} rowsPerPage={10} />
      </div>
    </div>
  );
}
