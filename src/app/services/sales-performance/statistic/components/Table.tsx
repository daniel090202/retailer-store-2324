const Table = ({
  salesData,
}: {
  salesData?: Array<{
    date: number;
    month: number;
    year: number;
    day: string;
    totalOrders: number;
    totalRevenue: number;
    totalAmount: number;
  }>;
}) => {
  const renderSalesData = (): React.ReactNode => {
    if (salesData && salesData.length > 0) {
      return salesData?.map((saleData, index) => {
        return (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap">{index}</td>
            <td className="px-6 py-4 whitespace-nowrap">{saleData.day}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              {saleData.totalRevenue.toLocaleString()} VND
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {saleData.totalOrders}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {saleData.totalAmount}
            </td>
          </tr>
        );
      });
    } else {
      return (
        <tr>
          <td
            colSpan={5}
            rowSpan={7}
            className="p-4 italic text-base text-center"
          >
            There is no sales in this timeline or time period.
          </td>
        </tr>
      );
    }
  };

  return (
    <table className="w-full my-4 table-auto text-sm text-left">
      <thead className="bg-gray-100 text-gray-600 font-medium border-b">
        <tr>
          <th className="py-3 px-6">No.</th>
          <th className="py-3 px-6">Date</th>
          <th className="py-3 px-6">Overall revenue</th>
          <th className="py-3 px-6">Orders quantity</th>
          <th className="py-3 px-6">Products sold</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 divide-y">{renderSalesData()}</tbody>
    </table>
  );
};

export default Table;
