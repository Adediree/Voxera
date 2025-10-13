// src/components/auth/ProtectedRoute.tsx
'use client'

import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {useSelector} from "react-redux";
import {RootState} from "@/stores";
import {RouteConstant} from "@/utilities/constants/routeConstant";

export default function ProtectedRoute({children}: { children: React.ReactNode }) {
    const authState = useSelector((state: RootState) => state.auth);
    const router = useRouter();

    useEffect(() => {
        if (!authState?.token) {
            router.push(RouteConstant.auth.login.path);
        }
    }, [authState?.token, router]);

    if (!authState?.token) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Redirecting to login...</p>
            </div>
        );
    }

    return <>{children}</>;
}
