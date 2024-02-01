import Link from "next/link";

import icons from "@/assets/Icons/index";

import { appRoutes } from "@/config/pathConfig";
import { renderPaymentMethod, renderPaymentStatus } from "@/utils";

import { Order } from "@/models";

const PurchasedHistoryTable = ({
  customerPhone,
  orders,
}: {
  customerPhone: string;
  orders?: Array<Order>;
}) => {
  const renderAllCustomers = (): React.ReactNode => {
    return orders?.map((order, index) => {
      return (
        <tr key={index}>
          <td className="px-6 py-4 whitespace-nowrap">{index}</td>
          <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            {order.cashierUserName}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {renderPaymentMethod(order.customerPaymentMethod)}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">{order.totalAmount}</td>
          <td className="px-6 py-4 whitespace-nowrap">{order.totalExpense}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            {renderPaymentStatus(order.paymentStatus)}
          </td>

          <td>
            <Link
              href={appRoutes.getCustomerPath(customerPhone, 2, order.id)}
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
    <table className="w-full my-4 table-auto text-sm text-left">
      <thead className="bg-gray-100 text-gray-600 font-medium border-b">
        <tr>
          <th className="py-3 px-6">No.</th>
          <th className="py-3 px-6">Order barcode</th>
          <th className="py-3 px-6">Taken by</th>
          <th className="py-3 px-6">Payment method</th>
          <th className="py-3 px-6">Total quantity</th>
          <th className="py-3 px-6">Total expense</th>
          <th className="py-3 px-6">Status</th>
          <th className="py-3 px-6"></th>
        </tr>
      </thead>
      <tbody className="text-gray-600 divide-y">{renderAllCustomers()}</tbody>
    </table>
  );
};

export default PurchasedHistoryTable;
