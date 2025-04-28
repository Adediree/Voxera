export type CreateDummyRequest = {
    dummyAddress: string,
    dummyAge: string,
    dummyCode: string,
    dummyCreatedBy: string,
    dummyDateMoved: string,
    dummyEmail: string,
    dummyGender: string,
    dummyName: string,
    dummyPhone: string,
    dummyRating: number
}

export const createDummyRequestInit: CreateDummyRequest = {
    dummyAddress: "",
    dummyAge: "",
    dummyCode: "",
    dummyCreatedBy: "",
    dummyDateMoved: "",
    dummyEmail: "",
    dummyGender: "",
    dummyName: "",
    dummyPhone: "",
    dummyRating: 0
}
