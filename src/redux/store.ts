import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./feature/ProductsSlice";
import authSlice from "./feature/authSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    users: authSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
