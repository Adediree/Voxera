export type UpdateApplicantRequest = {
    applicantAddress: string,
    applicantCreatedAt: string,
    applicantId: number,
    applicantName: string,
    applicantStatus: string,
    applicantUpdatedAt: string
}

export const updateApplicantRequestInit: UpdateApplicantRequest = {
    applicantAddress: "",
    applicantCreatedAt: "",
    applicantId: 0,
    applicantName: "",
    applicantStatus: "",
    applicantUpdatedAt: ""
}
