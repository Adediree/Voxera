"use client";
import { useRouter } from "next/navigation";
import { RouteConstant } from "@/utilities/constants/routeConstant";
import { BaseButton } from "qucoon-components";

const CompleteSignupForm = () => {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        // paddingTop: "60px",
      }}
    >
      <img src="/Email-Icon.svg" width={60} />
      <h1 style={{ fontSize: "1.4rem" }}>Confirmation Email Sent!</h1>
      <p style={{ fontSize: "1rem" }}>
        We’ve sent a verification link to fagbayibooluwaseguu@gmail.com. Please
        check your inbox and click the link to confirm your account.
      </p>
      <div style={{ display: "flex", gap: "24px" }}>
        <button
          style={{
            background: "none",
            border: "none",
            borderBottom: "1px solid",
            cursor: "pointer",
          }}
        >
          Resend email
        </button>
        <button
          style={{
            background: "none",
            border: "none",
            borderBottom: "1px solid",
            cursor: "pointer",
          }}
          onClick={() => router.push(RouteConstant.auth.verifyOtp.path)}
        >
          Go to email
        </button>
      </div>
    </div>
  );
};

export default CompleteSignupForm;
