"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import icons from "@/assets/Icons";
import { appRoutes } from "@/config/pathConfig";
import { getAllArchivedUsers } from "@/redux-api";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";

import Button from "@/app/components/Button";

import Table from "../components/Table";

const AllArchivedUsers = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();

  const allArchivedUsersData = useAppSelector((state) => {
    return state.archivedUsersReducer.archivedUsers.allArchivedUsers?.data;
  });

  const pageNumber = searchParams?.get("page");
  const totalPage = allArchivedUsersData?.totalPage;
  const allArchivedUsers = allArchivedUsersData?.allArchivedUsers;
  const totalArchivedUser = allArchivedUsersData?.totalArchivedUser;

  useEffect(() => {
    const fetchUsers = async () => {
      if (pageNumber !== null && pageNumber !== undefined) {
        await getAllArchivedUsers(pageNumber, dispatch);
      }
    };

    fetchUsers();
  }, [pageNumber, dispatch]);

  const handleViewPreviousPage = () => {
    if (
      pageNumber !== null &&
      pageNumber !== undefined &&
      parseInt(pageNumber) > 1
    ) {
      const previousPage = parseInt(pageNumber) - 1;
      const path = `${appRoutes.users.all}?page=${previousPage}`;

      router.push(path);
    }

    return;
  };

  const handleViewNextPage = () => {
    if (
      totalPage !== undefined &&
      pageNumber !== null &&
      pageNumber !== undefined &&
      parseInt(pageNumber) < totalPage
    ) {
      const nextPage = parseInt(pageNumber) + 1;
      const path = `${appRoutes.users.all}?page=${nextPage}`;

      router.push(path);
    }

    return;
  };

  return (
    <div className="flex-1 flex flex-col mx-2 my-4 p-4 h-[680px] bg-white rounded-xl">
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
      <div className="my-2">
        <span>Total archived users in the store:</span>
        <span className="mx-4 text-lg">
          {totalArchivedUser?.toLocaleString()}
        </span>
        <span>user(s)</span>
      </div>
      <div className="flex-1">
        <Table users={allArchivedUsers} />
      </div>
      <div className="flex justify-center items-center">
        <span>Page</span>
        <div className="mx-2">
          <span>{pageNumber}</span>
          <span>/</span>
          <span>{totalPage}</span>
        </div>
        <Button
          className="mx-4"
          leftIcon={icons.chevronLeft}
          onClick={() => handleViewPreviousPage()}
          type={pageNumber == "1" ? "disabled" : "default"}
        >
          Previous
        </Button>
        <Button
          rightIcon={icons.chevronRight}
          onClick={() => handleViewNextPage()}
          type={pageNumber == totalPage ? "disabled" : "default"}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default AllArchivedUsers;
