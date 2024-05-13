import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { customerApi } from "./customerApi";

export const store = configureStore({
  reducer: {
    [customerApi.reducerPath]: customerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(customerApi.middleware),
});

setupListeners(store.dispatch);
