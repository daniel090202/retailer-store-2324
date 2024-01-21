import { useState, useEffect } from "react";

import icons from "@/assets/Icons/index";
import { getCustomersWithQuery } from "@/services";
import { useAppDispatch } from "@/lib/redux/store";
import { getAllCustomersSuccess } from "@/lib/redux/features";

import { Customer } from "@/models";

const Filter = () => {
  const dispatch = useAppDispatch();

  const [searchCustomerPhone, setSearchCustomerPhone] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const customersData:
        | {
            statusCode: number;
            message: string;
            data?: Array<Customer>;
          }
        | undefined = await getCustomersWithQuery(searchCustomerPhone);

      if (customersData !== undefined && customersData.data !== undefined) {
        dispatch(getAllCustomersSuccess(customersData));
      }
    };

    fetchData();
  }, [searchCustomerPhone]);

  return (
    <div className="my-4 text-base flex justify-start items-center">
      <div className="p-2 border rounded-xl shadow-lg bg-white">
        <label htmlFor="filter" className="mx-2">
          {icons.filter}
        </label>
        <select
          name="filter"
          id="filter"
          className="appearance-none outline-none"
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
        placeholder="Search for phone number"
        value={searchCustomerPhone}
        onChange={(event) => {
          setSearchCustomerPhone(event.target.value);
        }}
        className="p-2 mx-2 w-72 border rounded-xl shadow-lg outline-none"
      />
    </div>
  );
};

export default Filter;
