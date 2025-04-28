import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CreateDummyResponse} from "@/models/responses/dummy/createDummyResponse";
import {ReadDummyResponse} from "@/models/responses/dummy/readDummyResponse";
import {CreateDummyRequest} from "@/models/requests/dummy/createDummyRequest";
import {DeleteDummyRequest} from "@/models/requests/dummy/deleteDummyRequest";
import {DeleteDummyResponse} from "@/models/responses/dummy/deleteDummyResponse";
import {UpdateDummyRequest} from "@/models/requests/dummy/updateDummyRequest";
import {UpdateDummyResponse} from "@/models/responses/dummy/updateDummyResponse";
import {DummyService} from "@/services/dummyService";
import {BaseEnum} from "@/utilities/enums/baseEnum";

export type DummyState = {
    loading: boolean,
    readDummyResponse: ReadDummyResponse
};

const initialState: DummyState = {
    loading: false,
    readDummyResponse: {} as ReadDummyResponse
}

const action = {
    createDummy: createAsyncThunk(
        "auth/action/createDummy",
        async (data: CreateDummyRequest, thunkAPI) => {
            try {
                const response: CreateDummyResponse = (await DummyService.createDummy(data, thunkAPI)).data;
                return response
            } catch (e: any) {
                return thunkAPI.rejectWithValue(e?.message);
            }
        }
    ),
    deleteDummy: createAsyncThunk(
        "auth/action/deleteDummy",
        async (data: DeleteDummyRequest, thunkAPI) => {
            try {
                const response: DeleteDummyResponse = (await DummyService.deleteDummy(data, thunkAPI)).data;
                return response
            } catch (e: any) {
                return thunkAPI.rejectWithValue(e?.message);
            }
        }
    ),
    readDummy: createAsyncThunk(
        "auth/action/readDummy",
        async (_, thunkAPI) => {
            try {
                const response: ReadDummyResponse = (await DummyService.readDummy(thunkAPI)).data;
                return response
            } catch (e: any) {
                return thunkAPI.rejectWithValue(e?.message);
            }
        }
    ),
    updateDummy: createAsyncThunk(
        "auth/action/updateDummy",
        async (data: UpdateDummyRequest, thunkAPI) => {
            try {
                const response: UpdateDummyResponse = (await DummyService.updateDummy(data, thunkAPI)).data;
                return response
            } catch (e: any) {
                return thunkAPI.rejectWithValue(e?.message);
            }
        }
    ),
}


const slice = createSlice({
    name: "dummyStore",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        reset: () => ({...initialState}),
    },
    extraReducers: (builder) => {
        builder
            .addCase(action.createDummy.pending, (state) => {
                state.loading = true;
            })
            .addCase(action.createDummy.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(action.deleteDummy.pending, (state) => {
                state.loading = true;
            })
            .addCase(action.deleteDummy.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(action.readDummy.pending, (state) => {
                state.loading = true;
            })
            .addCase(action.readDummy.fulfilled, (state, action: PayloadAction<ReadDummyResponse>) => {
                state.loading = false;
                if (action.payload.responseCode == BaseEnum.RESPONSE_CODE_SUCCESS) {
                    state.readDummyResponse = action.payload
                }
            })
            .addCase(action.updateDummy.pending, (state) => {
                state.loading = true;
            })
            .addCase(action.updateDummy.fulfilled, (state) => {
                state.loading = false;
            })
    },
});

export const dummyStore = {
    reducer: slice.reducer,
    action: action,
    mutation: slice.actions,
};
