"use client";

import { useState, useEffect } from "react";

import icons from "@/assets/Icons";
import {
  getNotificationWithID,
  updateNotificationTitle,
  updateNotificationContent,
} from "@/services";
import { error, success, toastWithIcon } from "@/lib/hot-toast";

import { Notification } from "@/models";

import SideBar from "./components/SideBar";

const NotificationDetails = ({
  params,
}: {
  params: { notificationID: string };
}) => {
  const [editMode, setEditMode] = useState(false);
  const [editedNotification, setEditedNotification] = useState<Notification>({
    id: 0,
    title: "",
    target: "",
    degree: 0,
    type: 0,
    content: "",
    createdBy: "",
    hiddenStatus: false,
    createdAt: "",
    updatedAt: "",
  });
  const [notification, setNotification] = useState<Notification>({
    id: 0,
    title: "",
    target: "",
    degree: 0,
    type: 0,
    content: "",
    createdBy: "",
    hiddenStatus: false,
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
        setNotification({ ...notificationData.data });
        setEditedNotification({ ...notificationData.data });
      }
    };

    fetchData();
  }, [params.notificationID]);

  const handleOpenEditMode = () => {
    toastWithIcon("You enter in edit mode.", "✍️");
    setEditMode(true);
  };

  const handleCloseEditMode = () => {
    toastWithIcon("You are back to view mode.", "👀");
    setEditMode(false);
    setEditedNotification({ ...notification });
  };

  const handleEditNotification = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEditedNotification({
      ...editedNotification,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdateNotificationTitle = async () => {
    const notification: Notification | undefined =
      await updateNotificationTitle(
        params.notificationID,
        editedNotification.title
      );

    if (notification !== undefined) {
      success("Successfully changed the notification's title.");

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      error("Failed to change the notification's title at this time.");
    }
  };

  const handleUpdateNotificationContent = async () => {
    const notification: Notification | undefined =
      await updateNotificationContent(
        params.notificationID,
        editedNotification.content
      );

    if (notification !== undefined) {
      success("Successfully changed the notification's content.");

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      error("Failed to change the notification's content at this time.");
    }
  };

  const normalizeDateTime = (dateTime: string): React.ReactNode => {
    const newDateTime = new Date(dateTime);

    return <p>{newDateTime.toLocaleDateString()}</p>;
  };

  return (
    <div className="md:flex">
      <SideBar
        barcode={notification.id.toString()}
        type={notification.type}
        degree={notification.degree}
        target={notification.target}
        hiddenStatus={notification.hiddenStatus}
      />
      <div className="flex-1 mx-2 my-4 p-4 bg-white rounded-xl">
        <div className="flex justify-start items-center">
          <span
            onClick={() => window.history.back()}
            className="px-2 py-1 rounded-full cursor-pointer hover:bg-gray-200"
          >
            {icons.arrowLeft}
          </span>
          {editMode ? (
            <input
              id="title"
              name="title"
              onChange={(event) => {
                handleEditNotification(event);
              }}
              placeholder={notification.title}
              className="p-4 mx-4 my-2 text-2xl font-bold border rounded-xl shadow-xl outline-none"
            />
          ) : (
            <h1 className="mx-4 text-2xl font-bold">{notification.title}</h1>
          )}
          {editMode &&
          editedNotification.title !== "" &&
          editedNotification.title !== notification.title ? (
            <span
              onClick={() => {
                handleUpdateNotificationTitle();
              }}
              className="mr-4 rounded-full cursor-pointer hover:text-gray-400"
            >
              {icons.circleCheck}
            </span>
          ) : (
            <span></span>
          )}
          {editMode ? (
            <span
              onClick={() => {
                handleCloseEditMode();
              }}
              className="mx-2 text-xl cursor-pointer hover:text-gray-400 hover:transition hover:ease-in-out hover:delay-150 hover:hover:-translate-y-2"
            >
              {icons.circleXmark}
            </span>
          ) : (
            <span
              onClick={() => {
                handleOpenEditMode();
              }}
              className="mx-2 text-xl cursor-pointer hover:text-gray-400 hover:transition hover:ease-in-out hover:delay-150 hover:hover:-translate-y-2"
            >
              {icons.squaredPen}
            </span>
          )}
        </div>
        <div className="flex items-center">
          {editMode ? (
            <textarea
              id="content"
              name="content"
              onChange={(event) => {
                handleEditNotification(event);
              }}
              placeholder={notification.content}
              className="flex-1 mx-auto my-2 w-full p-3 h-[320px] border rounded-xl shadow-xl outline-none"
            />
          ) : (
            <div className="flex-1 mx-auto my-2 p-3 h-[320px] border rounded-xl">
              {notification.content}
            </div>
          )}
          {editMode &&
          editedNotification.content !== "" &&
          editedNotification.content !== notification.content ? (
            <span
              onClick={() => {
                handleUpdateNotificationContent();
              }}
              className="ml-4 rounded-full cursor-pointer hover:text-gray-400"
            >
              {icons.circleCheck}
            </span>
          ) : (
            <span></span>
          )}
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
