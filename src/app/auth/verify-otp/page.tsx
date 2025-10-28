"use client";

import { useRouter } from "next/navigation";
import { RouteConstant } from "@/utilities/constants/routeConstant";
import styles from "./OtpVerificationPage.module.css"; // ✅ import CSS module

export default function OtpVerificationPage() {
  const router = useRouter();

  return (
    <div className={styles.otpWrapper}>
      <div className={styles.otpContent}>
        <img src="/Ellipse 1.svg" width={60} alt="Verified" />
        <h1>Your account is verified!</h1>
        <p>
          You're all set to start transforming customer feedback into business
          insights.
        </p>
      </div>
      <p className={styles.redirectText}>Redirecting you to your onboarding…</p>
      <button
        onClick={() => router.push(RouteConstant.onBoarding.onBoarding.path)}
      >
        onboarding
      </button>
    </div>
  );
}
