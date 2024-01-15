import Link from "next/link";

import icons from "@/assets/Icons/index";

import { renderProductCategory } from "@/utils";
import { useAppSelector } from "@/lib/redux/store";
import { productDetailsPath } from "@/config/pathConfig";

import Filter from "./Filter";

const Table = () => {
  const products = useAppSelector((state) => {
    return state.productsReducer.products.allProducts?.data;
  });

  const renderAllProducts = (): React.ReactNode => {
    return products?.map((product, index) => {
      return (
        <tr key={index}>
          <td className="px-6 py-4 whitespace-nowrap">{index}</td>
          <td className="px-6 py-4 whitespace-nowrap">{product.SKU}</td>
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
            <select name="color" id="color">
              {product.color.map((color, index) => {
                return (
                  <option key={index} value={index}>
                    {color}
                  </option>
                );
              })}
            </select>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <select name="size" id="size">
              {product.size.map((size, index) => {
                return (
                  <option key={index} value={index}>
                    {size}
                  </option>
                );
              })}
            </select>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {product.salePrice.toLocaleString()}
          </td>
          <td className="px-6 py-4 text-center whitespace-nowrap">
            {product.remainInventory}
          </td>
          <td>
            <Link
              href={productDetailsPath + `/${product.SKU}`}
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
            <th className="py-3 px-6">Barcode</th>
            <th className="py-3 px-6">Name</th>
            <th className="py-3 px-6">Category</th>
            <th className="py-3 px-6">Color</th>
            <th className="py-3 px-6">Size</th>
            <th className="py-3 px-6">Sale price</th>
            <th className="py-3 px-6">Stock</th>
            <th className="py-3 px-6"></th>
          </tr>
        </thead>
        <tbody className="text-gray-600 divide-y">{renderAllProducts()}</tbody>
      </table>
    </div>
  );
};

export default Table;
