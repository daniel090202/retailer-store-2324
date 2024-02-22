import Link from "next/link";

import icons from "@/assets/Icons/index";
import { appRoutes } from "@/config/pathConfig";
import { useAppSelector } from "@/lib/redux/store";
import { renderNotificationDegree, renderNotificationType } from "@/utils";

import { Notification } from "@/models";

import Filter from "./Filter";

const Table = ({ notifications }: { notifications?: Array<Notification> }) => {
  const renderAllUsers = (): React.ReactNode => {
    return notifications?.map((notification, index) => {
      return (
        <tr key={index}>
          <td className="px-6 py-4 whitespace-nowrap">{notification.id}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            {notification.title.length === 0 ? "No title" : notification.title}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {renderNotificationDegree(notification.degree)}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {renderNotificationType(notification.type)}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {notification.createdBy}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {normalizeDateTime(notification.createdAt)}
          </td>
          <td>
            <Link
              href={appRoutes.getNotificationPath(notification.id)}
              className="flex items-center transition ease-in-out delay-150 hover:-translate-y-1"
            >
              {icons.solidLinkDirect}
            </Link>
          </td>
        </tr>
      );
    });
  };

  const normalizeDateTime = (dateTime: string): React.ReactNode => {
    const newDateTime = new Date(dateTime);

    return <p>{newDateTime.toLocaleDateString()}</p>;
  };

  return (
    <div>
      <Filter />
      <table className="w-full my-4 table-auto text-sm text-left">
        <thead className="bg-gray-100 text-gray-600 font-medium border-b">
          <tr>
            <th className="py-3 px-6">Barcode</th>
            <th className="py-3 px-6">Title</th>
            <th className="py-3 px-6">Degree</th>
            <th className="py-3 px-6">Type</th>
            <th className="py-3 px-6">Created by</th>
            <th className="py-3 px-6">Create in</th>
            <th className="py-3 px-6"></th>
          </tr>
        </thead>
        <tbody className="text-gray-600 divide-y">{renderAllUsers()}</tbody>
      </table>
    </div>
  );
};

export default Table;
