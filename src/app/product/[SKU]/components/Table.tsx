import {
  renderProductStorageLocation,
  renderProductDisplayLocation,
} from "@/utils";

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
          <td className="px-6 py-4 whitespace-nowrap">
            <select id="color" name="color">
              {productDetail.storageLocation.map((storageLocation, index) => {
                return (
                  <option key={index} value={index}>
                    {renderProductStorageLocation(storageLocation)}
                  </option>
                );
              })}
            </select>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {productDetail.displayLocation[0] === 0 ? (
              renderProductDisplayLocation(productDetail.displayLocation[0])
            ) : (
              <select id="color" name="color">
                {productDetail.displayLocation.map((displayLocation, index) => {
                  return (
                    <option key={index} value={index}>
                      {renderProductDisplayLocation(displayLocation)}
                    </option>
                  );
                })}
              </select>
            )}
          </td>
        </tr>
      );
    });
  };

  return (
    <table className="w-full my-4 table-auto text-sm text-center">
      <thead className="bg-gray-100 text-gray-600 font-medium border-b">
        <tr>
          <th className="py-3 px-6">No.</th>
          <th className="py-3 px-6">Color</th>
          <th className="py-3 px-6">Size</th>
          <th className="py-3 px-6">Minimum</th>
          <th className="py-3 px-6">Maximum</th>
          <th className="py-3 px-6">Remain</th>
          <th className="py-3 px-6">Sold quantity</th>
          <th className="py-3 px-6">Storage</th>
          <th className="py-3 px-6">Display</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 divide-y">{renderProductDetails()}</tbody>
    </table>
  );
};

export default Table;
