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
import styles from "./CompleteOnBoardingForm.module.css";

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
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>(
    {}
  );

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
    <div className={styles.formContainer}>
      <div className={styles.section}>
        <div className={styles.titleBlock}>
          <h1 className={styles.heading}>Customize your dashboard</h1>
          <p className={styles.subheading}>
            Just a few details to tailor Voxera to your business.
          </p>
        </div>

        <div className={styles.sectionBlock}>
          <div className={styles.labelBlock}>
            <p className={styles.label}>Expected Use Cases</p>
            <div className={styles.infoRow}>
              <img src="/info.svg" alt="info" />
              <p className={styles.infoText}>You can select multiple boxes</p>
            </div>
          </div>

          <div className={styles.checkboxGroup}>
            {cases.map((item) => (
              <div className={styles.checkboxRow} key={item.id}>
                <BaseCheckbox
                  checked={!!checkedItems[item.id]}
                  onChange={() => toggleCheckbox(item.id)}
                />
                <p className={styles.checkboxLabel}>{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.sectionBlock}>
          <p className={styles.label}>Protect Your Account</p>
          <div className={styles.inputGroup}>
            <BaseInput
              label="Full Name"
              value={password}
              name={"userEmail"}
              inputProps={{ placeholder: "Enter Password" }}
              formik={formik}
              className={styles.inputField}
              onChange={(e) => setPassword(e.target.value)}
            />
            <BaseInput
              label="Company Name"
              value={confirm}
              name={"userEmail"}
              inputProps={{ placeholder: "Confirm Password" }}
              formik={formik}
              className={styles.inputField}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <BaseButton
          text={"Complete"}
          style={{ backgroundColor: "#F44A0E" }}
          onClick={() => router.push(RouteConstant.auth.feedback.path)}
        />
      </div>
    </div>
  );
};

export default CompleteOnBoardingForm;
