import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Notification } from "@/models";

const initialState = {
  hiddenNotifications: {
    error: false,
    allHiddenNotifications: undefined,
    isFetching: false,
  } as HiddenNotificationsState,
} as HiddenNotificationsInitialState;

const hiddenNotificationsSlice = createSlice({
  name: "hiddenNotifications",
  initialState,
  reducers: {
    getAllHiddenNotificationsStart: (state) => {
      state.hiddenNotifications.isFetching = true;
    },
    getAllHiddenNotificationsSuccess: (
      state,
      action: PayloadAction<{
        statusCode: number;
        message: string;
        data?: {
          totalPage: number;
          totalNotification: number;
          allNotifications: Array<Notification>;
        };
      }>
    ) => {
      state.hiddenNotifications.error = false;
      state.hiddenNotifications.isFetching = false;
      state.hiddenNotifications.allHiddenNotifications = action.payload;
    },
    getAllHiddenNotificationsFailed: (state) => {
      state.hiddenNotifications.error = true;
      state.hiddenNotifications.isFetching = false;
    },
  },
});

export const {
  getAllHiddenNotificationsStart,
  getAllHiddenNotificationsSuccess,
  getAllHiddenNotificationsFailed,
} = hiddenNotificationsSlice.actions;

export default hiddenNotificationsSlice.reducer;
