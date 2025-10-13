export type SearchApplicantRequest = {
    applicantAddress?: string;
    applicantCreatedAt?: string;
    applicantName?: string;
    applicantStatus?: string;
    applicantUpdatedAt?: string;
    search?: string;
    sortBy?: string;
    sortDir?: string;
    applicantId?: number;
    pageNumber?: number;
    pageSize?: number;
}

export const searchApplicantRequestInit: SearchApplicantRequest = {
    applicantAddress: "",
    applicantCreatedAt: "",
    applicantName: "",
    applicantStatus: "",
    applicantUpdatedAt: "",
    search: "",
    sortBy: "applicantId",
    sortDir: "DESC",
    applicantId: 0,
    pageNumber: 1,
    pageSize: 10,
}
