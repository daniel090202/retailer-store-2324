"use client";

import { useEffect } from "react";

import icons from "@/assets/Icons";
import { getAllArchivedCustomers } from "@/redux-api";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";

import Table from "../components/Table";

const AllArchivedCustomers = () => {
  const dispatch = useAppDispatch();

  const allArchivedCustomers = useAppSelector((state) => {
    return state.archivedCustomersReducer.archivedCustomers.allArchivedCustomers
      ?.data;
  });

  useEffect(() => {
    const fetchCustomers = async () => {
      await getAllArchivedCustomers(dispatch);
    };

    fetchCustomers();
  }, []);

  return (
    <div className="flex-1 mx-2 my-4 p-4 h-[680px] bg-white rounded-xl">
      <div className="flex items-center bg-white rounded-xl">
        <span
          onClick={() => window.history.back()}
          className="mr-4 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-200"
        >
          {icons.arrowLeft}
        </span>
        <h1 className="my-2 text-2xl font-bold flex justify-center">
          All archived customers
        </h1>
      </div>
      <div className="my-2 flex justify-start">
        <span>Total available customers in the store:</span>
        <span className="mx-4 text-lg">
          {allArchivedCustomers?.length.toLocaleString()}
        </span>
        <span>person(s)</span>
      </div>
      <Table customers={allArchivedCustomers} />
    </div>
  );
};

export default AllArchivedCustomers;
