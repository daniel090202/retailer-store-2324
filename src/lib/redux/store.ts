import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";

import authReducer from "./features/authSlice";

const makeStore = () => {
  return configureStore({
    reducer: {
      authReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export { makeStore };
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
