import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import cartReducer from "./features/cartSlice";
import authReducer from "./features/authSlice";
import usersReducer from "./features/usersSlice";
import productsReducer from "./features/productsSlice";
import customersReducer from "./features/customersSlice";
import archivedUsersReducer from "./features/archivedUsersSlice";
import archivedProductsReducer from "./features/archivedProductsSlice";
import archivedCustomersReducer from "./features/archivedCustomersSlice";

const makeStore = () => {
  return configureStore({
    reducer: {
      cartReducer,
      authReducer,
      usersReducer,
      productsReducer,
      customersReducer,
      archivedUsersReducer,
      archivedProductsReducer,
      archivedCustomersReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export { makeStore };
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
