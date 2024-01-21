import { useState, useEffect } from "react";

import icons from "@/assets/Icons";
import { getUsersWithQuery } from "@/services";
import { useAppDispatch } from "@/lib/redux/store";
import { getAllUsersSuccess } from "@/lib/redux/features";

import { User } from "@/models";

const Filter = () => {
  const dispatch = useAppDispatch();

  const [searchUsername, setSearchUsername] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const usersData:
        | {
            statusCode: number;
            message: string;
            data?: Array<User>;
          }
        | undefined = await getUsersWithQuery(searchUsername);

      if (usersData !== undefined && usersData.data !== undefined) {
        dispatch(getAllUsersSuccess(usersData));
      }
    };

    fetchData();
  }, [searchUsername]);

  return (
    <div className="my-4 text-base flex justify-start items-center">
      <div className="p-2 border rounded-xl bg-white shadow-lg">
        <label htmlFor="filter" className="mx-2 cursor-pointer">
          {icons.filter}
        </label>
        <select
          name="filter"
          id="filter"
          className="appearance-none outline-none cursor-pointer"
        >
          <option value="0">All</option>
          <option value="1">Age</option>
          <option value="2">Gender</option>
          <option value="3">Address</option>
        </select>
      </div>
      <input
        type="text"
        value={searchUsername}
        placeholder="Search for username"
        onChange={(event) => {
          setSearchUsername(event.target.value);
        }}
        className="p-2 mx-2 w-72 border rounded-xl shadow-lg outline-none"
      />
    </div>
  );
};

export default Filter;
