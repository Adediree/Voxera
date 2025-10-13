export type UpdateTransactionPartyRequest = {
    transactionPartyCreatedAt: string,
    transactionPartyId: number,
    transactionPartyLiability: string,
    transactionPartyName: string,
    transactionPartyReference: string,
    transactionPartyRole: string,
    transactionPartyStatus: string,
    transactionPartyUpdatedAt: string,
    locReference: string,
}
export const updateTransactionPartyRequestInit: UpdateTransactionPartyRequest = {
    transactionPartyCreatedAt: "",
    transactionPartyId: 0,
    transactionPartyLiability: "",
    transactionPartyName: "",
    transactionPartyReference: "",
    transactionPartyRole: "",
    transactionPartyStatus: "",
    transactionPartyUpdatedAt: "",
    locReference: "",
}
