export type SearchTransactionPartyRequest = {
    transactionPartyCreatedAt?: string;
    transactionPartyStatus?: string;
    transactionPartyUpdatedAt?: string;
    locReference?: string;
    search?: string;
    sortBy?: string;
    sortDir?: string;
    transactionPartyId?: number;
    pageNumber?: number;
    pageSize?: number;
    transactionPartyLiability?: string,
    transactionPartyName?: string,
    transactionPartyReference?: string,
    transactionPartyRole?: string,
}

export const searchTransactionPartyRequestInit: SearchTransactionPartyRequest = {
    transactionPartyCreatedAt: "",
    transactionPartyName: "",
    transactionPartyStatus: "",
    transactionPartyUpdatedAt: "",
    transactionPartyLiability: "",
    transactionPartyReference: "",
    transactionPartyRole: "",
    locReference: "",
    search: "",
    sortBy: "transactionPartyId",
    sortDir: "DESC",
    transactionPartyId: 0,
    pageNumber: 1,
    pageSize: 10,
}
