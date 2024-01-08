import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "@/dto";

type InitialState = {
  login: AuthState;
};

type AuthState = {
  isAuth: boolean;
  error: boolean;
  currentUser: User;
  isFetching: boolean;
  isModerator: boolean;
};

const initialState = {
  login: {
    isAuth: false,
    error: false,
    currentUser: new User(),
    isFetching: false,
    isModerator: false,
  } as AuthState,
} as InitialState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logInStart: (state) => {
      state.login.isFetching = true;
    },
    logInSuccess: (state, action: PayloadAction<User>) => {
      state.login.error = false;
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
    },
    logInFail: (state) => {
      state.login.error = true;
      state.login.isFetching = false;
    },
    logOutStart: (state) => {
      state.login.isFetching = true;
    },
    logOutSuccess: (state) => {
      state.login.error = false;
      state.login.isFetching = true;
      state.login.currentUser = new User();
    },
    logOutFail: (state) => {
      state.login.error = true;
      state.login.isFetching = false;
    },
  },
});

export const {
  logInFail,
  logOutFail,
  logInStart,
  logOutStart,
  logInSuccess,
  logOutSuccess,
} = authSlice.actions;

export default authSlice.reducer;
