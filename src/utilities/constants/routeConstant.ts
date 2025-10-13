export const RouteConstant = {
  auth: {
    login: {
      name: "",
      path: "/auth/login",
    },
    verifyOtp: {
      name: "",
      path: "/auth/verify-otp",
    },
    signup: {
      name: "",
      path: "/auth/signup",
    },
    completeSignup: {
      name: "",
      path: "/auth/complete-signup",
    },
    feedback: {
      name: "",
      path: "/auth/feedback",
    },
    completeFeedback: {
      name: "",
      path: "/auth/complete-feedback",
    },

    resetPassword: {
      name: "",
      path: "/auth/reset-password",
    },
  },

  onBoarding: {
    onBoarding: {
      name: "",
      path: "/on-boarding/onboarding",
    },
    completeOnBoarding: {
      name: "",
      path: "/on-boarding/complete-onboarding",
    },
  },

  dashboardSection: {
    mainDashboard: {
      name: "",
      path: "/dashboard-section/main-dashboard",
    },
    sourceComparison: {
      name: "",
      path: "/dashboard-section/source-comparison",
    },
    keywordsTopics: {
      name: "",
      path: "/dashboard-section/keywords-topics",
    },
    allFeedback: {
      name: "",
      path: "/dashboard-section/all-feedback",
    },
    AISummary: {
      name: "",
      path: "/dashboard-section/AI-Summaries",
    },
  },

  dashboard: {
    getStarted: {
      name: "",
      path: "/",
    },
    createDummy: {
      path: "/dashboard/create-dummy",
      name: "Dashboard Create Dummy",
      moduleName: "Dummy",
    },
    allDummies: {
      path: "/dashboard/all-dummies",
      name: "All Dummies",
      moduleName: "Dummy",
    },
    issue: {
      path: "/dashboard/issue",
      name: "Issue",
      moduleName: "Issue",
    },
    allLetterOfCredit: {
      path: "/dashboard/issue/all-letter-of-credit",
      name: "All letter of credit",
      moduleName: "Issue",
    },
    createLoanProducts: {
      path: "/dashboard/loan-products/create",
      name: "Create Loan Products",
      moduleName: "Loan Products",
    },
  },
};
