export type UpdateDummyRequest = {
    dummyAddress: string,
    dummyAge: string,
    dummyCode: string,
    dummyCreatedAt: string,
    dummyCreatedBy: string,
    dummyDateMoved: string,
    dummyEmail: string,
    dummyGender: string,
    dummyId: number,
    dummyName: string,
    dummyPhone: string,
    dummyRating: number,
    dummyStatus: string,
    dummyUpdatedAt: string
}

export const updateDummyRequestInit: UpdateDummyRequest = {
    dummyAddress: "",
    dummyAge: "",
    dummyCode: "",
    dummyCreatedAt: "",
    dummyCreatedBy: "",
    dummyDateMoved: "",
    dummyEmail: "",
    dummyGender: "",
    dummyId: 0,
    dummyName: "",
    dummyPhone: "",
    dummyRating: 0,
    dummyStatus: "",
    dummyUpdatedAt: ""
}
