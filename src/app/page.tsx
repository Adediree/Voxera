import AuthLayout from "@/components/layouts/authLayout";
import Page from "./auth/signup/page";

export const HomePage = () => {
  return (
    <AuthLayout>
      <Page />
    </AuthLayout>
  );
};

export default HomePage;
