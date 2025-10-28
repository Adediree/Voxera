"use client";
import BaseProgress from "@/components/ui/progress/BaseProgress";
import { RouteConstant } from "@/utilities/constants/routeConstant";
import { useRouter } from "next/navigation";
import styles from "./Feedback.module.css";

export default function Feedback() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <img src="/complete-feedback.svg" alt="Complete Feedback" />

      <div className={styles.textSection}>
        <p className={styles.subText}>Preparing your competitive edge</p>
        <p className={styles.mainText}>
          Almost there — your insights are being tailored
        </p>
        <p className={styles.subText}>Detecting conversation patterns</p>
      </div>

      <BaseProgress currentProgressValue={50} />

      <p className={styles.subText}>Processing may take a few minutes.</p>

      <button
        className={styles.dashboardButton}
        onClick={() =>
          router.push(RouteConstant.dashboardSection.mainDashboard.path)
        }
      >
        dashboard
      </button>
    </div>
  );
}
