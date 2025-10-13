// import Email from "@/../public/images/otpEmailImage.png"
import VerifyOtpForm from "@/components/ui/form/auth/VerifyOtpForm";

export type OtpLayoutProps = {
    title: string,
    subtitle: string,
    handleOnValidOtpEntered: (otp: string) => void,
    handleResendOtp: () => void;
    isLoading?: boolean;
    numberOfInputs?: number;
}
const OtpLayout = ({
                       title,
                       subtitle,
                       handleOnValidOtpEntered,
                       handleResendOtp,
                       isLoading,
                       numberOfInputs,
                       ...props
                   }: OtpLayoutProps) => {
    return (
        <main className={"authLayout-main-container"} {...props}>
            <div className={"authLayout-title-container"}>
                <div style={{display: "flex", flexDirection: "column", gap: "10px", alignItems: "center"}}>
                    {/*<Image src={Email} alt={"Email Image"}*/}
                    {/*       style={{height: "120px", width: "120px"}}/>*/}
                    <h4>{title}</h4>
                </div>
                <p className={"bodyText"} style={{textAlign: "center"}}>
                    {subtitle}
                </p>
            </div>
            <VerifyOtpForm numberOfInputs={numberOfInputs} handleOnValidOtpEntered={handleOnValidOtpEntered}
                           handleResendOtp={handleResendOtp}
                           isLoading={isLoading}/>
        </main>
    )
}
export default OtpLayout
