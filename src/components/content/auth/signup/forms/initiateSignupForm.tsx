"use client";
import styles from "./form.module.css";
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
        router.push(RouteConstant.auth.completeSignup.path);
      } else {
        BaseToast({
          message: response?.responseMessage || "Signup failed.",
          type: "error",
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
    <div className={styles.pageContainer}>
      <form className={styles.form} {...props}>
        <div className={styles.formInputContainer}>
          <div className={styles.headerContainer}>
            <img src="/Voxera-Logo-Black-1.svg" alt="Voxera logo" />
            <p>
              Sign up to analyze reviews, benchmark against competitors, and
              uncover market trends that drive business growth.
            </p>
          </div>

          <div className={styles.socialButtonGroup}>
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

          <div className={styles.formInputFlexGroup}></div>

          <div>
            <BaseInput
              label="Email Address"
              name={"userEmail"}
              inputProps={{ placeholder: "Email address" }}
              formik={formik}
              style={{ width: "385px" }}
            />
          </div>

          <div className={styles.checkboxRow}>
            <BaseCheckbox />
            <h3 className={styles.checkboxLabel}>
              I agree to the Terms of Service and Privacy Policy.
            </h3>
          </div>
        </div>

        <div className={styles.formInputContainer}>
          <div>
            <BaseButton
              text={"Sign Up"}
              type="submit"
              isLoading={isLoading}
              textStyle={{ color: "black" }}
              style={{ width: "160px", backgroundColor: "#F44A0E54" }}
            />
          </div>

          <div className={styles.loginRow}>
            <p>Already have an account?</p>
            <BaseButton
              text="Log in"
              textStyle={{
                color: "#EA4335",
                fontFamily: "Poppins",
                fontSize: "0.9rem",
              }}
              style={{
                backgroundColor: "white",
                border: "none",
                padding: "0px",
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default InitiateSignupForm;
