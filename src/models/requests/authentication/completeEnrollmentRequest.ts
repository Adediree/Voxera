export type CompleteEnrollmentRequest = {
    otp: string,
    userEmail: string
}
export const completeEnrollmentRequestInit: CompleteEnrollmentRequest = {
    otp: "",
    userEmail: "",
}
