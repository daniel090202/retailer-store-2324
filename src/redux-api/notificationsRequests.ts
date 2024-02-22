import {
  getAllNotificationsStart,
  getAllNotificationsSuccess,
  getAllNotificationsFailed,
  getAllHiddenNotificationsStart,
  getAllHiddenNotificationsSuccess,
  getAllHiddenNotificationsFailed,
} from "@/lib/redux/features";
import { getNotificationsWithFilterAndCategory } from "@/services";

import { Notification } from "@/models";
import { AppDispatch } from "@/lib/redux/store";

const dispatchGetAllNotificationsWithFilterAndCategory = async (
  pageNumber: string,
  title: string,
  category: string,
  filter: string,
  hiddenNotificationStatus: string,
  dispatch: AppDispatch
) => {
  dispatch(getAllNotificationsStart());

  try {
    const notificationsData:
      | {
          statusCode: number;
          message: string;
          data?: {
            totalPage: number;
            totalNotification: number;
            allNotifications: Array<Notification>;
          };
        }
      | undefined = await getNotificationsWithFilterAndCategory(
      pageNumber,
      title,
      category,
      filter,
      hiddenNotificationStatus
    );

    if (notificationsData?.statusCode === 200) {
      dispatch(getAllNotificationsSuccess(notificationsData));
    }
  } catch (error) {
    dispatch(getAllNotificationsFailed());
  }
};

const dispatchGetAllHiddenNotificationsWithFilterAndCategory = async (
  pageNumber: string,
  title: string,
  category: string,
  filter: string,
  hiddenNotificationStatus: string,
  dispatch: AppDispatch
) => {
  dispatch(getAllHiddenNotificationsStart());

  try {
    const notificationsData:
      | {
          statusCode: number;
          message: string;
          data?: {
            totalPage: number;
            totalNotification: number;
            allNotifications: Array<Notification>;
          };
        }
      | undefined = await getNotificationsWithFilterAndCategory(
      pageNumber,
      title,
      category,
      filter,
      hiddenNotificationStatus
    );

    if (notificationsData?.statusCode === 200) {
      dispatch(getAllHiddenNotificationsSuccess(notificationsData));
    }
  } catch (error) {
    dispatch(getAllHiddenNotificationsFailed());
  }
};

export {
  dispatchGetAllNotificationsWithFilterAndCategory,
  dispatchGetAllHiddenNotificationsWithFilterAndCategory,
};
