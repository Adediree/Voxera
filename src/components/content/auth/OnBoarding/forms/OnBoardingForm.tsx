"use client";
import { RouteConstant } from "@/utilities/constants/routeConstant";
import { useFormik } from "formik";
import { BaseButton, BaseInput } from "qucoon-components";
import { AuthenticationValidation } from "@/models/validations/authenticationValidation";
import { useChangePasswordMutation } from "@/services/authenticationService";
import { BaseUtil } from "@/utilities/baseUtil";
import { useRouter } from "next/navigation";
import BaseToast from "@/components/ui/toast/BaseToast";
import { changePasswordRequestInit } from "@/models/requests/authentication/changePasswordRequest";
import { useState } from "react";
import {
  initialChannels,
  initialIndustries,
  initialRoles,
} from "../mockdata/onboardingMockData";
import styles from "./OnBoardingForm.module.css"; // ✅ import CSS module

const OnBoardingForm = (
  props: React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >
) => {
  type Role = { id: number; name: string };
  type Industry = { id: number; name: string };
  type Channel = { id: number; name: string };

  const router = useRouter();
  const initialValues = { ...changePasswordRequestInit };
  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [roles, setRoles] = useState<Role[]>(initialRoles);
  const [industries, setIndustries] = useState<Industry[]>(initialIndustries);
  const [channels, setChannels] = useState<Channel[]>(initialChannels);

  const [activeRole, setActiveRole] = useState<number | null>(null);
  const [activeIndustry, setActiveIndustry] = useState<number | null>(null);
  const [activeChannel, setActiveChannel] = useState<number | null>(null);

  const handleSubmit = async () => {
    const request = { ...formik.values };
    const response = await changePassword(request).unwrap();
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
    validationSchema: AuthenticationValidation.changePassword,
  });

  return (
    <div className={styles.formWrapper}>
      <div className={styles.headerSection}>
        <h1>Let's Get You Set Up</h1>
        <p>Just a few details to tailor Voxera to your business.</p>
      </div>

      <div className={styles.inputRow}>
        <BaseInput
          label="Full Name"
          value={name}
          name="name"
          inputProps={{ placeholder: "Michael Fagbayibo" }}
          formik={formik}
          style={{ fontFamily: "Poppins" }}
          onChange={(e) => setName(e.target.value)}
        />
        <BaseInput
          label="Company Name"
          value={company}
          name="name"
          inputProps={{ placeholder: "Voxera Industry" }}
          formik={formik}
          style={{ fontFamily: "Poppins" }}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      {/* Role Section */}
      <div className={styles.section}>
        <p className={styles.sectionTitle}>Role or Position</p>
        <div className={styles.buttonGroup}>
          {roles.map((role) => (
            <BaseButton
              key={role.id}
              text={role.name}
              isLoading={isLoading}
              textStyle={{
                color: activeRole === role.id ? "white" : "black",
              }}
              style={{
                backgroundColor:
                  activeRole === role.id ? "#F44A0E" : "#F44A0E12",
              }}
              onClick={() => setActiveRole(role.id)}
            />
          ))}
        </div>
      </div>

      {/* Industry Section */}
      <div className={styles.section}>
        <p className={styles.sectionTitle}>Industry</p>
        <div className={styles.buttonGroup}>
          {industries.map((industry) => (
            <BaseButton
              key={industry.id}
              text={industry.name}
              isLoading={isLoading}
              textStyle={{
                color: activeIndustry === industry.id ? "white" : "black",
              }}
              style={{
                backgroundColor:
                  activeIndustry === industry.id ? "#F44A0E" : "#F44A0E12",
              }}
              onClick={() => setActiveIndustry(industry.id)}
            />
          ))}
        </div>
      </div>

      {/* Channel Section */}
      <div className={styles.section}>
        <div className={styles.channelHeader}>
          <p className={styles.sectionTitle}>Primary Feedback Channels</p>
          <div className={styles.infoRow}>
            <img src="/info.svg" alt="Info" />
            <p>You can select multiple boxes</p>
          </div>
        </div>
        <div className={styles.buttonGroup}>
          {channels.map((channel) => (
            <BaseButton
              key={channel.id}
              text={channel.name}
              isLoading={isLoading}
              textStyle={{
                color: activeChannel === channel.id ? "white" : "black",
              }}
              style={{
                backgroundColor:
                  activeChannel === channel.id ? "#F44A0E" : "#F44A0E12",
              }}
              onClick={() => setActiveChannel(channel.id)}
            />
          ))}
        </div>
      </div>

      {/* Button Section */}
      <div className={styles.buttonRight}>
        <BaseButton
          text="Next"
          isLoading={isLoading}
          style={{ backgroundColor: "#F44A0E" }}
          onClick={() =>
            router.push(RouteConstant.onBoarding.completeOnBoarding.path)
          }
        />
      </div>
    </div>
  );
};

export default OnBoardingForm;
