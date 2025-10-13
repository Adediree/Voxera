"use client";
import { RouteConstant } from "@/utilities/constants/routeConstant";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Feedback() {
  // const authPageLayoutProps: AuthLayoutProps = {
  //   headerProps: {
  //     type: "resetPassword",
  //   },
  //   title: "Connect feedback sources",
  //   subtitle: "Choose a platform to connect and analyze customer feedback",
  // };

  const platforms = [
    {
      id: "gmb",
      name: "Google My Business",
      logo: "/google-my-business-logo-1 1.svg",
    },
    { id: "trustpilot", name: "Trustpilot", logo: "/trustpilot 1.svg" },
    { id: "facebook", name: "Facebook", logo: "/Facebook.svg" },
    { id: "yelp", name: "Yelp", logo: "/yelp-1 1.svg" },
  ];

  const router = useRouter();
  const [activePlatform, setActivePlatform] = useState<string | null>(null);

  return (
    <div
      style={{
        // minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        // marginLeft: "40px",
        // marginRight: "40px",
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {platforms.map((p) => (
          <button
            key={p.id}
            onClick={() => {
              router.push(RouteConstant.auth.completeFeedback.path);
              setActivePlatform(p.id);
            }}
            style={{
              display: "flex",
              gap: "12px",
              width: "240px",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "12px 12px 12px 24px",
              borderRadius: "4px",
              border: "none",
              backgroundColor:
                activePlatform === p.id ? "#F44A0E" : "#C8C8C824", // active vs default
              cursor: "pointer",
            }}
          >
            <img src={p.logo} style={{ width: "24px", height: "24px" }} />
            <p
              style={{
                fontFamily: "Poppins",
                color: activePlatform === p.id ? "#FFFFFF" : "#000000",
              }}
            >
              {p.name}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
