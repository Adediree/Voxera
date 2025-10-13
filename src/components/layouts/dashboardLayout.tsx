"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import DashboardIcon from "./Icons/DashboardIcon";
import SourceIcon from "./Icons/SourceIcon";
import KeywordIcon from "./Icons/KeywordIcon";
import FeedbackIcon from "./Icons/FeedbackIcon";
import SummariesIcon from "./Icons/SummariesIcon";
import { PredictionIcon } from "./Icons/PredictionIcon";
import CustomerIcon from "./Icons/CustomerIcon";
import { NavBar } from "./VoxeraSidebar";
import { RouteConstant } from "@/utilities/constants/routeConstant";
import ManageSourcesIcon from "./Icons/ManageSourcesIcon";
import WebFormIcon from "./Icons/WebFormIcon";
import ApiAccessIcon from "./Icons/ApiAccessIcon";
import BillingIcon from "./Icons/BillingIcon";

export type DashboardLayoutProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const DashboardLayout = ({ children, ...props }: DashboardLayoutProps) => {
  const router = useRouter();
  const pathname = usePathname();

  // 🔑 Single active state for ALL navbars
  const [activeLink, setActiveLink] = useState<string>("");
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const navLinks = [
    {
      name: "Dashboard",
      path: RouteConstant.dashboardSection.mainDashboard.path,
      icon: <DashboardIcon />,
    },
    {
      name: "Source Comparison",
      path: RouteConstant.dashboardSection.sourceComparison.path,
      icon: <SourceIcon />,
    },
    {
      name: "Keywords & Topics",
      path: RouteConstant.dashboardSection.keywordsTopics.path,
      icon: <KeywordIcon />,
    },
    {
      name: "All Feedback",
      path: RouteConstant.dashboardSection.allFeedback.path,
      icon: <FeedbackIcon />,
    },
  ];

  const AiInsightsLinks = [
    {
      name: "AI Summaries",
      path: RouteConstant.dashboardSection.AISummary.path,
      icon: <SummariesIcon />,
    },
    { name: "Churn Prediction", path: "", icon: <PredictionIcon /> },
    { name: "Customer Personas", path: "", icon: <CustomerIcon /> },
  ];
  const IntegrationLinks = [
    { name: "Manage Sources", path: "", icon: <ManageSourcesIcon /> },
    { name: "Web Forms & Surveys", path: "", icon: <WebFormIcon /> },
  ];
  const SettingsLinks = [
    { name: "API Access", path: "", icon: <ApiAccessIcon /> },
    { name: "Billing & plan", path: "", icon: <BillingIcon /> },
  ];

  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        justifyContent: "flex-start",
        height: "100vh",
      }}
      {...props}
    >
      {/* Sidebar */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          padding: "8px",
          paddingTop: "32px",
          backgroundColor: "white",
          overflowY: "auto",
          height: "100%",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <NavBar
          links={navLinks}
          title="INSIGHTS & ANALYTICS"
          logoSrc="/Voxera-Logo-Black-1.svg"
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          onNavigate={(path) => router.push(path)}
        />
        <NavBar
          links={AiInsightsLinks}
          title="AI INSIGHTS"
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          onNavigate={(path) => router.push(path)}
        />
        <NavBar
          links={IntegrationLinks}
          title="INTEGRATIONS"
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          onNavigate={(path) => router.push(path)}
        />
        <NavBar
          links={SettingsLinks}
          title="SETTINGS"
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          onNavigate={(path) => router.push(path)}
        />
      </div>

      {/* Main content */}
      <main
        style={{
          flex: 1,
          height: "100%",
          position: "relative",
          overflow: "auto",
          backgroundColor: "var(--color-white)",
          borderLeft: "1px solid #4B556338",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            backgroundColor: "white",
            paddingTop: "32px",
            paddingBottom: "22px",
            paddingLeft: "24px",
            paddingRight: "16px",
          }}
        >
          {" "}
          <input
            type="text"
            placeholder=" Search..."
            value={value}
            onChange={handleChange}
            className=""
            style={{
              width: "379px",
              backgroundColor: "#D9D9D95E",
              paddingTop: "16px",
              paddingBottom: "16px",
              paddingLeft: "18px",
              paddingRight: "10px",
              borderRadius: "24px",
              border: "none",
              borderStyle: "none",
            }}
          />
        </div>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
