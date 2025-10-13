export type ReadLoanProductsRequest = {
    PageNo: number;
    PageSize: number;
    SortBy?: string;
    SortDirection?: string;
    SearchTerm?: string | null;
    SearchProperties?: string[] | null;
}


export const readLoanProductsRequestInit: ReadLoanProductsRequest = {
    PageNo: 1,
    PageSize: 10,
    SortBy: "Id",
    SortDirection: "asc",
    SearchTerm: null,
    SearchProperties: null,
}
