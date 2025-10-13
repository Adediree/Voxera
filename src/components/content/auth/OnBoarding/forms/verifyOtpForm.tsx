import "../form.css"
import BaseButton from "@/component/button/BaseButton.tsx";
import {BaseOtpInput} from "@/component/input/BaseOtpInput.tsx";
import BaseToast from "@/component/toast/BaseToast.tsx";
import {useState} from "react";


const VerifyOtpForm = ({
                           handleOnOtpSuccess,
                           handleResendOtp,
                           isLoading,
                           numberOfInputs = 6,
                           ...props
                       }: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> & {
    handleOnOtpSuccess: (otp: string) => void;
    handleResendOtp: () => void;
    isLoading: boolean;
    numberOfInputs?: number;

}) => {
    const [otp, setOtp] = useState([...Array<string>(numberOfInputs)].fill(""));

    // const getIsEveryInputFilled = (inputText: string[]) => {
    //     return inputText.every((text) => text.length == 1)
    // }
    const handleOtpResend = () => {
        !isLoading && handleResendOtp && handleResendOtp()
    }

    const handleOnOtpSubmit = () => {
        const otpString = otp?.join("")
        if (otpString?.length < numberOfInputs) {
            setOtp([...Array<string>(numberOfInputs)].fill(""))
            return BaseToast({
                message: "Invalid OTP",
                type: 'error',
            });
        }
        handleOnOtpSuccess && handleOnOtpSuccess(otpString)
    }

    return (
        <form className={"form"} style={{alignItems: "center",}} {...props}>
            <div className={"form-input-container"} style={{alignItems: "center"}}>
                <BaseOtpInput containerStyle={{gap: "10px", display: "flex"}} numberOfInputs={numberOfInputs}
                              inputText={otp} setInputText={setOtp}/>
            </div>
            <div className={"form-input-container"}>
                <BaseButton text={"Verify OTP"} onClick={handleOnOtpSubmit} isLoading={isLoading}/>
                <p className={"label"} style={{textAlign: "center"}}>Didn't get the code? <span
                    onClick={handleOtpResend}
                    style={{color: "black", cursor: "pointer", fontWeight: 600}}>Resend OTP</span>
                </p>
            </div>
        </form>
    )
}

export default VerifyOtpForm
