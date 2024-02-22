import Link from "next/link";

import icons from "@/assets/Icons/index";
import { appRoutes } from "@/config/pathConfig";
import { renderNotificationStars } from "@/utils";

import { Notification } from "@/models";

const Card = ({ notification }: { notification: Notification }) => {
  const renderNotificationSignificance = () => {
    const notificationStars = [];

    for (let i = 0; i < renderNotificationStars(notification.degree); i++) {
      notificationStars.push(
        <span key={i} className="mr-2 my-2">
          {icons.solidStar}
        </span>
      );
    }

    return notificationStars;
  };

  return (
    <div className="max-w-sm h-52 p-4 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col dark:bg-gray-800 dark:border-gray-600 md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-2">
      {renderNotificationSignificance()}
      <Link
        href={appRoutes.getNotificationPath(notification.id)}
        className="my-2 text-xl font-semibold tracking-tight text-gray-800 line-clamp-1 dark:text-white"
      >
        {notification.title}
      </Link>
      <p className="mb-3 font-normal text-justify text-gray-500 line-clamp-2 dark:text-gray-600">
        {notification.content}
      </p>
      <Link
        href={appRoutes.getNotificationPath(notification.id)}
        className="inline-flex items-center text-gray-400 cursor-pointer hover:underline hover:text-gray-600"
      >
        <span>See more details</span>
        <div className="mx-2">{icons.solidLinkDirect}</div>
      </Link>
    </div>
  );
};

export default Card;
