"use client";
import { useRouter, useSearchParams } from "next/navigation";
import "@/components/ui/form/form.css";
import { BaseButton, BaseInput } from "qucoon-components";
import { useFormik } from "formik";
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
  // Get the 'token' parameter from the URL
  const token = searchParams.get("token");

  const handleCompleteEnrollment = async (token: string) => {
    let isEnrollmentSuccessful = false;
    const response = await completeEnrollment({ token }).unwrap();
    if (BaseUtil.isApiResponseSuccessful(response)) {
      BaseToast({
        message: response?.responseMessage,
        type: "success",
      });
    }
    if (isEnrollmentSuccessful) {
      router.push(RouteConstant.auth.verifyOtp.path); // or your success page
    } else {
      router.push(RouteConstant.auth.signup.path); // fallback to signup
    }

    // const action = await dispatch(authentication.action.completeEnrollment(request));
    // const response = action.payload as CompleteEnrollmentResponse;
    // if (response.responseCode == BaseEnum.RESPONSE_CODE_SUCCESS) {
    //     BaseToast({
    //         message: response?.responseMessage,
    //         type: 'success',
    //     });
    //     if (response?.token) {
    //         navigate(RouteConstant.dashboard.home.path)
    //     }
    //     router.push(RouteConstant.authentication.login.path)
    // }
  };

  useEffect(() => {
    if (token) {
      console.log("Token:", token);
      handleCompleteEnrollment(token);

      // dispatch(authStore.mutation.setToken(`Bearer ${token}`))

      // Perform actions with the token (e.g., send it to the backend for validation)
    }
  }, [token]);

  if (isLoading === true) {
    return <div>Loading...</div>;
  }

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
};
