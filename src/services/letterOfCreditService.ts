import {BaseService} from "@/configs/serviceConfig";
import {ApiRequestMethodsEnum} from "@/utilities/enums/apiRequestMethodsEnum";
import {ApiTagsEnum} from "@/utilities/enums/apiTagsEnum";
import {CreateLetterOfCreditRequest} from "@/models/requests/letterOfCredit/createLetterOfCreditRequest";
import {CreateLetterOfCreditResponse} from "@/models/responses/letterOfCredit/createLetterOfCreditResponse";
import {ReadLetterOfCreditResponse} from "@/models/responses/letterOfCredit/readLetterOfCreditResponse";
import {UpdateLetterOfCreditResponse} from "@/models/responses/letterOfCredit/updateLetterOfCreditResponse";
import {UpdateLetterOfCreditRequest} from "@/models/requests/letterOfCredit/updateLetterOfCreditRequest";
import {
    DeleteLetterOfCreditByLetterOfCreditIdResponse
} from "@/models/responses/letterOfCredit/deleteLetterOfCreditByLetterOfCreditIdResponse";
import {
    DeleteLetterOfCreditByLetterOfCreditIdRequest
} from "@/models/requests/letterOfCredit/deleteLetterOfCreditByLetterOfCreditIdRequest";
import {SearchLetterOfCreditRequest} from "@/models/requests/letterOfCredit/searchLetterOfCreditRequest";
import {SearchLetterOfCreditResponse} from "@/models/responses/letterOfCredit/searchLetterOfCreditResponse";

const controller = "letter-of-credit";
export const letterOfCreditService = BaseService.appClient.injectEndpoints({
    endpoints: (builder) => ({
        createLetterOfCredit: builder.mutation<CreateLetterOfCreditResponse, CreateLetterOfCreditRequest>({
            query: (data) => ({
                url: `/${controller}/create`,
                method: ApiRequestMethodsEnum.POST,
                body: data,
            }),
            invalidatesTags: [{type: ApiTagsEnum.LetterOfCredit, id: "LIST"}],
        }),
        updateLetterOfCredit: builder.mutation<UpdateLetterOfCreditResponse, UpdateLetterOfCreditRequest>({
            query: (data) => ({
                url: `/${controller}/update`,
                method: ApiRequestMethodsEnum.POST,
                body: data,
            }),
            invalidatesTags: [{type: ApiTagsEnum.LetterOfCredit, id: "LIST"}],
        }),
        searchLetterOfCredit: builder.query<SearchLetterOfCreditResponse, SearchLetterOfCreditRequest>({
            query: (data) => ({
                url: `/${controller}/search`,
                method: ApiRequestMethodsEnum.GET,
                params: data,
            }),
            providesTags: [{type: ApiTagsEnum.LetterOfCredit, id: "SEARCH_LIST"}],
        }),
        readLetterOfCredit: builder.query<ReadLetterOfCreditResponse, void>({
            query: (data) => ({
                url: `/${controller}/read`,
                method: ApiRequestMethodsEnum.GET,
                body: data,
            }),
            providesTags: [{type: ApiTagsEnum.LetterOfCredit, id: "LIST"}],
        }),
        deleteLetterOfCreditByLetterOfCreditId: builder.mutation<DeleteLetterOfCreditByLetterOfCreditIdResponse, DeleteLetterOfCreditByLetterOfCreditIdRequest>({
            query: (data) => ({
                url: `/${controller}/delete`,
                method: ApiRequestMethodsEnum.DELETE,
                body: data,
            }),
            invalidatesTags: [{type: ApiTagsEnum.LetterOfCredit, id: "LIST"}],
        }),

    }),
    overrideExisting: true
});

export const {
    useCreateLetterOfCreditMutation,
    useLazyReadLetterOfCreditQuery,
    useLazySearchLetterOfCreditQuery,
    useReadLetterOfCreditQuery,
    useDeleteLetterOfCreditByLetterOfCreditIdMutation,
    useUpdateLetterOfCreditMutation
} = letterOfCreditService;
