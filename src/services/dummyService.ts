import {BaseService} from "@/configs/serviceConfig";
import {CreateDummyRequest} from "@/models/requests/dummy/createDummyRequest";
import {GetThunkAPI} from "@reduxjs/toolkit";
import {ThunkApiConfig} from "@/configs/storeConfig";
import {DeleteDummyRequest} from "@/models/requests/dummy/deleteDummyRequest";
import {UpdateDummyRequest} from "@/models/requests/dummy/updateDummyRequest";


export class DummyService {
    private static controller = "dummy";
    static createDummy = (data: CreateDummyRequest, thunk: GetThunkAPI<ThunkApiConfig>) => {
        return BaseService.appClient(thunk).post(`/${this.controller}/create`, data)
    }
    static deleteDummy = (data: DeleteDummyRequest, thunk: GetThunkAPI<ThunkApiConfig>) => {
        return BaseService.appClient(thunk).delete(`/${this.controller}/delete/${data?.dummyId}`)
    }
    static readDummy = (others: GetThunkAPI<ThunkApiConfig>) => {
        return BaseService.appClient(others).get(`/${this.controller}/read`)
    }
    static updateDummy = (data: UpdateDummyRequest, thunk: GetThunkAPI<ThunkApiConfig>) => {
        return BaseService.appClient(thunk).post(`/${this.controller}/update`, data)
    }
}
