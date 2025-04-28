import {combineReducers} from "@reduxjs/toolkit";
import {baseStore} from "@/stores/baseStore";
import {modalStore} from "@/stores/modalStore";
import {baseTableStore} from "@/stores/baseTableStore";
import {dummyStore} from "@/stores/dummyStore";

export const rootReducer = combineReducers({
    dummy: dummyStore.reducer,
    baseTable: baseTableStore.reducer,
    modal: modalStore.reducer,
    base: baseStore.reducer,
    // auth: auth.reducer,
})

export type RootState = ReturnType<typeof rootReducer>;
