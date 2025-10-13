export type SearchTransactionPartyResponse = {
    data: {
        locReference: string,
        transactionPartyCreatedAt: string,
        transactionPartyId: number,
        transactionPartyLiability: string,
        transactionPartyName: string,
        transactionPartyReference: string,
        transactionPartyRole: string,
        transactionPartyStatus: string,
        transactionPartyUpdatedAt: string
    }[],
    pageNumber: number,
    pageSize: number,
    responseCode: string,
    responseMessage: string,
    totalPages: number,
    totalRecords: number
}
