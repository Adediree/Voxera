"use client";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./completeSignup.module.css"; // ✅ use CSS module
import { BaseButton, BaseInput } from "qucoon-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/stores";
import { useEffect } from "react";
import { AppDispatch } from "@/configs/storeConfig";
import { useCompleteEnrollmentMutation } from "@/services/authenticationService";
import { BaseUtil } from "@/utilities/baseUtil";
import BaseToast from "@/components/ui/toast/BaseToast";
import { RouteConstant } from "@/utilities/constants/routeConstant";
import { authStore } from "@/stores/authStore";
import { completeEnrollmentRequestInit } from "@/models/requests/authentication/completeEnrollmentRequest";

const CompleteSignupForm = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [completeEnrollment, { isLoading }] = useCompleteEnrollmentMutation();
  const authState = useSelector((state: RootState) => state.auth);
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const handleCompleteEnrollment = async (token: string) => {
    let isEnrollmentSuccessful = false;

    try {
      const response = await completeEnrollment({ token }).unwrap();
      if (BaseUtil.isApiResponseSuccessful(response)) {
        BaseToast({
          message: response?.responseMessage,
          type: "success",
        });
        isEnrollmentSuccessful = true;
      }
    } catch (error) {
      console.error("Error completing enrollment:", error);
      BaseToast({
        message: "Enrollment failed. Please try again.",
        type: "error",
      });
    }

    if (isEnrollmentSuccessful) {
      router.push(RouteConstant.auth.verifyOtp.path);
    } else {
      router.push(RouteConstant.auth.signup.path);
    }
  };

  useEffect(() => {
    if (token) {
      console.log("Token:", token);
      handleCompleteEnrollment(token);
    }
  }, [token]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.otpPageWrapper}>
      <div className={styles.otpContent}>
        <img src="/Email-Icon.svg" width={60} alt="Email Icon" />
        <h1>Confirmation Email Sent!</h1>
        <p>
          We’ve sent a verification link to{" "}
          <strong>fagbayibooluwaseguu@gmail.com</strong>. Please check your
          inbox and click the link to confirm your account.
        </p>
      </div>

      <div className={styles.otpButtons}>
        <button className={styles.otpLinkButton}>Resend email</button>
        <button
          className={styles.otpLinkButton}
          onClick={() => router.push(RouteConstant.auth.verifyOtp.path)}
        >
          Go to mail
        </button>
      </div>
    </div>
  );
};

export default CompleteSignupForm;
