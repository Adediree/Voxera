import { AuthLayoutProps } from "@/components/layouts/authLayout";
import SignupContent from "@/components/content/auth/signup/signupContent";
// import Image from "next/image";

export default function Page() {
  // const authPageLayoutProps: AuthLayoutProps = {
  //   headerProps: {
  //     type: "signup",
  //   },
  //   img: "/Voxera-Logo-Black-1.svg",
  //   title: "",
  //   subtitle:
  //     "Sign up to analyze reviews, benchmark against competitors, and uncover market trends that drive business growth.",
  // };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <SignupContent />
      </div>
    </div>
  );
}
