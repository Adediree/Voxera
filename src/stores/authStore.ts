import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {LoginResponse} from "@/models/responses/authentication/loginResponse";
import {CompleteEnrollmentRequest} from "@/models/requests/authentication/completeEnrollmentRequest";
import {InitiateEnrollmentRequest} from "@/models/requests/authentication/initiateEnrollmentRequest";
import {CompletePasswordResetRequest} from "@/models/requests/authentication/completePasswordResetRequest";
import {InitiatePasswordResetRequest} from "@/models/requests/authentication/initiatePasswordResetRequest";
import {LoginRequest} from "@/models/requests/authentication/loginRequest";

export type AuthState = {
    token: string,
    loading: boolean,
    userInfo: Omit<LoginResponse, "currentOrganisation" | "responseCode" | "responseMessage">
    completeEnrollmentFlowPayload: CompleteEnrollmentRequest & InitiateEnrollmentRequest
    completePasswordResetFlowPayload: CompletePasswordResetRequest & InitiatePasswordResetRequest,
    loginFlowPayload: LoginRequest,
};

const initialState: AuthState = {
    token: "",
    loading: false,
    userInfo: {} as Omit<LoginResponse, "currentOrganisation" | "responseCode" | "responseMessage">,
    completeEnrollmentFlowPayload: {} as CompleteEnrollmentRequest & InitiateEnrollmentRequest,
    completePasswordResetFlowPayload: {} as CompletePasswordResetRequest & InitiatePasswordResetRequest,
    loginFlowPayload: {} as LoginRequest,
};

const action = {
    logout: createAsyncThunk(
        "auth/action/logout",
        async (_, thunkAPI) => {
            try {
                thunkAPI.dispatch(authStore.mutation.reset());
                return
            } catch (e: any) {
                return thunkAPI.rejectWithValue(e?.message);
            }
        }
    ),
};
const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }, reset: () => ({...initialState}),
        setCompleteEnrollmentFlowPayload: (state, {payload}: {
            payload: AuthState["completeEnrollmentFlowPayload"]
        }) => {
            state.completeEnrollmentFlowPayload = payload;
        },
        setCoreAuthState: (state, {payload}: {
            payload: LoginResponse
        }) => {
            state.token = payload.token;
            state.userInfo = payload;
        },
        setCompletePasswordResetFlowPayload: (state, {payload}: {
            payload: AuthState["completePasswordResetFlowPayload"]
        }) => {
            state.completePasswordResetFlowPayload = payload;
        },
        setLoginFlowPayload: (state, {payload}: {
            payload: AuthState["loginFlowPayload"]
        }) => {
            state.loginFlowPayload = payload;
        },

        resetCompleteEnrollmentFlowPayload: (state) => {
            state.completeEnrollmentFlowPayload = {} as CompleteEnrollmentRequest & InitiateEnrollmentRequest
        },
    },
});

export const authStore = {
    reducer: slice.reducer,
    action: action,
    mutation: slice.actions,
};
