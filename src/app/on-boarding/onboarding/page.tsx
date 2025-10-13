import OnBoardingContent from "@/components/content/auth/OnBoarding/OnBoardingContent";
import OnBoardingLayout, {
  OnBoardingLayoutProps,
} from "@/components/layouts/onboardingLayout";

export default function Page() {
  const OnBoardingLayoutProps: OnBoardingLayoutProps = {
    img: "/onboarding-1.svg",
  };
  return (
    <OnBoardingLayout {...OnBoardingLayoutProps}>
      <OnBoardingContent />
    </OnBoardingLayout>
  );
}
