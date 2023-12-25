"use client";

import Table from "./Table";

import icons from "@/assets/Icons";
import Button from "@/components/Button";

const Users = () => {
  const handleAddUsers = () => {
    return;
  };

  const handleViewArchivedUsers = () => {
    return;
  };

  return (
    <div className="flex-1 mx-2 my-4 p-4 bg-white rounded-xl">
      <h1 className="text-2xl font-bold">Human resources management</h1>
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
            onClick={() => handleAddUsers()}
          >
            New product
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
    </div>
  );
};

export default Users;
