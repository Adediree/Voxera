import React from "react";
import AuthLayout from "@/components/layouts/authLayout";

export default function Layout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
      
            <AuthLayout>
                {children}
            </AuthLayout>
        
    )
}
