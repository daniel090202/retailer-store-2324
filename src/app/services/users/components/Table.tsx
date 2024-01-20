import Link from "next/link";

import icons from "@/assets/Icons/index";

import { renderUserGender } from "@/utils";
import { appRoutes } from "@/config/pathConfig";
import { useAppSelector } from "@/lib/redux/store";

import { User } from "@/models";

import Filter from "./Filter";

const Table = ({ users }: { users?: Array<User> }) => {
  const renderAllUsers = (): React.ReactNode => {
    return users?.map((user, index) => {
      return (
        <tr key={index}>
          <td className="px-6 py-4 whitespace-nowrap">{index}</td>
          <td className="px-6 py-4 whitespace-nowrap">{user.userName}</td>
          <td className="px-6 py-4 whitespace-nowrap">{user.age}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            {renderUserGender(user.gender)}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">{user.address}</td>
          <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
          <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
          <td>
            <Link
              href={appRoutes.user + `/${user.userName}`}
              className="flex items-center transition ease-in-out delay-150 hover:-translate-y-1"
            >
              {icons.solidLinkDirect}
            </Link>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <Filter />
      <table className="w-full my-4 table-auto text-sm text-left">
        <thead className="bg-gray-100 text-gray-600 font-medium border-b">
          <tr>
            <th className="py-3 px-6">No.</th>
            <th className="py-3 px-6">User name</th>
            <th className="py-3 px-6">Age</th>
            <th className="py-3 px-6">Gender</th>
            <th className="py-3 px-6">Address</th>
            <th className="py-3 px-6">Phone</th>
            <th className="py-3 px-6">Email</th>
            <th className="py-3 px-6"></th>
          </tr>
        </thead>
        <tbody className="text-gray-600 divide-y">{renderAllUsers()}</tbody>
      </table>
    </div>
  );
};

export default Table;
