import React from "react";
import DashboardLayout from "@/components/layouts/dashboardLayout";

export default function Layout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
      
            <DashboardLayout>
                {children}
            </DashboardLayout>
        
    )
}
