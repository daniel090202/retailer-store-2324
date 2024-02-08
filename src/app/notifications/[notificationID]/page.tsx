"use client";

import { useState, useEffect } from "react";

import icons from "@/assets/Icons";

import { Notification } from "@/models";
import { getNotificationWithID } from "@/services";

import SideBar from "./components/SideBar";

const NotificationDetails = ({
  params,
}: {
  params: { notificationID: string };
}) => {
  const [notification, setNotification] = useState<Notification>({
    id: 0,
    title: "",
    target: 0,
    degree: 0,
    type: 0,
    content: "",
    createdBy: "",
    createdAt: "",
    updatedAt: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const notificationData:
        | {
            statusCode: number;
            message: string;
            data?: Notification;
          }
        | undefined = await getNotificationWithID(params.notificationID);

      if (notificationData?.data !== undefined) {
        setNotification(notificationData.data);
      }
    };

    fetchData();
  }, [params.notificationID]);

  const normalizeDateTime = (dateTime: string): React.ReactNode => {
    const newDateTime = new Date(dateTime);

    return <p>{newDateTime.toLocaleDateString()}</p>;
  };

  return (
    <div className="md:flex">
      <SideBar />
      <div className="flex-1 mx-2 my-4 p-4 bg-white rounded-xl">
        <div className="flex justify-start items-center">
          <span
            onClick={() => window.history.back()}
            className="mr-4 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-200"
          >
            {icons.arrowLeft}
          </span>
          <h1 className="text-2xl font-bold">{notification.title}</h1>
        </div>
        <div className="mx-auto my-2 p-3 h-[320px] border rounded-xl">
          {notification.content}
        </div>
        <div className="flex flex-col items-end">
          <div className="flex mt-2">
            <span className="mx-4">Created at:</span>
            <span className="">
              {normalizeDateTime(notification.createdAt)}
            </span>
          </div>
          <div className="flex mt-2">
            <span className="mx-4">Updated at:</span>
            <span>{normalizeDateTime(notification.updatedAt)}</span>
          </div>
          <div className="flex mt-2">
            <span className="mx-4">Created by:</span>
            <span className="">{notification.createdBy}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationDetails;
