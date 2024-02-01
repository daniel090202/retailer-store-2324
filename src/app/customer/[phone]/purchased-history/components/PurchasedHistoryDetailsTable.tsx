import { OrderDetail } from "@/models";

const PurchasedHistoryDetailsTable = ({
  orderDetails,
}: {
  orderDetails?: Array<OrderDetail>;
}) => {
  const renderAllCustomers = (): React.ReactNode => {
    return orderDetails?.map((orderDetail, index) => {
      return (
        <tr key={index}>
          <td className="px-6 py-4 whitespace-nowrap">{index}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            {orderDetail.productSKU}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {orderDetail.purchasedQuantity}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {orderDetail.totalExpense}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {orderDetail.notes.length > 0 ? orderDetail.notes : "No comments"}
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
          <th className="py-3 px-6">Stock barcode</th>
          <th className="py-3 px-6">Purchase quantity</th>
          <th className="py-3 px-6">Total expense</th>
          <th className="py-3 px-6">Notes</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 divide-y">{renderAllCustomers()}</tbody>
    </table>
  );
};

export default PurchasedHistoryDetailsTable;
