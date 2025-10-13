export type AppConfig = {
  baseUrlDev: string;
  baseUrlProd: string;
  stage: "Dev" | "Prod";
};
export const appConfig: AppConfig = {
  baseUrlDev: "https://nup0wkfu80.execute-api.us-east-1.amazonaws.com/api/dev",
  baseUrlProd:
    "https://nup0wkfu80.execute-api.us-east-1.amazonaws.com/api/prod",
  stage: "Dev",
};
