"use client";

// import "../ui/container/container.css";
// import "./layout.css";
import Header, { HeaderProps } from "@/components/ui/menu/Header";
import { Typography } from "qucoon-components";
import Image from "next/image";

export type OnBoardingLayoutProps = {
  headerProps?: HeaderProps;
  img?: string;
  title?: string;
  subtitle?: string;
  mainContainerProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
const OnBoardingLayout = ({
  children,
  headerProps,
  img,
  title,
  subtitle,
  mainContainerProps,
  ...props
}: OnBoardingLayoutProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "4px",
        paddingTop: "24px",
        paddingBottom: "32px",
        paddingLeft: "52px",
        paddingRight: "84px",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "310px",
          height: "100vh",
          zIndex: 1000,
        }}
      >
        {img && (
          <div>
            <img
              src={img}
              alt="Logo"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        )}
      </div>
      <div
        style={{
          flex: 1,
          marginLeft: "310px",
          overflowY: "auto",
          padding: "20px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default OnBoardingLayout;
