import * as request from "@/utils/http";

import { Notification } from "@/models";

const getNotificationWithID = async (id: string) => {
  try {
    const url = "/notifications/get-notification-with-ID";
    const params = new URLSearchParams([["ID", id]]);

    const response = await request.get(url, { params });

    const notificationsData: {
      statusCode: number;
      message: string;
      data?: Notification;
    } = response;

    if (notificationsData?.statusCode === 200) {
      return notificationsData;
    }
  } catch (error) {
    console.log(error);
  }
};

const getNotificationsWithFilterAndCategory = async (
  pageNumber: string = "1",
  title: string = "",
  category: string = "all",
  filter: string = "all",
  hiddenNotificationStatus: string = "published"
) => {
  try {
    const url = "/notifications/get-notifications-with-filter-and-category";
    const params = new URLSearchParams([
      ["page", pageNumber],
      ["title", title],
      ["category", category],
      ["filter", filter],
      ["hiddenNotificationStatus", hiddenNotificationStatus],
    ]);

    const response = await request.get(url, { params });

    const notificationsData: {
      statusCode: number;
      message: string;
      data?: {
        totalPage: number;
        totalNotification: number;
        allNotifications: Array<Notification>;
      };
    } = response;

    if (notificationsData.statusCode === 200) {
      return notificationsData;
    }
  } catch (error) {
    console.log(error);
  }
};

const createNotification = async (notification: {
  title: string;
  target: string;
  degree: string;
  type: string;
  content: string;
}) => {
  try {
    const url = "/notifications/create-notification";

    const response = await request.post(url, notification);

    const notificationData: {
      statusCode: number;
      message: string;
      data?: Notification;
    } = response.data;

    if (notificationData.statusCode === 200) {
      return notificationData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export {
  getNotificationWithID,
  getNotificationsWithFilterAndCategory,
  createNotification,
};
