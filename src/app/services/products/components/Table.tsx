import Link from "next/link";

import icons from "@/assets/Icons/index";

import { appRoutes } from "@/config/pathConfig";
import { renderProductCategory } from "@/utils";

import { Product } from "@/models";

import Filter from "./Filter";

const Table = ({ products }: { products?: Array<Product> }) => {
  const renderAllProducts = (): React.ReactNode => {
    return products?.map((product, index) => {
      return (
        <tr key={index}>
          <td className="px-6 py-4 whitespace-nowrap">{index}</td>
          <td className="px-6 py-4 whitespace-nowrap">{product.UPC}</td>
          <td className="px-6 py-4">{product.name}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <select name="category" id="category">
              {product.category.map((category, index) => {
                return (
                  <option key={index} value={index}>
                    {renderProductCategory(category)}
                  </option>
                );
              })}
            </select>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <select id="color" name="color">
              {product.productDetails.map((productDetail, index) => {
                return (
                  <option key={index} value={index}>
                    {productDetail.color}
                  </option>
                );
              })}
            </select>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <select id="size" name="size">
              {product.productDetails.map((productDetail, index) => {
                return (
                  <option key={index} value={index}>
                    {productDetail.size}
                  </option>
                );
              })}
            </select>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {product.salePrice.toLocaleString()}
          </td>
          <td>
            <Link
              href={appRoutes.product + `/${product.UPC}`}
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
            <th className="py-3 px-6">Universal barcode</th>
            <th className="py-3 px-6">Name</th>
            <th className="py-3 px-6">Category</th>
            <th className="py-3 px-6">Color</th>
            <th className="py-3 px-6">Size</th>
            <th className="py-3 px-6">Sale price</th>
            <th className="py-3 px-6"></th>
          </tr>
        </thead>
        <tbody className="text-gray-600 divide-y">{renderAllProducts()}</tbody>
      </table>
    </div>
  );
};

export default Table;
