export type CreateTransactionPartyRequest = {
    transactionPartyLiability: string,
    transactionPartyName: string,
    transactionPartyReference: string,
    transactionPartyRole: string,
    locReference: string,
}

export const createTransactionPartyRequestInit: CreateTransactionPartyRequest = {
    transactionPartyLiability: "",
    transactionPartyName: "",
    transactionPartyReference: "",
    transactionPartyRole: "",
    locReference: "",
}
