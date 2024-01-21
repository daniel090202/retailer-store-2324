import { useState, useEffect } from "react";

import icons from "@/assets/Icons/index";
import { getProductsWithQuery } from "@/services";
import { useAppDispatch } from "@/lib/redux/store";
import { getAllProductsSuccess } from "@/lib/redux/features";

import { Product } from "@/models";

const Filter = () => {
  const dispatch = useAppDispatch();

  const [searchSKU, setSearchSKU] = useState("");
  const [filterOption, setFilterOption] = useState("-1");

  useEffect(() => {
    const fetchData = async () => {
      let filter;

      switch (filterOption) {
        case "1":
          filter = "alphabetical";
          break;
        case "2":
          filter = "ascending-sale-price";
          break;
        case "3":
          filter = "descending-sale-price";
          break;
        case "4":
          filter = "ascending-stock";
          break;
        case "5":
          filter = "descending-stock";
          break;
        default:
          filter = "all";
          break;
      }

      const productsData:
        | {
            statusCode: number;
            message: string;
            data?: Array<Product>;
          }
        | undefined = await getProductsWithQuery(searchSKU, filter);

      if (productsData !== undefined && productsData.data !== undefined) {
        console.log(productsData);
        dispatch(getAllProductsSuccess(productsData));
      }
    };

    fetchData();
  }, [filterOption, searchSKU]);

  const handleSelectFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterOption(event.target.value);
  };

  return (
    <div className="my-4 text-base flex justify-start items-center">
      <div className="p-2 border rounded-xl shadow-lg bg-white cursor-pointer">
        <label htmlFor="filter" className="mx-2 cursor-pointer">
          {icons.filter}
        </label>
        <select
          id="filter"
          name="filter"
          value={filterOption}
          onChange={(event) => handleSelectFilter(event)}
          className="appearance-none outline-none cursor-pointer"
        >
          <option value="0">All</option>
          <option value="1">Alphabetical name</option>
          <option value="2">Ascending price</option>
          <option value="3">Descending price</option>
          <option value="4">Ascending stock</option>
          <option value="5">Descending stock</option>
        </select>
      </div>
      <input
        type="text"
        value={searchSKU}
        placeholder="Search for stock keeping unit"
        onChange={(event) => {
          setSearchSKU(event.target.value);
        }}
        className="p-2 mx-2 w-72 border rounded-xl shadow-lg outline-none"
      />
    </div>
  );
};

export default Filter;
