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

const OnBoardingForm = (
  props: React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >
) => {
  type Role = {
    id: number;
    name: string;
  };

  type Industry = {
    id: number;
    name: string;
  };

  type Channel = {
    id: number;
    name: string;
  };

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
    <div
      style={{
        // maxWidth: "700px",
        // paddingLeft: "40px",
        // paddingRight: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        // border: "2px solid",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <h1 style={{ fontSize: "1.7rem", color: "#2A3039" }}>
          Let's Get You Set Up
        </h1>
        <p style={{ fontSize: "0.9rem", color: "#4B5563" }}>
          Just a few details to tailor Voxera to your business.
        </p>
      </div>
      <div style={{ display: "flex", gap: "16px" }}>
        <BaseInput
          label="Full Name"
          value={name}
          name={"name"}
          inputProps={{ placeholder: "Michael Fagbayibo" }}
          formik={formik}
          style={{ fontFamily: "Poppins" }}
          onChange={(e) => setName(e.target.value)}
        />
        <BaseInput
          label="Company Name"
          value={company}
          name={"name"}
          inputProps={{ placeholder: "Voxera Industry" }}
          formik={formik}
          style={{ fontFamily: "Poppins" }}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <p style={{ fontSize: "1rem", fontWeight: "700", color: "#4B5563" }}>
          Role or Position
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {roles.map((role) => (
            <BaseButton
              key={role.id}
              text={role.name}
              // type="submit"
              // onClick={() => formik.handleSubmit()}
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
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <p style={{ fontSize: "1rem", fontWeight: "700", color: "#4B5563" }}>
          Industry
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {industries.map((industry) => (
            <BaseButton
              key={industry.id}
              text={industry.name}
              // type="submit"
              // onClick={() => formik.handleSubmit()}
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
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <p style={{ fontSize: "1rem", fontWeight: "700", color: "#4B5563" }}>
            Primary Feedback Channels
          </p>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <img src="/info.svg" />
            <p style={{ fontSize: "0.9rem", color: "#4B5563" }}>
              You can select multiple boxes
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {channels.map((channel) => (
            <BaseButton
              key={channel.id}
              text={channel.name}
              // type="submit"
              // onClick={() => formik.handleSubmit()}
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
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingTop: "8px",
        }}
      >
        <BaseButton
          text={"Next"}
          // type="submit"
          // onClick={() => formik.handleSubmit()}
          isLoading={isLoading}
          style={{ backgroundColor: "#F44A0E" }}
          onClick={() =>
            router.push(RouteConstant.onBoarding.completeOnBoarding.path)
          }
          // style={{ width: "160px" }}
        />
      </div>
    </div>
  );
};

export default OnBoardingForm;
