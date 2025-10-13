"use client";
import {
  BaseButton,
  BaseCheckbox,
  BaseInput,
  BasePhoneNumberInput,
} from "qucoon-components";
import {
  InitiateEnrollmentRequest,
  initiateEnrollmentRequestInit,
} from "@/models/requests/authentication/initiateEnrollmentRequest";
import { AuthenticationValidation } from "@/models/validations/authenticationValidation";
import { useFormik } from "formik";
import { completeEnrollmentRequestInit } from "@/models/requests/authentication/completeEnrollmentRequest";
import {
  useCompleteEnrollmentMutation,
  useInitiateEnrollmentMutation,
  useResendOtpMutation,
} from "@/services/authenticationService";
import { useRouter } from "next/navigation";
import BaseToast from "@/components/ui/toast/BaseToast";
import { useOtp } from "@/utilities/context/otpContext";
import { BaseUtil } from "@/utilities/baseUtil";
import { RouteConstant } from "@/utilities/constants/routeConstant";

const InitiateSignupForm = (
  props: React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >
) => {
  const router = useRouter();
  const [initiateEnrollment, { isLoading }] = useInitiateEnrollmentMutation();
  const [completeEnrollment] = useCompleteEnrollmentMutation();
  const [resendOtp] = useResendOtpMutation();
  const { showOtp } = useOtp();

  const handleSignUp = async (values: typeof initialValues) => {
    try {
      const request: InitiateEnrollmentRequest = {
        ...initiateEnrollmentRequestInit,
        ...values,
      };

      const response = await initiateEnrollment(request).unwrap();
      if (BaseUtil.isApiResponseSuccessful(response)) {
        BaseToast({
          message:
            response?.responseMessage || "Enrollment initiated successfully!",
          type: "success",
        });
        showOtp({
          title: "Verify Your Email",
          subtitle: `We've sent a 6-digit code to ${request.userEmail}`,
          onValidOtpEntered: async (otp) => {
            const completeEnrollmentResponse = await completeEnrollment({
              otp,
              userEmail: request.userEmail,
            }).unwrap();
            if (BaseUtil.isApiResponseSuccessful(completeEnrollmentResponse)) {
              BaseToast({
                message: "Enrollment completed successfully!",
                type: "success",
              });
              router.push(RouteConstant.auth.login.path);
            }
            // Complete signup with OTP
            // dispatch(authStore.mutation.setCompleteEnrollmentFlowPayload({
            //     ...authState?.completeEnrollmentFlowPayload, ...request,
            //     otp: otp
            // }))
            // router.push(RouteConstant.auth.completeSignup.path)
          },
          onResend: async () => {
            console.log("Otp resend");
            await resendOtp({ userEmail: values.userEmail });
          },
        });
      }
    } catch (err: any) {
      console.error("Enrollment initiation failed:", err);
    }
  };
  const initialValues = {
    ...initiateEnrollmentRequestInit,
    ...completeEnrollmentRequestInit,
  };
  const formik = useFormik({
    initialValues,
    onSubmit: handleSignUp,
    validationSchema: AuthenticationValidation.initiateEnrollment,
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        // width:"100vw"
      }}
    >
      <form
        className={"form"}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
        {...props}
      >
        <div
          className={"form-input-container"}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            gap: "8px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              paddingBottom: "8px",
            }}
          >
            <img src="/Voxera-Logo-Black-1.svg" />
            <p>
              Sign up to analyze reviews, benchmark against competitors, and
              uncover market trends that drive business growth.
            </p>
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            <BaseButton
              text="Sign up with Google"
              textStyle={{ color: "black" }}
              style={{
                backgroundColor: "white",
                border: "1px solid",
                borderColor: "#D0D5DD",
              }}
            />
            <BaseButton
              text="Sign up with Facebook"
              textStyle={{ color: "black" }}
              style={{
                backgroundColor: "white",
                border: "1px solid",
                borderColor: "#D0D5DD",
              }}
            />
          </div>
          <div>
            <p>Or</p>
          </div>
          <div className={"form-input-flex-group"}></div>
          <div>
            <BaseInput
              label="Email Address"
              name={"userEmail"}
              inputProps={{ placeholder: "Email address" }}
              formik={formik}
              style={{ width: "385px" }}
            />
          </div>
          <div style={{ display: "flex", gap: "2px", paddingTop: "24px" }}>
            <BaseCheckbox />
            <h3
              style={{
                fontSize: "0.9rem",
                fontWeight: "500",
                color: "#344054",
                paddingBottom: "8px",
              }}
            >
              I agree to the Terms of Service and Privacy Policy.
            </h3>
          </div>
        </div>
        <div className={"form-input-container"}>
          <div>
            <BaseButton
              text={"Sign Up"}
              // type="submit"
              // onClick={() => formik.handleSubmit()}
              isLoading={isLoading}
              onClick={() =>
                router.push(RouteConstant.auth.completeSignup.path)
              }
              textStyle={{ color: "black" }}
              style={{ width: "160px", backgroundColor: "#F44A0E54" }}
            />
          </div>
          <div
            style={{ display: "flex", gap: "4px", justifyContent: "center" }}
          >
            <p>Already have an account?</p>
            <BaseButton
              text="Log in"
              textStyle={{ color: "#EA4335", fontFamily: "Poppins", fontSize: "0.9rem" }}
              style={{
                backgroundColor: "white",
                border: "none",
                padding: "0px",
                // borderColor: "#D0D5DD",
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default InitiateSignupForm;
