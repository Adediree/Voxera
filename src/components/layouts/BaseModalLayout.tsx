import React, {CSSProperties, SVGProps} from "react";
import BaseButton, {BaseButtonProps} from "@/components/ui/button/BaseButton";
import BaseAvatar, {BaseAvatarProps} from "@/components/ui/avatar/BaseAvatar";

export type BaseModalLayoutProps = {
    modalTitle?: string;
    modalTitleStyle?: CSSProperties;
    modalHeaderStyle?: CSSProperties;
    modalSubtitle?: string;
    modalSubtitleStyle?: CSSProperties;
    modalTextHeaderStyle?: CSSProperties;
    endBtnProps?: BaseButtonProps;
    startBtnProps?: BaseButtonProps;
    startAvatarProps?: BaseAvatarProps;
    startIcon?: React.FC<SVGProps<SVGSVGElement>>
    startIconProps?: React.FC<React.SVGProps<SVGSVGElement>>
    startIconStyle?: CSSProperties,
    textAlign?: "left" | "center" | "right";
    childrenContainerStyle?: CSSProperties;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const BaseModalLayout = ({startIcon: StartIcon, startBtnProps, endBtnProps, ...props}: BaseModalLayoutProps) => {
    return (
        <div {...props}
             style={{
                 display: "flex",
                 flexDirection: "column",
                 width: "100%",
                 height: "100%",
                 gap: "1rem",
                 ...props?.style
             }}>
            <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                flex: 1,
                // padding: "1rem",
                ...props?.modalHeaderStyle
            }}>
                {StartIcon && <StartIcon {...props?.startIconProps} style={{...props?.startIconStyle}}/>}
                {props?.startAvatarProps &&
                    <BaseAvatar {...props?.startAvatarProps}/>
                }
                <div style={{textAlign: props?.textAlign || "left", flex: 1, ...props?.modalTextHeaderStyle}}>
                    {props?.modalTitle && <p className={""} style={{
                        fontWeight: 600,
                        ...props?.modalTitleStyle
                    }}>{props?.modalTitle}</p>}
                    {props?.modalSubtitle && <p className={"label subtitle"} style={{
                        color: "gray",
                        // flex: 1,
                        // ...props?.modalSubtitleStyle
                    }}>{props?.modalSubtitle}</p>}
                </div>
            </div>

            {props?.children && <div style={{

                padding: "1rem 0",
                borderTop: "1px solid var(--gray--2)",
                borderBottom: "1px solid var(--gray--2)",
                ...props?.childrenContainerStyle
            }}>
                {props?.children}
            </div>
            }
            {startBtnProps && endBtnProps && <div style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "1.5rem",
                // padding: "1rem",
            }}>
                <BaseButton size={"small"} variant={"secondary"}  {...startBtnProps}
                            style={{flex: 1, ...startBtnProps?.style}}
                            textStyle={{color: "black", ...startBtnProps?.textStyle}}/>

                <BaseButton size={"small"} variant={"primary"} {...endBtnProps}
                            style={{flex: 1, ...endBtnProps?.style}}/>
            </div>}

        </div>
    )
}

export default BaseModalLayout
