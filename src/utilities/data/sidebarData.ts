import LightningIcon from "@/components/icon/LightningIcon";
import {SidebarItemProps} from "@/components/ui/menu/Sidebar";
import {RouteConstant} from "@/utilities/constants/routeConstant";
import InfoCircledIcon from "@/components/icon/InfoCircledIcon";
import RouterUtil from "@/utilities/routerUtil";

export const sidebarItemsConfig: SidebarItemProps[] = [
    {
        moduleName: "Dummy",
        moduleItems: [
            ////
            {
                title: "All Dummies",
                icon: LightningIcon,
                tabRoute: RouteConstant.dashboard.allDummies.path,
            },
            {
                title: "Create Dummy",
                icon: LightningIcon,
                tabRoute: RouteConstant.dashboard.createDummy.path,
            },
            ////.
        ]
    },
]

export const sidebarBottomMenuConfig: SidebarItemProps[] = [{
    moduleItems: [
        {
            title: "Logout",
            icon: InfoCircledIcon,
            onClick: () => {
                RouterUtil.navigate(RouteConstant.auth.login.path)
            }
            // tabRoute: RouteConstant.dashboard.auditLog.path
        },
        // {
        //     title: "Settings",
        //     icon: SettingsIcon,
        //     // tabRoute: RouteConstant.dashboard.settings.path
        // },
    ]
}]
