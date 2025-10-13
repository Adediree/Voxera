"use client";

import "./form.css";
import { useFormik } from "formik";
import { BaseButton, BaseInput } from "qucoon-components";
import {
  LoginRequest,
  loginRequestInit,
} from "@/models/requests/authentication/loginRequest";
import { RouteConstant } from "@/utilities/constants/routeConstant";
import BaseToast from "@/components/ui/toast/BaseToast";
import { AuthenticationValidation } from "@/models/validations/authenticationValidation";
import { useLoginMutation } from "@/services/authenticationService";
import { BaseUtil } from "@/utilities/baseUtil";
import { useRouter } from "next/navigation";

const LoginForm = (
  props: React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >
) => {
  const router = useRouter();
  // const authState = useSelector((state: RootState) => state.auth);
  // const dispatch: AppDispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const handleForgotPassword = () => {
    router.push(RouteConstant.auth.resetPassword.path);
    // navigate(RouteConstant.authStore.resetPasswordRequest.path);
  };

  const handleSubmit = async () => {
    const loginRequest: LoginRequest = { ...formik.values };
    const response = await login(loginRequest).unwrap();
    if (BaseUtil.isApiResponseSuccessful(response)) {
      BaseToast({ type: "success", message: response.responseMessage });
      // dispatch(authStore.mutation.setLoginFlowPayload({...authState?.loginFlowPayload, ...loginRequest}))
      // router.push(RouteConstant.authStore.loginOtp.path)
      router.push(RouteConstant.dashboard.issue.path);
    }
  };
  const initialValues = { ...loginRequestInit };
  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: AuthenticationValidation.login,
  });

  return (
    <form className={"form"} {...props}>
      <div className={"form-input-container"}>
        <BaseInput
          name={"userEmail"}
          formik={formik}
          inputProps={{
            type: "text",
            placeholder: "Email address",
          }}
        />
        <BaseInput
          name={"userPassword"}
          formik={formik}
          inputProps={{
            type: "password",
            placeholder: "Password",
          }}
        />
      </div>
      <div className={"form-input-container"}>
        <BaseButton
          text={"Continue"}
          isLoading={isLoading}
          onClick={() => formik.handleSubmit()}
        />
        <BaseButton
          text={"Forgot Password? Reset it"}
          variant={"secondary"}
          onClick={handleForgotPassword}
        />
      </div>
    </form>
  );
};

export default LoginForm;
