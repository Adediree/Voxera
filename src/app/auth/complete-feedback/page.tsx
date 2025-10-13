"use client";
import BaseProgress from "@/components/ui/progress/BaseProgress";
import { RouteConstant } from "@/utilities/constants/routeConstant";
import { useRouter } from "next/navigation";

export default function Feedback() {
  const router = useRouter();
  // const authPageLayoutProps: AuthLayoutProps = {
  //   headerProps: {
  //     type: "resetPassword",
  //   },
  //   title: "Connect feedback sources",
  //   subtitle: "Choose a platform to connect and analyze customer feedback",
  // };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingTop: "0px",
      }}
    >
      <img src="/complete-feedback.svg" />
      <div
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   gap: "4px",
      // }}
      >
        <p style={{ fontSize: "0.9rem", color: "#4B5563" }}>
          Preparing your competitive edge
        </p>
        <p>Almost there — your insights are being tailored</p>
        <p style={{ fontSize: "0.9rem", color: "#4B5563" }}>
          Detecting conversation patterns
        </p>
      </div>
      {/* <div> */}
      <BaseProgress currentProgressValue={50} />
      {/* </div> */}
      <p style={{ fontSize: "0.9rem", color: "#4B5563" }}>
        Processing may take a few minutes.
      </p>
      <button
        onClick={() => {
          router.push(RouteConstant.dashboardSection.mainDashboard.path);
        }}
      >
        dashboard
      </button>
    </div>
  );
}
