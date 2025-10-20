import {combineReducers} from "@reduxjs/toolkit";
import {baseStore} from "@/stores/baseStore";
import {modalStore} from "@/stores/modalStore";
import {authStore} from "@/stores/authStore";
import {BaseService} from "@/configs/serviceConfig";
import { authenticationService } from "@/services/authenticationService";

export const rootReducer = combineReducers({
  auth: authStore.reducer,
  // dummy: dummyStore.reducer,
  modal: modalStore.reducer,
  base: baseStore.reducer,
  [BaseService.appClient.reducerPath]: BaseService.appClient.reducer,
  // auth: auth.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
