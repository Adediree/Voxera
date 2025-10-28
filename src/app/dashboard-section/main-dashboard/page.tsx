"use client";
import FeedbackChart from "@/components/content/dashboard/issue/allLetterOfCredit/charts/FeedbackChart";
import FeedbackVolumeChart from "@/components/content/dashboard/issue/allLetterOfCredit/charts/FeedbackVolumeChart";
import DynamicKeywordsCloud from "@/components/content/dashboard/issue/allLetterOfCredit/charts/Keywords";
import OvertimeChart from "@/components/content/dashboard/issue/allLetterOfCredit/charts/OvertimeChart";
import PieChart from "@/components/content/dashboard/issue/allLetterOfCredit/charts/Piechart";
import PositiveChart from "@/components/content/dashboard/issue/allLetterOfCredit/charts/PositiveChart";
import RecentFeedback from "@/components/content/dashboard/issue/allLetterOfCredit/charts/RecentFeedbackChart";
import Sentiment from "@/components/content/dashboard/issue/allLetterOfCredit/charts/Sentiment";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const feedbackData = [
    { name: "Google", value: 40 },
    { name: "Facebook", value: 20 },
    { name: "Trustpilot", value: 20 },
    { name: "Yelp", value: 10 },
  ];

  return (
    <div className={`${styles.overallContainer} overall-container`}>
      <h1 className={styles.dashboardTitle}>Dashboard</h1>

      <div className={`${styles.mainContainer} main-container`}>
        <div className={`${styles.container1} container-1`}>
          <div className={styles.chartRow}>
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

        <div className={`${styles.container2} container-2`}>
          <div>
            <Sentiment />
          </div>

          <DynamicKeywordsCloud />

          <div className={styles.pieChartContainer}>
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
