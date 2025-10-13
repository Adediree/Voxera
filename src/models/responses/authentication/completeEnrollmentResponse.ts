export type CompleteEnrollmentResponse = {
    privileges: string[],
    responseCode: string,
    responseMessage: string,
    token: string,
    userEmail: string,
    data: {
        userCountryCode: string,
        userCreatedAt: string,
        userEmail: string,
        userId: number,
        userStatus: string,
        userUpdatedAt: string,
        userLastLoginDate: string,
        userLastLoginIpAddress: string,
        userLoginCount: number,
        userPassword: string,
    }
}
