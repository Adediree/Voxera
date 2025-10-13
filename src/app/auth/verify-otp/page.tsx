"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useOtp } from "@/utilities/context/otpContext";
import OtpLayout from "@/components/layouts/otpLayout";
import AuthLayout from "@/components/layouts/authLayout";
import { RouteConstant } from "@/utilities/constants/routeConstant";

export default function OtpVerificationPage() {
  // const {config} = useOtp()
  const router = useRouter();

  // useEffect(() => {
  //     if (!config) {
  //         // Redirect if no config exists (user accessed directly)
  //         router.push('/')
  //     }
  // }, [config, router])

  // if (!config) {
  //     return <div>Loading...</div>
  // }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "60px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img src="/Ellipse 1.svg" width={60} />
        <h1 style={{ fontSize: "1.4rem" }}>Your account is verified!</h1>
        <p style={{ fontSize: "1rem" }}>
          You're all set to start transforming customer feedback into business
          insights.
        </p>
      </div>
      <p style={{ fontSize: "1rem" }}>Redirecting you to your onboarding…</p>
      <button onClick={() => router.push(RouteConstant.onBoarding.onBoarding.path)}>
        onboarding
      </button>
    </div>
  );
}
