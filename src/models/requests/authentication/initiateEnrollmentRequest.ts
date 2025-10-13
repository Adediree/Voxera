export type InitiateEnrollmentRequest = {
    userEmail: string,
    userPassword: string,
    // userCountryCode?: string,
    userFirstname: string,
    userLastname: string,
    // userMiddlename?: string,
    // userPhone?: string
}

export const initiateEnrollmentRequestInit: InitiateEnrollmentRequest = {
    userEmail: "",
    userPassword: "",
    // userCountryCode: "234",
    userFirstname: "",
    userLastname: "",
    // userMiddleName: "",
    // userPhone: ""
}
