import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./features/authSlice";

const makeStore = () => {
  return configureStore({
    reducer: {
      authReducer,
    },
  });
};

export { makeStore };
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
