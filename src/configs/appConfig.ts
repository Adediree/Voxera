export type AppConfig = {
    baseUrlDev: string;
    baseUrlProd: string;
    stage: "Dev" | "Prod",
}
export const appConfig: AppConfig = {
    baseUrlDev: 'http://localhost:3900/api',
    baseUrlProd: 'http://localhost:3900/api',
    stage: "Dev",
}
