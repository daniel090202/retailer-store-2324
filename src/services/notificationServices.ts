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

const getNotificationsForSpecificTarget = async (userName: string = "") => {
  try {
    const url = "/notifications/get-notifications-for-specific-target";
    const params = new URLSearchParams([["userName", userName]]);

    const response = await request.get(url, { params });

    const notificationsData: {
      statusCode: number;
      message: string;
      data?: Array<Notification>;
    } = response;

    if (notificationsData.statusCode === 200) {
      return notificationsData.data;
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
  degree: number;
  type: number;
  content: string;
  createdBy: string;
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

const hiddenNotification = async (
  barcode: string
): Promise<Notification | undefined> => {
  try {
    const url = "/notifications/hidden-notification";

    const response = await request.patch(url, { barcode });

    const hiddenNotificationData: {
      statusCode: number;
      message: string;
      data?: Notification;
    } = response.data;

    if (hiddenNotificationData.statusCode === 200) {
      return hiddenNotificationData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const publishNotification = async (
  barcode: string
): Promise<Notification | undefined> => {
  try {
    const url = "/notifications/publish-notification";

    const response = await request.patch(url, { barcode });

    const publishedNotificationData: {
      statusCode: number;
      message: string;
      data?: Notification;
    } = response.data;

    if (publishedNotificationData.statusCode === 200) {
      return publishedNotificationData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const updateNotificationTitle = async (
  barcode: string,
  title: string
): Promise<Notification | undefined> => {
  try {
    const url = "/notifications/update-notification-title";

    const response = await request.patch(url, { barcode, title });

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

const updateNotificationContent = async (
  barcode: string,
  content: string
): Promise<Notification | undefined> => {
  try {
    const url = "/notifications/update-notification-content";

    const response = await request.patch(url, { barcode, content });

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
  getNotificationsForSpecificTarget,
  getNotificationsWithFilterAndCategory,
  createNotification,
  hiddenNotification,
  publishNotification,
  updateNotificationTitle,
  updateNotificationContent,
};
