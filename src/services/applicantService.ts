import {BaseService} from "@/configs/serviceConfig";
import {ApiRequestMethodsEnum} from "@/utilities/enums/apiRequestMethodsEnum";
import {ApiTagsEnum} from "@/utilities/enums/apiTagsEnum";
import {SearchApplicantRequest} from "@/models/requests/applicant/searchApplicantRequest";
import {SearchApplicantResponse} from "@/models/responses/applicant/searchApplicantResponse";
import {ReadApplicantResponse} from "@/models/responses/applicant/readApplicantResponse";
import {CreateApplicantRequest} from "@/models/requests/applicant/createApplicantRequest";
import {CreateApplicantResponse} from "@/models/responses/applicant/createApplicantResponse";
import {UpdateApplicantRequest} from "@/models/requests/applicant/updateApplicantRequest";
import {UpdateApplicantResponse} from "@/models/responses/applicant/updateApplicantResponse";

const controller = "applicant";
export const applicantService = BaseService.appClient.injectEndpoints({
    endpoints: (builder) => ({
        createApplicant: builder.mutation<CreateApplicantResponse, CreateApplicantRequest>({
            query: (data) => ({
                url: `/${controller}/create`,
                method: ApiRequestMethodsEnum.POST,
                body: data,
            }),
            invalidatesTags: [{type: ApiTagsEnum.Applicant, id: "LIST"}],
        }),
        updateApplicant: builder.mutation<UpdateApplicantResponse, UpdateApplicantRequest>({
            query: (data) => ({
                url: `/${controller}/update`,
                method: ApiRequestMethodsEnum.POST,
                body: data,
            }),
            invalidatesTags: [{type: ApiTagsEnum.Applicant, id: "LIST"}],
        }),
        searchApplicant: builder.query<SearchApplicantResponse, SearchApplicantRequest>({
            query: (data) => ({
                url: `/${controller}/search`,
                method: ApiRequestMethodsEnum.GET,
                params: data,
            }),
            providesTags: [{type: ApiTagsEnum.Applicant, id: "SEARCH_LIST"}],
        }),
        readApplicant: builder.query<ReadApplicantResponse, void>({
            query: (data) => ({
                url: `/${controller}/read`,
                method: ApiRequestMethodsEnum.GET,
                body: data,
            }),
            providesTags: [{type: ApiTagsEnum.Applicant, id: "LIST"}],
        }),

    }),
    overrideExisting: true
});

export const {
    useLazySearchApplicantQuery,
    useCreateApplicantMutation,
    useLazyReadApplicantQuery,
    useReadApplicantQuery,
    useSearchApplicantQuery,
    useUpdateApplicantMutation
} = applicantService;
