"use client";

import { useState } from "react";

import icons from "@/assets/Icons";
import { useAppSelector } from "@/lib/redux/store";

import Button from "@/app/components/Button";

import Table from "../components/Table";
import SideBar from "../components/SideBar";
import CreateNotification from "../components/CreateNotification";

const AllNotifications = () => {
  const [createNotificationModal, setCreateNotificationModal] = useState(false);

  const allNotificationsData = useAppSelector((state) => {
    return state.notificationsReducer.notifications.allNotifications?.data;
  });

  const allHiddenNotificationsData = useAppSelector((state) => {
    return state.hiddenNotificationsReducer.hiddenNotifications
      .allHiddenNotifications?.data;
  });

  const notifications = allNotificationsData?.allNotifications;
  const hiddenNotifications = allHiddenNotificationsData?.allNotifications;

  const handleCreateNotifications = () => {
    setCreateNotificationModal(!createNotificationModal);
  };

  const handleViewDraftNotifications = () => {
    return;
  };

  return (
    <div className="md:flex">
      <SideBar />
      <div className="flex-1 flex flex-col mx-2 my-4 p-4 h-[680px] bg-white rounded-xl">
        <h1 className="my-2 text-2xl font-bold flex justify-center">
          Notifications management
        </h1>
        <div className="flex justify-between">
          <div className="my-2">
            <span className="font-bold">
              Total announced notifications in the store:
            </span>
            <span className="mx-4 text-lg">
              {notifications?.length.toLocaleString()}
            </span>
            <span>notification(s)</span>
          </div>
          <div className="flex">
            <Button
              className="mx-2"
              leftIcon={icons.plus}
              onClick={() => handleCreateNotifications()}
            >
              New notification
            </Button>
            <Button
              leftIcon={icons.archive}
              onClick={() => handleViewDraftNotifications()}
            >
              Draft ({hiddenNotifications?.length.toLocaleString()})
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <Table />
        </div>
        <CreateNotification
          createNotificationModal={createNotificationModal}
          setCreateNotificationModal={setCreateNotificationModal}
        />
      </div>
    </div>
  );
};

export default AllNotifications;
