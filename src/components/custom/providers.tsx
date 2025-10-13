"use client";

import { Provider } from "react-redux";
import { persistor, store } from "@/configs/storeConfig";
import { ModalProvider } from "qucoon-components";
import { PersistGate } from "redux-persist/integration/react";
import GlobalModal from "@/components/ui/modal/GlobalModal";
import React from "react";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

export function GlobalModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ModalProvider>
      <GlobalModal />
      {children}
    </ModalProvider>
  );
}
