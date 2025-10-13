"use client";
import { RouteConstant } from "@/utilities/constants/routeConstant";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { BaseButton, BaseCheckbox, BaseInput } from "qucoon-components";
import { RootState } from "@/stores";
import { AuthenticationValidation } from "@/models/validations/authenticationValidation";
import { completePasswordResetRequestInit } from "@/models/requests/authentication/completePasswordResetRequest";
import { useCompletePasswordResetMutation } from "@/services/authenticationService";
import { BaseUtil } from "@/utilities/baseUtil";
import { useRouter } from "next/navigation";
import BaseToast from "@/components/ui/toast/BaseToast";
import { useState } from "react";
import { initialCases } from "../../OnBoarding/mockdata/onboardingMockData";

const CompleteOnBoardingForm = (
  props: React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >
) => {
  type Case = {
    id: number;
    name: string;
  };

  const router = useRouter();
  const authState = useSelector((state: RootState) => state.auth);
  const initialValues = {
    ...completePasswordResetRequestInit,
    ...authState?.completePasswordResetFlowPayload,
  };
  const [completePasswordReset] = useCompletePasswordResetMutation();
  const [cases, setCases] = useState<Case[]>(initialCases);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [checkedItems, setCheckedItems] = useState<{
    [key: number]: boolean;
  }>({});

  const handleSubmit = async () => {
    const request = { ...formik.values };
    const response = await completePasswordReset(request).unwrap();
    if (BaseUtil.isApiResponseSuccessful(response)) {
      BaseToast({
        message: response?.responseMessage,
        type: "success",
      });
      router.push(RouteConstant.auth.login.path);
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: AuthenticationValidation.completePasswordReset,
  });

  const toggleCheckbox = (id: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        // border: "2px solid",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          // border: "2px solid",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <h1 style={{ fontSize: "1.7rem", color: "#2A3039" }}>
            Customize your dashboard
          </h1>
          <p style={{ fontSize: "0.9rem", color: "#4B5563" }}>
            Just a few details to tailor Voxera to your business.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <p
              style={{ fontSize: "1rem", fontWeight: "700", color: "#4B5563" }}
            >
              Expected Use Cases
            </p>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <img src="/info.svg" />
              <p style={{ fontSize: "0.9rem", color: "#4B5563" }}>
                You can select multiple boxes
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {cases.map((item) => (
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <BaseCheckbox
                  checked={!!checkedItems[item.id]}
                  onChange={() => toggleCheckbox(item.id)}
                />
                <p
                  key={item.id}
                  style={{ fontSize: "0.9rem", color: "#4B5563" }}
                >
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <p style={{ fontSize: "1rem", fontWeight: "700", color: "#4B5563" }}>
            Protect Your Account
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <BaseInput
              label="Full Name"
              value={password}
              name={"userEmail"}
              inputProps={{ placeholder: "Enter Password" }}
              formik={formik}
              style={{ width: "385px", fontFamily: "Poppins" }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <BaseInput
              label="Company Name"
              value={confirm}
              name={"userEmail"}
              inputProps={{ placeholder: "Confirm Password" }}
              formik={formik}
              style={{ width: "385px", fontFamily: "Poppins" }}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingTop: "8px",
        }}
      >
        <BaseButton
          text={"Complete"}
          // type="submit"
          // onClick={() => formik.handleSubmit()}
          // isLoading={isLoading}
          style={{ backgroundColor: "#F44A0E" }}
          onClick={() => router.push(RouteConstant.auth.feedback.path)}
          // style={{ width: "160px" }}
        />
      </div>
    </div>
  );
};

export default CompleteOnBoardingForm;
