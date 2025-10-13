export type CreateApplicantRequest = {
    applicantAddress: string,
    applicantName: string
}

export const createApplicantRequestInit: CreateApplicantRequest = {
    applicantAddress: "",
    applicantName: ""
}
