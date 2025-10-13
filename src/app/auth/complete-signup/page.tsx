"use client";

import { useRouter } from "next/navigation";
import { RouteConstant } from "@/utilities/constants/routeConstant";
import "./otpVerification.css";

export default function OtpVerificationPage() {
  const router = useRouter();

  return (
    <div className="otp-page-wrapper">
      <div className="otp-content">
        <img src="/Email-Icon.svg" width={60} alt="Email Icon" />
        <h1>Confirmation Email Sent!</h1>
        <p>
          We’ve sent a verification link to{" "}
          <strong>fagbayibooluwaseguu@gmail.com</strong>. Please check your
          inbox and click the link to confirm your account.
        </p>
      </div>

      <div className="otp-buttons">
        <button className="otp-link-button">Resend email</button>
        <button
          className="otp-link-button"
          onClick={() => router.push(RouteConstant.auth.verifyOtp.path)}
        >
          Go to mail
        </button>
      </div>
    </div>
  );
}
