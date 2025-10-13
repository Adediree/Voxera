import {BaseService} from "@/configs/serviceConfig";
import {ApiRequestMethodsEnum} from "@/utilities/enums/apiRequestMethodsEnum";
import {CreateTransactionPartyResponse} from "@/models/responses/transactionParty/createTransactionPartyResponse";
import {CreateTransactionPartyRequest} from "@/models/requests/transactionParty/createTransactionPartyRequest";
import {ReadTransactionPartyResponse} from "@/models/responses/transactionParty/readTransactionPartyResponse";
import {UpdateTransactionPartyResponse} from "@/models/responses/transactionParty/updateTransactionPartyResponse";
import {UpdateTransactionPartyRequest} from "@/models/requests/transactionParty/updateTransactionPartyRequest";
import {
    DeleteTransactionPartyByTransactionPartyIdRequest
} from "@/models/requests/transactionParty/deleteTransactionPartyByTransactionPartyIdRequest";
import {
    DeleteTransactionPartyByTransactionPartyIdResponse
} from "@/models/responses/transactionParty/deleteTransactionPartyByTransactionPartyIdResponse";
import {ApiTagsEnum} from "@/utilities/enums/apiTagsEnum";
import {SearchTransactionPartyRequest} from "@/models/requests/transactionParty/searchTransactionPartyRequest";
import {SearchTransactionPartyResponse} from "@/models/responses/transactionParty/searchTransactionPartyResponse";

const controller = "transaction-party";
export const transactionPartyService = BaseService.appClient.injectEndpoints({
    endpoints: (builder) => ({
        createTransactionParty: builder.mutation<CreateTransactionPartyResponse, CreateTransactionPartyRequest>({
            query: (data) => ({
                url: `/${controller}/create`,
                method: ApiRequestMethodsEnum.POST,
                body: data,
            }),
            invalidatesTags: [{type: ApiTagsEnum.TransactionParty, id: "LIST"}],
        }),
        searchTransactionParty: builder.query<SearchTransactionPartyResponse, SearchTransactionPartyRequest>({
            query: (data) => ({
                url: `/${controller}/search`,
                method: ApiRequestMethodsEnum.GET,
                params: data
            }),
            providesTags: [{type: ApiTagsEnum.TransactionParty, id: "SEARCH_LIST"}],
        }),
        updateTransactionParty: builder.mutation<UpdateTransactionPartyResponse, UpdateTransactionPartyRequest>({
            query: (data) => ({
                url: `/${controller}/update`,
                method: ApiRequestMethodsEnum.POST,
                body: data,
            }),
            invalidatesTags: [{type: ApiTagsEnum.TransactionParty, id: "LIST"}],
        }),
        readTransactionParty: builder.query<ReadTransactionPartyResponse, void>({
            query: (data) => ({
                url: `/${controller}/read`,
                method: ApiRequestMethodsEnum.GET,
                body: data,
            }),
            providesTags: [{type: ApiTagsEnum.TransactionParty, id: "LIST"}],

        }),
        deleteTransactionPartyByTransactionPartyId: builder.mutation<DeleteTransactionPartyByTransactionPartyIdResponse, DeleteTransactionPartyByTransactionPartyIdRequest>({
            query: (data) => ({
                url: `/${controller}/delete/${data?.transactionPartyId}`,
                method: ApiRequestMethodsEnum.DELETE,
                body: data,
            }),
            invalidatesTags: [{type: ApiTagsEnum.TransactionParty, id: "LIST"}],
        }),

    }),

    overrideExisting: true
});

export const {
    useCreateTransactionPartyMutation,
    useLazyReadTransactionPartyQuery,
    useLazySearchTransactionPartyQuery,
    useDeleteTransactionPartyByTransactionPartyIdMutation,
    useReadTransactionPartyQuery,
    useUpdateTransactionPartyMutation,
} = transactionPartyService;
