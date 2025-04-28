import {CSSProperties} from "react";

export type TitleSubtitleCardProps = {
    title: string;
    subtitle: string;
    titleStyle?: CSSProperties;
    subtitleStyle?: CSSProperties;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
const TitleSubtitleCard = ({title, subtitle, titleStyle, subtitleStyle, ...props}: TitleSubtitleCardProps) => {

    return (
        <div {...props}>
            <p className={"title"} style={{...titleStyle}}>{title}</p>
            <p className={"subtitle label"} style={{...subtitleStyle}}>{subtitle}</p>
        </div>
    )
}
export default TitleSubtitleCard
