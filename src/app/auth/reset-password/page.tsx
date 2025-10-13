import AuthLayout, {AuthLayoutProps} from "@/components/layouts/authLayout";
import ResetPasswordContent from "@/components/content/auth/resetPassword/resetPasswordContent";

export default function Page() {
    const authPageLayoutProps: AuthLayoutProps = {
        headerProps: {
            type: "resetPassword"
        },
        title: "Reset Password",
        subtitle: "Please enter your email address linked to your account.",
    }

    return (
        <AuthLayout {...authPageLayoutProps}>
            <ResetPasswordContent/>
        </AuthLayout>
    )
}
