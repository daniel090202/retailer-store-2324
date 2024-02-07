"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import icons from "@/assets/Icons";

import { appRoutes } from "@/config/pathConfig";
import { getAllArchivedUsers } from "@/redux-api";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";

import Button from "@/app/components/Button";

import Table from "../components/Table";
import CreateUser from "../components/CreateUser";

const AllUsers = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();

  const [createUserModal, setCreateUserModal] = useState(false);

  const allUsersData = useAppSelector((state) => {
    return state.usersReducer.users.allUsers?.data;
  });

  const allArchivedUsersData = useAppSelector((state) => {
    return state.archivedUsersReducer.archivedUsers.allArchivedUsers?.data;
  });

  const allUsers = allUsersData?.allUsers;
  const totalUser = allUsersData?.totalUser;
  const pageNumber = searchParams?.get("page");
  const allArchivedUsers = allArchivedUsersData?.allArchivedUsers;
  const totalPage = allUsersData?.totalPage === 0 ? 1 : allUsersData?.totalPage;

  useEffect(() => {
    const fetchUsers = async () => {
      if (pageNumber !== null && pageNumber !== undefined) {
        await getAllArchivedUsers(pageNumber, dispatch);
      }
    };

    fetchUsers();
  }, [totalPage, pageNumber, dispatch]);

  const handleCreateUser = () => {
    setCreateUserModal(true);
  };

  const handleViewArchivedUsers = () => {
    const archivedPageNumber = 1;
    const path = `${appRoutes.users.archived}?page=${archivedPageNumber}`;

    router.push(path);
  };

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
  };

  const handleViewNextPage = () => {
    if (
      pageNumber !== null &&
      totalPage !== undefined &&
      pageNumber !== undefined &&
      parseInt(pageNumber) < totalPage
    ) {
      const nextPage = parseInt(pageNumber) + 1;
      const path = `${appRoutes.users.all}?page=${nextPage}`;

      router.push(path);
    }
  };

  return (
    <div className="flex-1 flex flex-col mx-2 my-4 p-4 h-[680px] bg-white rounded-xl">
      <h1 className="my-2 text-2xl font-bold flex justify-center">
        Human resources management
      </h1>
      <div className="flex justify-between">
        <div className="my-2">
          <span className="font-bold">Total available users in the store:</span>
          <span className="mx-4 text-lg">{totalUser?.toLocaleString()}</span>
          <span>user(s)</span>
        </div>
        <div className="flex">
          <Button
            className="mx-2"
            leftIcon={icons.plus}
            onClick={() => handleCreateUser()}
          >
            New user
          </Button>
          <Button
            leftIcon={icons.archive}
            onClick={() => handleViewArchivedUsers()}
          >
            Archive ({allArchivedUsers?.length.toLocaleString()})
          </Button>
        </div>
      </div>
      <div className="flex-1">
        <Table users={allUsers} />
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
      <CreateUser
        createUserModal={createUserModal}
        setCreateUserModal={setCreateUserModal}
      />
    </div>
  );
};

export default AllUsers;
