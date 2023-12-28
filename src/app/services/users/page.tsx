"use client";

import { useState } from "react";

import icons from "@/assets/Icons";
import Button from "@/components/Button";

import Table from "./Table";
import CreateUser from "./CreateUser";

const Users = () => {
  const [createUserModal, setCreateUserModal] = useState(false);

  const handleCreateUser = () => {
    setCreateUserModal(true);
  };

  const handleViewArchivedUsers = () => {
    return;
  };

  return (
    <div className="flex-1 mx-2 my-4 p-4 h-[680px] bg-white rounded-xl">
      <h1 className="my-2 text-2xl font-bold flex justify-center">
        Human resources management
      </h1>
      <div className="flex justify-between">
        <div className="my-2">
          <span>Total available users in the store:</span>
          <span className="mx-4 text-lg">12</span>
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
            Archive (10)
          </Button>
        </div>
      </div>
      <Table />
      <CreateUser
        createUserModal={createUserModal}
        setCreateUserModal={setCreateUserModal}
      />
    </div>
  );
};

export default Users;
