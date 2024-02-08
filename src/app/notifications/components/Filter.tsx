import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import icons from "@/assets/Icons";
import { useAppDispatch } from "@/lib/redux/store";
import {
  dispatchGetAllNotificationsWithFilterAndCategory,
  dispatchGetAllHiddenNotificationsWithFilterAndCategory,
} from "@/redux-api";

const Filter = () => {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();

  const pageNumber = searchParams?.get("page");

  const hiddenNotificationStatus = "hidden";
  const publishedNotificationStatus = "published";

  const [searchTitle, setSearchTitle] = useState("");
  const [filterOption, setFilterOption] = useState("-1");

  useEffect(() => {
    const fetchData = async () => {
      let filter;
      let category;

      switch (filterOption) {
        case "1":
          filter = "normal";
          category = "degree";
          break;
        case "2":
          category = "degree";
          filter = "important";
          break;
        case "3":
          filter = "urgent";
          category = "degree";
          break;
        case "4":
          category = "type";
          filter = "normal";
          break;
        case "5":
          category = "type";
          filter = "newest";
          break;
        case "6":
          category = "type";
          filter = "latest";
          break;
        case "7":
          category = "type";
          filter = "distribution";
          break;
        case "8":
          category = "type";
          filter = "salary";
          break;
        default:
          category = "all";
          filter = "all";
          break;
      }

      if (pageNumber !== null && pageNumber !== undefined) {
        await dispatchGetAllNotificationsWithFilterAndCategory(
          pageNumber,
          searchTitle.toUpperCase(),
          category,
          filter,
          publishedNotificationStatus,
          dispatch
        );

        await dispatchGetAllHiddenNotificationsWithFilterAndCategory(
          pageNumber,
          searchTitle.toUpperCase(),
          category,
          filter,
          hiddenNotificationStatus,
          dispatch
        );
      }
    };

    fetchData();
  }, [pageNumber, filterOption, searchTitle, dispatch]);

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
          <option value="0">All degree</option>
          <option value="1">Normal</option>
          <option value="2">Important</option>
          <option value="3">Urgent</option>
        </select>
      </div>
      <div className="p-2 mx-2 border rounded-xl bg-white shadow-lg cursor-pointer">
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
          <option value="0">All types</option>
          <option value="4">Newest</option>
          <option value="5">Latest</option>
          <option value="6">Distribution</option>
          <option value="7">Salary</option>
        </select>
      </div>
      <input
        type="text"
        value={searchTitle}
        placeholder="Search for title"
        onChange={(event) => {
          setSearchTitle(event.target.value);
        }}
        className="p-2 w-72 border rounded-xl shadow-lg outline-none"
      />
    </div>
  );
};

export default Filter;
