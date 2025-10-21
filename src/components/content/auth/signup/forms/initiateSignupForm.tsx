"use client";

import { BaseButton, BaseCheckbox, BaseInput } from "qucoon-components";
import {
  InitiateEnrollmentRequest,
  initiateEnrollmentRequestInit,
} from "@/models/requests/authentication/initiateEnrollmentRequest";
import { AuthenticationValidation } from "@/models/validations/authenticationValidation";
import { useFormik } from "formik";
import { useInitiateEnrollmentMutation } from "@/services/authenticationService";
import { useRouter } from "next/navigation";
import BaseToast from "@/components/ui/toast/BaseToast";
import { BaseUtil } from "@/utilities/baseUtil";
import { RouteConstant } from "@/utilities/constants/routeConstant";

const InitiateSignupForm = () => {
  const router = useRouter();
  const [initiateEnrollment, { isLoading }] = useInitiateEnrollmentMutation();

  // ✅ Form submission handler
  const handleSignUp = async (values: typeof initiateEnrollmentRequestInit) => {
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

        // ✅ Redirect to complete signup after success
        router.push(RouteConstant.auth.completeSignup.path);
      } else {
        BaseToast({
          message: response?.responseMessage || "Signup failed.",
          type: "error",
        });
      }
    } catch (err: any) {
      console.error("Enrollment initiation failed:", err);
      BaseToast({
        message: "An error occurred while signing up.",
        type: "error",
      });
    }
  };

  // ✅ Initial values and formik setup
  const formik = useFormik({
    initialValues: initiateEnrollmentRequestInit,
    onSubmit: handleSignUp,
    validationSchema: AuthenticationValidation.initiateEnrollment,
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form
        className="form"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
        onSubmit={formik.handleSubmit}
      >
        {/* Header */}
        <div
          className="form-input-container"
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
            <img src="/Voxera-Logo-Black-1.svg" alt="Logo" />
            <p>
              Sign up to analyze reviews, benchmark against competitors, and
              uncover market trends that drive business growth.
            </p>
          </div>

          {/* Email Input */}
          <div>
            <BaseInput
              label="Email Address"
              name="userEmail"
              inputProps={{ placeholder: "Email address" }}
              formik={formik}
              style={{ width: "385px" }}
            />
            {formik.touched.userEmail && formik.errors.userEmail && (
              <div style={{ color: "red", fontSize: "0.8rem" }}>
                {formik.errors.userEmail}
              </div>
            )}
          </div>

          {/* Terms Checkbox */}
          <div style={{ display: "flex", gap: "4px", paddingTop: "24px" }}>
            <BaseCheckbox
              name="termsAccepted"
              checked={formik.values.termsAccepted}
              onChange={(e) =>
                formik.setFieldValue("termsAccepted", e.target.checked)
              }
            />
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

        {/* Submit Button */}
        <div className="form-input-container" style={{ marginTop: "16px" }}>
          <BaseButton
            text="Sign Up"
            type="submit"
            isLoading={isLoading}
            disabled={!formik.values.termsAccepted}
            textStyle={{ color: "black" }}
            style={{
              width: "160px",
              backgroundColor: "#F44A0E54",
              opacity: formik.values.termsAccepted ? 1 : 0.6,
              cursor: formik.values.termsAccepted ? "pointer" : "not-allowed",
            }}
          />
        </div>

        {/* Already Have Account */}
        <div style={{ display: "flex", gap: "4px", justifyContent: "center" }}>
          <p>Already have an account?</p>
          <BaseButton
            text="Log in"
            onClick={() => router.push(RouteConstant.auth.login.path)}
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
      </form>
    </div>
  );
};

export default InitiateSignupForm;
