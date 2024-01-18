import Link from "next/link";

import icons from "@/assets/Icons/index";

import { renderUserGender } from "@/utils";
import { useAppSelector } from "@/lib/redux/store";
import { customerProfilePath } from "@/config/pathConfig";

import Filter from "./Filter";

const Table = () => {
  const customers = useAppSelector((state) => {
    return state.customersReducer.customers.allCustomers?.data;
  });

  const renderAllCustomers = (): React.ReactNode => {
    return customers?.map((customer, index) => {
      return (
        <tr key={index}>
          <td className="px-6 py-4 whitespace-nowrap">0</td>
          <td className="px-6 py-4 whitespace-nowrap">
            {customer.customerName}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">{customer.age}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            {renderUserGender(customer.gender)}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">{customer.address}</td>
          <td className="px-6 py-4 whitespace-nowrap">{customer.phone}</td>
          <td className="px-6 py-4 whitespace-nowrap">{customer.email}</td>
          <td>
            <Link
              href={customerProfilePath + `/${customer.phone}`}
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
            <th className="py-3 px-6">Full name</th>
            <th className="py-3 px-6">Age</th>
            <th className="py-3 px-6">Gender</th>
            <th className="py-3 px-6">Address</th>
            <th className="py-3 px-6">Phone</th>
            <th className="py-3 px-6">Email</th>
            <th className="py-3 px-6"></th>
          </tr>
        </thead>
        <tbody className="text-gray-600 divide-y">{renderAllCustomers()}</tbody>
      </table>
    </div>
  );
};

export default Table;
