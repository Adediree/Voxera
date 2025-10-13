export type ReadApplicantResponse = {
    data: {
        applicantAddress: string,
        applicantCreatedAt: string,
        applicantId: 0,
        applicantName: string,
        applicantStatus: string,
        applicantUpdatedAt: string
    }[],
    responseCode: string,
    responseMessage: string
}
