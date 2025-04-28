import TitleSubtitleCard, {TitleSubtitleCardProps} from "@/components/ui/card/TitleSubtitleCard";
import BreadCrumbs, {BreadCrumbsProps} from "@/components/ui/breadcrumbs/BreadCrumbs";
import React from "react";
import BaseButton, {BaseButtonProps} from "@/components/ui/button/BaseButton";


export type DashboardPageLayoutProps =
    {
        // headerProps?: NavContainerProps;
        mainContentProps?: {
            containerProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
            contentHeaderContainerProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
            contentHeaderTitleSubtitleProps?: TitleSubtitleCardProps;
            contentHeaderCtaBtnProps?: BaseButtonProps;
            contentBreadCrumbMenuProps?: BreadCrumbsProps;
        }
    }
    & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
const DashboardPageLayout = ({children, mainContentProps}: DashboardPageLayoutProps) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            // flex: 1,
            overflow: "auto",
            padding: "1rem 2rem",
            // backgroundColor: "red",
            // backgroundColor: "rgba(11, 11, 12, 1)",
        }}>
            <main {...mainContentProps?.containerProps}
                // className={'flex-1 mx-auto py-5 w-[80%] text-white'}
                  style={{
                      display: "flex",
                      flex: 1,
                      flexDirection: "column",
                      gap: "1.5rem",
                      // height: "100%",
                      // backgroundColor: "rgba(11, 11, 12, 1)",
                      ...mainContentProps?.containerProps?.style
                  }}>
                {mainContentProps?.contentBreadCrumbMenuProps &&
                    <BreadCrumbs {...mainContentProps?.contentBreadCrumbMenuProps}/>}
                {(mainContentProps?.contentHeaderContainerProps || mainContentProps?.contentHeaderTitleSubtitleProps) &&
                    <div {...mainContentProps?.contentHeaderContainerProps} style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "space-between", ...mainContentProps?.contentHeaderContainerProps?.style
                    }}>
                        {mainContentProps?.contentHeaderTitleSubtitleProps &&
                            <TitleSubtitleCard {...mainContentProps?.contentHeaderTitleSubtitleProps}
                                               titleStyle={{fontSize: "1.5rem", color: "white", fontWeight: 600}}/>}
                        {mainContentProps?.contentHeaderCtaBtnProps &&
                            <BaseButton {...mainContentProps?.contentHeaderCtaBtnProps}/>}
                    </div>}
                {children}
            </main>
        </div>
    )
}
export default DashboardPageLayout
