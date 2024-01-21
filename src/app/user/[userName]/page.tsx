"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import icons from "@/assets/Icons";
import images from "@/assets/Images";

import { getUsersWithQuery } from "@/services";
import { User as UserDTO } from "@/models";
import {
  renderUserGender,
  renderUserAddress,
  renderUserPosition,
} from "@/utils";

import SideBar from "./components/SideBar";

const User = ({ params }: { params: { userName: string } }) => {
  const [user, setUser] = useState({
    email: "",
    gender: 0,
    age: 0,
    phone: "",
    address: 0,
    position: 0,
    userName: "",
    firstName: "",
    middleName: "",
    lastName: "",
    admin: false,
    active: false,
    createdAt: "",
    updatedAt: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const users:
        | {
            statusCode: number;
            message: string;
            data?: Array<UserDTO>;
          }
        | undefined = await getUsersWithQuery(params.userName);

      if (users !== undefined && users.data !== undefined) {
        setUser(users.data[0]);
      }
    };

    fetchData();
  }, []);

  const normalizeDateTime = (dateTime: string): React.ReactNode => {
    const newDateTime = new Date(dateTime);

    return <p>{newDateTime.toLocaleDateString()}</p>;
  };

  return (
    <div className="md:flex">
      <SideBar active={user.active} admin={user.admin} />
      <div className="flex-1 mx-2 my-4 p-4 bg-white rounded-xl">
        <div className="flex justify-start items-center">
          <span
            onClick={() => window.history.back()}
            className="mr-4 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-200"
          >
            {icons.arrowLeft}
          </span>
          <div className="flex justify-center items-center">
            <div className="shadow-lg border rounded-xl p-3 cursor-pointer">
              <Image
                src={images.maleDefaultProfilePicture}
                width={40}
                height={40}
                alt="User's profile picture."
              />
            </div>
            <h1 className="mx-4 text-2xl font-bold">{user.userName}</h1>
          </div>
        </div>
        <div className="mx-auto py-3 space-y-3 grid grid-cols-3 gap-x-3">
          <div className="my-4">
            <label htmlFor="firstName">First name</label>
            <p
              id="firstName"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {user.firstName}
            </p>
          </div>
          <div className="my-4">
            <label htmlFor="middleName">Middle name</label>
            <p
              id="middleName"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {user.middleName}
            </p>
          </div>
          <div className="my-4">
            <label htmlFor="lastName">Last name</label>
            <p
              id="lastName"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {user.lastName}
            </p>
          </div>
          <div className="my-4">
            <label htmlFor="email">Email address</label>
            <p
              id="email"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {user.email}
            </p>
          </div>
          <div className="my-4">
            <label htmlFor="address">Residential address</label>
            <p
              id="address"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {renderUserAddress(user.address)}
            </p>
          </div>
          <div className="my-4">
            <label htmlFor="phone">Phone number</label>
            <p
              id="phone"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {user.phone}
            </p>
          </div>
          <div className="my-4">
            <label htmlFor="age">Age</label>
            <p
              id="age"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {user.age}
            </p>
          </div>
          <div className="my-4">
            <label htmlFor="gender">Gender</label>
            <p
              id="gender"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {renderUserGender(user.gender)}
            </p>
          </div>
          <div className="my-4">
            <label htmlFor="position">Position</label>
            <p
              id="position"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {renderUserPosition(user.position)}
            </p>
          </div>
          <div className="my-4">
            <label htmlFor="createdAt">Created at</label>
            <div
              id="createdAt"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {normalizeDateTime(user.createdAt)}
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="updatedAt">Updated at</label>
            <div
              id="updatedAt"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {normalizeDateTime(user.updatedAt)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
