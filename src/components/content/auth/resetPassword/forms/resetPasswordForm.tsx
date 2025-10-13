"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/configs/storeConfig";
import {
  InitiatePasswordResetRequest,
  initiatePasswordResetRequestInit,
} from "@/models/requests/authentication/initiatePasswordResetRequest";
import { RouteConstant } from "@/utilities/constants/routeConstant";
import { useFormik } from "formik";
import { BaseButton, BaseInput } from "qucoon-components";
import { AuthenticationValidation } from "@/models/validations/authenticationValidation";
import { authStore } from "@/stores/authStore";
import { RootState } from "@/stores";
import {
  useInitiatePasswordResetMutation,
  useResendOtpMutation,
} from "@/services/authenticationService";
import { BaseUtil } from "@/utilities/baseUtil";
import { useRouter } from "next/navigation";
import BaseToast from "@/components/ui/toast/BaseToast";
import { useOtp } from "@/utilities/context/otpContext";

const ResetPasswordForm = (
  props: React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >
) => {
  const router = useRouter();
  const authState = useSelector((state: RootState) => state.auth);
  const dispatch: AppDispatch = useDispatch();
  const [initiatePasswordReset, { isLoading }] =
    useInitiatePasswordResetMutation();
  const [resendOtp] = useResendOtpMutation();

  const { showOtp } = useOtp();

  const initialValues: InitiatePasswordResetRequest = {
    ...initiatePasswordResetRequestInit,
    userEmail: "",
  };

  const handleResetPassword = async () => {
    const request: InitiatePasswordResetRequest = {
      ...formik.values,
    };

    const response = await initiatePasswordReset(request).unwrap();
    if (BaseUtil.isApiResponseSuccessful(response)) {
      BaseToast({
        message: response?.responseMessage,
        type: "success",
      });
      showOtp({
        title: "Verify Your Email",
        subtitle: `We've sent a 6-digit code to ${request.userEmail}`,
        onValidOtpEntered: async (otp) => {
          dispatch(
            authStore.mutation.setCompletePasswordResetFlowPayload({
              ...authState?.completePasswordResetFlowPayload,
              ...request,
              otp: otp,
            })
          );
          router.push(RouteConstant.auth.completeResetPassword.path);
        },
        onResend: async () => {
          console.log("Otp resend");
          await resendOtp({ userEmail: formik.values.userEmail });
        },
      });
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleResetPassword,
    validationSchema: AuthenticationValidation.initiatePasswordReset,
  });

  return (
    <form className={"form"} {...props}>
      <div className={"form-input-container"}>
        <BaseInput
          label={"Email address"}
          name={"userEmail"}
          formik={formik}
          inputProps={{
            type: "email",
            placeholder: "Email address",
          }}
        />
      </div>
      <div className={"form-input-container"}>
        <BaseButton
          text={"Continue"}
          onClick={() => formik.handleSubmit()}
          isLoading={isLoading}
        />
      </div>
    </form>
  );
};

export default ResetPasswordForm;
