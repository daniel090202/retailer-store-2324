import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "@/models";

const initialState = {
  archivedUsers: {
    error: false,
    allArchivedUsers: undefined,
    isFetching: false,
  } as ArchivedUsersState,
} as ArchivedUsersInitialState;

const usersSlice = createSlice({
  name: "archivedUsers",
  initialState,
  reducers: {
    getAllArchivedUsersStart: (state) => {
      state.archivedUsers.isFetching = true;
    },
    getAllArchivedUsersSuccess: (
      state,
      action: PayloadAction<{
        statusCode: number;
        message: string;
        data?: {
          totalPage: number;
          totalArchivedUser: number;
          allArchivedUsers: Array<User>;
        };
      }>
    ) => {
      state.archivedUsers.error = false;
      state.archivedUsers.isFetching = false;
      state.archivedUsers.allArchivedUsers = action.payload;
    },
    getAllArchivedUsersFailed: (state) => {
      state.archivedUsers.error = true;
      state.archivedUsers.isFetching = false;
    },
  },
});

export const {
  getAllArchivedUsersStart,
  getAllArchivedUsersSuccess,
  getAllArchivedUsersFailed,
} = usersSlice.actions;

export default usersSlice.reducer;
