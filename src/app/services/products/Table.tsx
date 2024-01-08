import Link from "next/link";

import icons from "@/assets/Icons/index";

import { productDetailsPath } from "@/config/pathConfig";

import { renderProductCategory } from "@/utils/productProperties";

import Filter from "./Filter";

const Table = () => {
  const product = {
    barcode: "SWEATER0001",
    name: "Christmas Eve cardigan 2023",
    category: 2,
    color: ["#E0BBE4", "#957DAD", "#D291BC"],
    size: ["XS", "S", "L", "XL", "2XL", "3XL", "4XL"],
    salePrice: 350000,
    remainStock: 3,
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
        <tbody className="text-gray-600 divide-y">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">0</td>
            <td className="px-6 py-4 whitespace-nowrap">{product.barcode}</td>
            <td className="px-6 py-4">{product.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              {renderProductCategory(product.category)}
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
              {product.salePrice.toLocaleString()} VND
            </td>
            <td className="px-6 py-4 text-center whitespace-nowrap">
              {product.remainStock}
            </td>
            <td>
              <Link
                href={productDetailsPath + `/${product.barcode}`}
                className="flex items-center transition ease-in-out delay-150 hover:-translate-y-1"
              >
                {icons.solidLinkDirect}
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
