import {appConfig} from "@/configs/appConfig";

export class BaseUtil {

    static logger(...logInfo: any) {
        if (appConfig.stage == "Dev") {
            console.log(...logInfo);
        }
    }
}
