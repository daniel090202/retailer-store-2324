import { Product } from "@/models";

const Table = ({ product }: { product?: Product }) => {
  const productDetails = product?.productDetail;

  const renderProductDetails = (): React.ReactNode => {
    return productDetails?.map((productDetail, index) => {
      return (
        <tr key={index} className="text-center">
          <td className="px-6 py-4 whitespace-nowrap">{index}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div
              style={{ backgroundColor: productDetail.color }}
              className={"w-8 h-8 border rounded-full shadow-xl"}
            ></div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">{productDetail.size}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            {productDetail.minimumInventory}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {productDetail.maximumInventory}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {productDetail.remainInventory}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {productDetail.soldQuantity}
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
          <th className="py-3 px-6">Color</th>
          <th className="py-3 px-6">Size</th>
          <th className="py-3 px-6">Minimum inventory</th>
          <th className="py-3 px-6">Maximum inventory</th>
          <th className="py-3 px-6">Remain inventory</th>
          <th className="py-3 px-6">Sold quantity</th>
          <th className="py-3 px-6"></th>
        </tr>
      </thead>
      <tbody className="text-gray-600 divide-y">{renderProductDetails()}</tbody>
    </table>
  );
};

export default Table;
