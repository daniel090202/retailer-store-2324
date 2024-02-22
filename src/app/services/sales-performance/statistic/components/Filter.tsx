import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import icons from "@/assets/Icons/index";

import { error } from "@/lib/hot-toast";
import { useAppDispatch } from "@/lib/redux/store";
import { dispatchSalesByTimelineOrTimePeriod } from "@/redux-api";

const Filter = () => {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();

  const [showTimePeriod, setShowTimePeriod] = useState(false);
  const [endTimePeriod, setEndTimePeriod] = useState<string>("");
  const [startTimePeriod, setStartTimePeriod] = useState<string>("");
  const [filterTimelineOption, setFilterTimelineOption] = useState<string>("2");

  const pageNumber = searchParams?.get("page");

  useEffect(() => {
    const fetchData = async () => {
      if (pageNumber !== null && pageNumber !== undefined) {
        await dispatchSalesByTimelineOrTimePeriod(
          dispatch,
          pageNumber,
          filterTimelineOption,
          startTimePeriod,
          endTimePeriod
        );
      }
    };

    fetchData();
  }, [
    pageNumber,
    dispatch,
    endTimePeriod,
    startTimePeriod,
    filterTimelineOption,
  ]);

  const handleSelectFilter = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const target = event.target.value;

    if (target === "4") {
      setShowTimePeriod(true);
      setFilterTimelineOption(event.target.value);
    } else {
      setShowTimePeriod(false);
      setFilterTimelineOption(event.target.value);
    }
  };

  const handleStartDayPeriod = (event: React.ChangeEvent<HTMLInputElement>) => {
    const startDay = new Date(event.target.value);

    setStartTimePeriod(startDay.toString());
  };

  const handleEndDayPeriod = (event: React.ChangeEvent<HTMLInputElement>) => {
    const endDay = new Date(event.target.value);

    setEndTimePeriod(endDay.toString());
  };

  return (
    <div className="my-4 text-base flex justify-start items-center">
      <div className="p-2 mr-8 border rounded-xl shadow-lg bg-white cursor-pointer">
        <label htmlFor="filter" className="mx-2 cursor-pointer">
          {icons.filter}
        </label>
        <select
          id="filter"
          name="filter"
          value={filterTimelineOption}
          onChange={(event) => handleSelectFilter(event)}
          className="appearance-none outline-none cursor-pointer"
        >
          <option value="0">Today</option>
          <option value="1">Yesterday</option>
          <option value="2">This week</option>
          <option value="3">This month</option>
          <option value="4">Time period</option>
        </select>
      </div>
      {showTimePeriod ? (
        <div>
          <input
            type="date"
            id="startDate"
            name="startDate"
            placeholder="Search for date"
            onChange={(event) => {
              handleStartDayPeriod(event);
            }}
            className="p-2 mr-8 w-72 border rounded-xl shadow-lg outline-none"
          />
          <input
            type="date"
            id="endDate"
            name="endDate"
            placeholder="Search for date"
            onChange={(event) => {
              handleEndDayPeriod(event);
            }}
            className="p-2 w-72 border rounded-xl shadow-lg outline-none"
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Filter;
