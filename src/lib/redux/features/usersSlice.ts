import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "@/models";

const initialState = {
  users: {
    error: false,
    allUsers: undefined,
    isFetching: false,
  } as UsersState,
} as UsersInitialState;

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getAllUsersStart: (state) => {
      state.users.isFetching = true;
    },
    getAllUsersSuccess: (
      state,
      action: PayloadAction<{
        statusCode: number;
        message: string;
        data?: {
          totalUser: number;
          totalPage: number;
          allUsers: Array<User>;
        };
      }>
    ) => {
      state.users.error = false;
      state.users.isFetching = false;
      state.users.allUsers = action.payload;
    },
    getAllUsersFailed: (state) => {
      state.users.error = true;
      state.users.isFetching = false;
    },
  },
});

export const { getAllUsersStart, getAllUsersSuccess, getAllUsersFailed } =
  usersSlice.actions;

export default usersSlice.reducer;
