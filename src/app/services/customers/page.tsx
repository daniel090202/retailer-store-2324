"use client";

import { useEffect } from "react";

import icons from "@/assets/Icons";
import Button from "@/components/Button";

import { getAllCustomers } from "@/api";
import { useAppDispatch } from "@/lib/redux/store";

import Table from "./Table";

const Customers = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchCustomers = async () => {
      await getAllCustomers(dispatch);
    };

    fetchCustomers();
  }, []);

  const handleViewArchivedUsers = () => {
    return;
  };

  return (
    <div className="flex-1 mx-2 my-4 p-4 h-[680px] bg-white rounded-xl">
      <h1 className="my-2 text-2xl font-bold flex justify-center">
        Customers relationship management
      </h1>
      <div className="flex justify-between">
        <div className="my-2">
          <span>Total available customers in the store:</span>
          <span className="mx-4 text-lg">12</span>
          <span>person(s)</span>
        </div>
        <div>
          <Button
            leftIcon={icons.archive}
            rightIcon=""
            className=""
            onClick={() => handleViewArchivedUsers()}
          >
            Archive (10)
          </Button>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default Customers;
