"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import { getNotificationsForSpecificTarget } from "@/services";

import { Notification } from "@/models";
import Card from "@/app/components/Card";

const Home = () => {
  const session = useSession();

  const [notifications, setNotifications] = useState<Array<Notification>>();

  useEffect(() => {
    const fetchData = async () => {
      const userName = session.data?.user.userName;

      const notifications: Array<Notification> | undefined =
        await getNotificationsForSpecificTarget(userName);

      if (notifications !== undefined) {
        setNotifications(notifications);
      }
    };

    fetchData();
  }, [session]);

  const renderNotificationCards = () => {
    return notifications?.map((notification, index) => {
      return <Card key={index} notification={notification} />;
    });
  };

  return (
    <div className="mx-2 gap-x-14 w-full h-[580px] p-4 md:flex md:flex-col md:p-8">
      <div className="w-min relative p-4 shadow-lg rounded-xl">
        <h1 className="text-xl md:text-2xl lg:text-4xl">Notifications</h1>
        <span className="absolute z-10 px-2 py-1 text-xs top-[-8px] right-[216px] rounded-full bg-white shadow-xl md:py-2 md:px-4 md:top-[-12px] md:right-[-24px] md:text-base md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1">
          {notifications?.length}
        </span>
      </div>
      <div className="my-4 grid grid-cols-4 gap-4">
        {renderNotificationCards()}
      </div>
    </div>
  );
};

export default Home;
