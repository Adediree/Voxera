export type ReadDummyResponse = {
    data:
        {
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
        }[],
    responseCode: string,
    responseMessage: string
}
