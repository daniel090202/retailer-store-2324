"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import icons from "@/assets/Icons";
import Button from "@/components/Button";

import { readAllArchivedUsers } from "@/api";
import { appRoutes } from "@/config/pathConfig";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";

import Table from "../components/Table";
import CreateUser from "../components/CreateUser";

const AllUsers = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [createUserModal, setCreateUserModal] = useState(false);

  const allUsers = useAppSelector((state) => {
    return state.usersReducer.users.allUsers?.data;
  });

  const allArchivedUsers = useAppSelector((state) => {
    return state.archivedUsersReducer.archivedUsers.allArchivedUsers?.data;
  });

  useEffect(() => {
    const fetchProducts = async () => {
      await readAllArchivedUsers(dispatch);
    };

    fetchProducts();
  }, []);

  const handleCreateUser = () => {
    setCreateUserModal(true);
  };

  const handleViewArchivedUsers = () => {
    router.push(appRoutes.users.archived);
  };

  return (
    <div className="flex-1 mx-2 my-4 p-4 h-[680px] bg-white rounded-xl">
      <h1 className="my-2 text-2xl font-bold flex justify-center">
        Human resources management
      </h1>
      <div className="flex justify-between">
        <div className="my-2">
          <span>Total available users in the store:</span>
          <span className="mx-4 text-lg">
            {allUsers?.length.toLocaleString()}
          </span>
          <span>user(s)</span>
        </div>
        <div>
          <Button
            leftIcon={icons.plus}
            rightIcon=""
            className="mx-2"
            onClick={() => handleCreateUser()}
          >
            New user
          </Button>
          <Button
            leftIcon={icons.archive}
            rightIcon=""
            className=""
            onClick={() => handleViewArchivedUsers()}
          >
            Archive ({allArchivedUsers?.length.toLocaleString()})
          </Button>
        </div>
      </div>
      <Table users={allUsers} />
      <CreateUser
        createUserModal={createUserModal}
        setCreateUserModal={setCreateUserModal}
      />
    </div>
  );
};

export default AllUsers;
