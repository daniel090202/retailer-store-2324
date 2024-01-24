"use client";

import { useEffect } from "react";

import icons from "@/assets/Icons";
import { getAllArchivedUsers } from "@/redux-api";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";

import Table from "../components/Table";

const AllArchivedUsers = () => {
  const dispatch = useAppDispatch();

  const allArchivedUsers = useAppSelector((state) => {
    return state.archivedUsersReducer.archivedUsers.allArchivedUsers?.data;
  });

  useEffect(() => {
    const fetchProducts = async () => {
      await getAllArchivedUsers(dispatch);
    };

    fetchProducts();
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
          All archived users
        </h1>
      </div>
      <div className="my-2 flex justify-between">
        <span>Total archived users in the store:</span>
        <span className="mx-4 text-lg">
          {allArchivedUsers?.length.toLocaleString()}
        </span>
        <span>user(s)</span>
      </div>
      <Table users={allArchivedUsers} />
    </div>
  );
};

export default AllArchivedUsers;
