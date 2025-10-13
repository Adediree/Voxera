import AuthLayout, { AuthLayoutProps } from "@/components/layouts/authLayout";
import CompleteOnBoardingContent from "@/components/content/auth/completeOnBoarding/CompleteOnBoardingContent";
import OnBoardingLayout, {
  OnBoardingLayoutProps,
} from "@/components/layouts/onboardingLayout";

export default function Page() {
  const OnBoardingLayoutProps: OnBoardingLayoutProps = {
    img: "/complete-onboarding.svg",
  };

  return (
    <OnBoardingLayout {...OnBoardingLayoutProps}>
      <CompleteOnBoardingContent />
    </OnBoardingLayout>
  );
}
