"use client"
import "../container/container.css"
import "./menu.css"
import {SVGProps} from "react";
import BaseToast from "@/components/ui/toast/BaseToast";
import CustomerBusinessCard from "@/components/ui/card/CustomerBusinessCard";
import {sidebarBottomMenuConfig, sidebarItemsConfig} from "@/utilities/data/sidebarData";
import {usePathname, useRouter} from "next/navigation";

export type SidebarItemProps = {
    moduleName?: string;
    moduleItems: {
        title: string;
        icon?: React.FC<SVGProps<SVGSVGElement>>;
        component?: React.ReactElement;
        tabRoute?: string;
        onClick?: () => void;
    }[]
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;


const SidebarItem = ({moduleItems, moduleName, ...props}: SidebarItemProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const handleDashboardComponentNavigation = (tabRoute: string | undefined, onClick: (() => void) | undefined, title: string) => {
        if (!tabRoute && !onClick && title?.toLowerCase() != "api docs") {
            BaseToast({type: "info", message: `${title} >> Coming Soon`})
        }
        tabRoute && router.push(tabRoute);
        onClick?.()
    }
    return (
        <div>
            {moduleName &&
                <p className={"sidebar-module-title"}>{moduleName.toUpperCase()}</p>}
            {
                moduleItems.map(({icon: Icon, title, tabRoute, onClick}, index) => {
                    return (
                        <div key={index}
                             className={`sidebar-link ${pathname == tabRoute ? "current" : ""} ${props?.className}`}
                             {...props}
                             onClick={() => handleDashboardComponentNavigation(tabRoute, onClick, title)}>
                            <div className={"sidebar-link-title-icon-container"}>
                                {Icon && <Icon className={"icon"}
                                               style={{
                                                   fontSize: "14px",
                                                   color: "white",
                                               }}/>}
                                {title && <p>{title}</p>}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


const Sidebar = () => {
    return (
        <div className={"sidebar-container"}>
            <div className={"sidebar-menu"}>
                <div style={{padding: "0px 1rem"}}>
                    <CustomerBusinessCard/>
                </div>
                {sidebarItemsConfig.map((sidebarItem, index) => {
                    return <SidebarItem key={index} {...sidebarItem}/>
                })}
            </div>
            <div>
                {
                    sidebarBottomMenuConfig.map((sidebarItem, index) => {
                        return (
                            <SidebarItem key={index} moduleItems={sidebarItem.moduleItems}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Sidebar
