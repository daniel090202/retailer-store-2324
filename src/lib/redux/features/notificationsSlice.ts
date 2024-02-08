import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Notification } from "@/models";

const initialState = {
  notifications: {
    error: false,
    allNotifications: undefined,
    isFetching: false,
  } as NotificationsState,
} as NotificationsInitialState;

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    getAllNotificationsStart: (state) => {
      state.notifications.isFetching = true;
    },
    getAllNotificationsSuccess: (
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
      state.notifications.error = false;
      state.notifications.isFetching = false;
      state.notifications.allNotifications = action.payload;
    },
    getAllNotificationsFailed: (state) => {
      state.notifications.error = true;
      state.notifications.isFetching = false;
    },
  },
});

export const {
  getAllNotificationsStart,
  getAllNotificationsSuccess,
  getAllNotificationsFailed,
} = notificationsSlice.actions;

export default notificationsSlice.reducer;
