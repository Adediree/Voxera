import { RouteConstant } from "@/utilities/constants/routeConstant";
import InfoCircledIcon from "@/components/icon/InfoCircledIcon";
import RouterUtil from "@/utilities/routerUtil";
import { SidebarItemProps } from "@/components/ui/menu/Sidebar";
import { BaseSidebarModuleConfig } from "qucoon-components";
import SquareBarChartIcon from "@/components/icon/SquareBarChartIcon";

export const sidebarItemsConfig: BaseSidebarModuleConfig[] = [
  {
    moduleName: "HR",
    moduleIcon: SquareBarChartIcon,
    moduleItems: [
      {
        title: "View Records",
        tabRoute: RouteConstant.dashboard.issue.path,
      },
    ],
  },
  {
    moduleName: "Customer & Products",
    moduleIcon: SquareBarChartIcon,
    moduleItems: [
      {
        title: "View Customer",
        tabRoute: RouteConstant.dashboard.issue.path,
      },
      {
        title: "View Products",
        tabRoute: RouteConstant.dashboard.issue.path,
      },
    ],
  },
];

export const sidebarBottomMenuConfig: SidebarItemProps[] = [
  {
    moduleItems: [
      {
        title: "Logout",
        icon: InfoCircledIcon,
        onClick: () => {
          RouterUtil.navigate(RouteConstant.auth.login.path);
        },
        // tabRoute: RouteConstant.dashboard.auditLog.path
      },
      // {
      //     title: "Settings",
      //     icon: SettingsIcon,
      //     // tabRoute: RouteConstant.dashboard.settings.path
      // },
    ],
  },
];
