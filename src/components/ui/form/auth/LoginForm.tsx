import {useNavigate} from "react-router";
import "../form.css"
import {RouteConstant} from "@/utilities/constants/routeConstant";
import {loginRequestInit} from "@/models/requests/authentication/loginRequest";
import {useFormik} from "formik";
import {AuthenticationValidation} from "@/models/validations/authenticationValidation";
import BaseButton from "@/components/ui/button/BaseButton";
import BaseInput from "@/components/ui/input/BaseInput";


const LoginForm = (props: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>) => {
    const navigate = useNavigate();
    // const authState = useSelector((state: RootState) => state.auth);
    // const dispatch: AppDispatch = useDispatch();
    // const handleForgotPassword = () => {
    //     // navigate(RouteConstant.auth.resetPasswordRequest.path);
    // }
    // const [error, setError] = useState("")
    const handleSubmit = async () => {
        // const loginRequest: LoginRequest = {...formik.values};
        // const action = await dispatch(auth.action.login(loginRequest));
        // const response = action.payload as LoginResponse;
        // if (response.responseCode == BaseConstants.RESPONSE_CODE_SUCCESS) {
        // setError("")
        navigate(RouteConstant.dashboard.allDummies.path)
        // } else {
        //     setError(response.responseMessage)
        // }
    }

    const initialValues = {...loginRequestInit}
    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
        validationSchema: AuthenticationValidation.login,
    })

    return (
        <form className={"form"} onSubmit={formik.handleSubmit}  {...props}>
            <div className={"form-input-container"}>
                <BaseInput
                    name={"userEmail"}
                    formik={formik}
                    inputProps={{
                        type: "text", placeholder: "Email address",
                    }}
                />
                <BaseInput
                    name={"userPassword"}
                    formik={formik}
                    inputProps={{
                        type: "password", placeholder: "Password",
                    }}
                />
            </div>
            {/*{error && <ErrorCard message={error}/>}*/}
            <div className={"form-input-container"}>
                <BaseButton text={"Continue"} isLoading={false}/>
                {/*<BaseButton text={"Forgot Password? Reset it"} variant={"secondary"} onClick={handleForgotPassword}/>*/}
            </div>
        </form>
    )
}

export default LoginForm
