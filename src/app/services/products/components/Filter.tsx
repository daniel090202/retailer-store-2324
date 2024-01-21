import { useState, useEffect } from "react";

import icons from "@/assets/Icons/index";
import { getProductsWithQuery } from "@/services";
import { useAppDispatch } from "@/lib/redux/store";
import { getAllProductsSuccess } from "@/lib/redux/features";

import { Product } from "@/models";

const Filter = () => {
  const dispatch = useAppDispatch();

  const [searchSKU, setSearchSKU] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const productsData:
        | {
            statusCode: number;
            message: string;
            data?: Array<Product>;
          }
        | undefined = await getProductsWithQuery(searchSKU);

      if (productsData !== undefined && productsData.data !== undefined) {
        console.log(productsData);
        dispatch(getAllProductsSuccess(productsData));
      }
    };

    fetchData();
  }, [searchSKU]);

  return (
    <div className="my-4 text-base flex justify-start items-center">
      <div className="p-2 border rounded-xl shadow-lg bg-white">
        <label htmlFor="filter" className="mx-2">
          {icons.filter}
        </label>
        <select
          name="filter"
          id="filter"
          className="cursor-pointer appearance-none outline-none"
        >
          <option value="0">All</option>
          <option value="1">Name</option>
          <option value="2">Color</option>
          <option value="3">Size</option>
          <option value="4">Price</option>
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
