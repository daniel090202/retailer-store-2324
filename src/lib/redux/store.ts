import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import cartReducer from "./features/cartSlice";
import authReducer from "./features/authSlice";
import usersReducer from "./features/usersSlice";
import productsReducer from "./features/productsSlice";
import customersReducer from "./features/customersSlice";

const makeStore = () => {
  return configureStore({
    reducer: {
      cartReducer,
      authReducer,
      usersReducer,
      productsReducer,
      customersReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export { makeStore };
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
