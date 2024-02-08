"use client";

import { useAppSelector } from "@/lib/redux/store";

const SideBar = () => {
  const allNotificationsData = useAppSelector((state) => {
    return state.notificationsReducer.notifications.allNotifications?.data;
  });

  const notifications = allNotificationsData?.allNotifications;

  return (
    <aside className="md:w-1/4 md:mx-2 md:my-4 text-lg font-medium rounded-xl">
      <div className="p-4 rounded-xl border-2">
        <h1 className="text-xl text-center">Notifications</h1>
        <hr className="my-2" />
        <div className="my-2 flex justify-between">
          <span>Total notifications:</span>
          <span>{notifications?.length.toLocaleString()}</span>
          <span>messages</span>
        </div>
        <div className="my-2 flex justify-between">
          <span>Types of notifications:</span>
          <span>All</span>
        </div>
        <div className="my-2 flex justify-between">
          <span>Target receivers:</span>
          <span>All</span>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
