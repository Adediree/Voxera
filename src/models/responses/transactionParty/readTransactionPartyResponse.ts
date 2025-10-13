export type ReadTransactionPartyResponse = {
    data: {
        transactionPartyCreatedAt: string,
        transactionPartyId: number,
        transactionPartyLiability: string,
        transactionPartyName: string,
        transactionPartyReference: string,
        transactionPartyRole: string,
        transactionPartyStatus: string,
        transactionPartyUpdatedAt: string
        locReference: string,
    }[],
    responseCode: string,
    responseMessage: string
}
