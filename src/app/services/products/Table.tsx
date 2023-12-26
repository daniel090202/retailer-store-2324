import icons from "@/assets/Icons/index";

import Filter from "./Filter";

const Table = () => {
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
            <th className="py-3 px-6">Remain stock</th>
            <th className="py-3 px-6"></th>
          </tr>
        </thead>
        <tbody className="text-gray-600 divide-y">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">0</td>
            <td className="px-6 py-4 whitespace-nowrap">#50001</td>
            <td className="px-6 py-4 whitespace-nowrap">Cardigan</td>
            <td className="px-6 py-4 whitespace-nowrap">Sweater</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <select name="color" id="color">
                <option value="0">#E0BBE4</option>
                <option value="1">#957DAD</option>
                <option value="2">#D291BC</option>
              </select>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <select name="size" id="size">
                <option value="0">XS</option>
                <option value="1">S</option>
                <option value="2">M</option>
                <option value="3">L</option>
                <option value="4">XL</option>
                <option value="5">2XL</option>
                <option value="5">3XL</option>
                <option value="5">4XL</option>
              </select>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">350.000 VND</td>
            <td className="px-6 py-4 whitespace-nowrap">12</td>
            <td>{icons.solidLinkDirect}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
