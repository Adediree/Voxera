import {BaseService} from "@/configs/serviceConfig";
import {ChangePasswordResponse} from "@/models/responses/authentication/changePasswordResponse";
import {ChangePasswordRequest} from "@/models/requests/authentication/changePasswordRequest";
import {ApiRequestMethodsEnum} from "@/utilities/enums/apiRequestMethodsEnum";
import {CompleteEnrollmentResponse} from "@/models/responses/authentication/completeEnrollmentResponse";
import {CompleteEnrollmentRequest} from "@/models/requests/authentication/completeEnrollmentRequest";
import {CompletePasswordResetResponse} from "@/models/responses/authentication/completePasswordResetResponse";
import {CompletePasswordResetRequest} from "@/models/requests/authentication/completePasswordResetRequest";
import {InitiateEnrollmentResponse} from "@/models/responses/authentication/initiateEnrollmentResponse";
import {InitiateEnrollmentRequest} from "@/models/requests/authentication/initiateEnrollmentRequest";
import {InitiatePasswordResetResponse} from "@/models/responses/authentication/initiatePasswordResetResponse";
import {InitiatePasswordResetRequest} from "@/models/requests/authentication/initiatePasswordResetRequest";
import {LoginRequest} from "@/models/requests/authentication/loginRequest";
import {LoginResponse} from "@/models/responses/authentication/loginResponse";
import {ResendOtpResponse} from "@/models/responses/authentication/resendOtpResponse";
import {ResendOtpRequest} from "@/models/requests/authentication/resendOtpRequest";
import {authStore} from "@/stores/authStore";
import {ApiTagsEnum} from "@/utilities/enums/apiTagsEnum";

const controller = "authentication";
export const authenticationService = BaseService.appClient.injectEndpoints({
    endpoints: (builder) => ({
        changePassword: builder.mutation<ChangePasswordResponse, ChangePasswordRequest>({
            query: (data) => ({
                url: `/${controller}/change-password`,
                method: ApiRequestMethodsEnum.POST,
                body: data,
            }),
        }),
        completeEnrollment: builder.mutation<CompleteEnrollmentResponse, CompleteEnrollmentRequest>({
            query: (data) => ({
                url: `/${controller}/complete-enrollment`,
                method: ApiRequestMethodsEnum.POST,
                body: data,
            }),
            onQueryStarted: async (arg, {dispatch, queryFulfilled}) => {
                try {
                    const {data} = await queryFulfilled;
                    dispatch(authStore.mutation.setCoreAuthState(data));
                } catch (error) {
                    // Handle login error
                    console.error('Complete enrollment failed:', error);
                }
            },
            invalidatesTags: [{type: ApiTagsEnum.Authentication}],
        }),
        completePasswordReset: builder.mutation<CompletePasswordResetResponse, CompletePasswordResetRequest>({
            query: (data) => ({
                url: `/${controller}/complete-password-reset`,
                method: ApiRequestMethodsEnum.POST,
                body: data,
            }),
        }),
        initiateEnrollment: builder.mutation<InitiateEnrollmentResponse, InitiateEnrollmentRequest>({
            query: (data) => ({
                url: `/${controller}/initiate-enrollment`,
                method: ApiRequestMethodsEnum.POST,
                body: data,
            }),
        }),
        initiatePasswordReset: builder.mutation<InitiatePasswordResetResponse, InitiatePasswordResetRequest>({
            query: (data) => ({
                url: `/${controller}/initiate-password-reset`,
                method: ApiRequestMethodsEnum.POST,
                body: data,
            }),
        }),
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (data) => ({
                url: `/${controller}/login`,
                method: ApiRequestMethodsEnum.POST,
                body: data,
            }),
            onQueryStarted: async (arg, {dispatch, queryFulfilled}) => {
                try {
                    const {data} = await queryFulfilled;
                    dispatch(authStore.mutation.setCoreAuthState(data));
                } catch (error) {
                    // Handle login error
                    console.error('Login failed:', error);
                }
            },
            invalidatesTags: [{type: ApiTagsEnum.Authentication}],
        }),
        resendOtp: builder.mutation<ResendOtpResponse, ResendOtpRequest>({
            query: (data) => ({
                url: `/${controller}/resend-otp`,
                method: ApiRequestMethodsEnum.POST,
                body: data,
            }),
        }),
    }),
    overrideExisting: true
});

export const {
    useChangePasswordMutation,
    useLoginMutation,
    useCompleteEnrollmentMutation,
    useInitiateEnrollmentMutation,
    useCompletePasswordResetMutation,
    useInitiatePasswordResetMutation,
    useResendOtpMutation
} = authenticationService;
