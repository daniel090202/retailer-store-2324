import { useState, useEffect } from "react";

import icons from "@/assets/Icons";
import { getUsersWithQuery } from "@/services";
import { useAppDispatch } from "@/lib/redux/store";
import { getAllUsersSuccess } from "@/lib/redux/features";

import { User } from "@/models";

const Filter = () => {
  const dispatch = useAppDispatch();

  const [filterOption, setFilterOption] = useState("-1");
  const [searchUsername, setSearchUsername] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let filter;

      switch (filterOption) {
        case "1":
          filter = "alphabetical";
          break;
        case "2":
          filter = "male";
          break;
        case "3":
          filter = "female";
          break;
        case "4":
          filter = "ascending-age";
          break;
        case "5":
          filter = "descending-age";
          break;
        default:
          filter = "all";
          break;
      }

      const usersData:
        | {
            statusCode: number;
            message: string;
            data?: Array<User>;
          }
        | undefined = await getUsersWithQuery(searchUsername, filter);

      if (usersData !== undefined && usersData.data !== undefined) {
        dispatch(getAllUsersSuccess(usersData));
      }
    };

    fetchData();
  }, [filterOption, searchUsername]);

  const handleSelectFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterOption(event.target.value);
  };

  return (
    <div className="my-4 text-base flex justify-start items-center">
      <div className="p-2 border rounded-xl bg-white shadow-lg cursor-pointer">
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
          <option value="2">Male users</option>
          <option value="3">Female users</option>
          <option value="4">Ascending age</option>
          <option value="5">Descending age</option>
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
