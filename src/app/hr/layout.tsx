import DashboardLayout from "@/components/layouts/dashboardLayout";
import React from "react";
import ProtectedRoute from "@/components/content/auth/protectedRoute";

export default function Layout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ProtectedRoute>
            <DashboardLayout>
                {children}
            </DashboardLayout>
        </ProtectedRoute>
    )
}
