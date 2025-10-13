import {BaseService} from "@/configs/serviceConfig";
import {ApiRequestMethodsEnum} from "@/utilities/enums/apiRequestMethodsEnum";
import {ApiTagsEnum} from "@/utilities/enums/apiTagsEnum";
import {CreateLocRequest} from "@/models/requests/loc/createLocRequest";
import {CreateLocResponse} from "@/models/responses/loc/createLocResponse";

const controller = "loc";
export const locService = BaseService.appClient.injectEndpoints({
    endpoints: (builder) => ({
        createLoc: builder.mutation<CreateLocResponse, CreateLocRequest>({
            query: (data) => ({
                url: `/${controller}/create`,
                method: ApiRequestMethodsEnum.POST,
                body: data,
            }),
            invalidatesTags: [{type: ApiTagsEnum.Loc, id: "LIST"}],
        }),

    }),
    overrideExisting: true
});

export const {
    useCreateLocMutation,
} = locService;
