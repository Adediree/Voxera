import { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "qucoon-components/dist/style.css";
import "./globals.css";
import {
  GlobalModalProvider,
  ReduxProvider,
} from "@/components/custom/providers";
import BaseToastContainer from "@/components/ui/toast/BaseToastContainer";
import React from "react";
import { OtpProvider } from "@/utilities/context/otpContext";
import DashboardLayout from "@/components/layouts/dashboardLayout";
import AuthLayout from "@/components/layouts/authLayout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Base Project",
  description: "Skeleton bootstrap to build qucoon projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ReduxProvider>
          <OtpProvider>
            <GlobalModalProvider>
              <BaseToastContainer />
              {children}
              {/* <AuthLayout>{children}</AuthLayout> */}
            </GlobalModalProvider>
          </OtpProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
