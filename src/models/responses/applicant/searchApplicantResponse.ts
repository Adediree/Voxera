export type SearchApplicantResponse = {
    data: {
        applicantAddress: string,
        applicantCreatedAt: string,
        applicantId: number,
        applicantName: string,
        applicantStatus: string,
        applicantUpdatedAt: string
    }[],
    pageNumber: number,
    pageSize: number,
    responseCode: string,
    responseMessage: string,
    totalPages: number,
    totalRecords: number
}
