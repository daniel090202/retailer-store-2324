"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import icons from "@/assets/Icons";
import images from "@/assets/Images";

import { User as UserDTO } from "@/models";
import {
  getUserWithUserName,
  updateUserFirstName,
  updateUserMiddleName,
  updateUserLastName,
  updateUserPhoneNumber,
  updateUserAge,
  updateUserGender,
} from "@/services";
import { error, success, toastWithIcon } from "@/lib/hot-toast";
import { renderUserAddress, renderUserPosition } from "@/utils";

import SideBar from "./components/SideBar";

const User = ({ params }: { params: { userName: string } }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({
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
    archived: false,
    admin: false,
    active: false,
    verified: false,
    createdAt: "",
    updatedAt: "",
  });
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
    archived: false,
    admin: false,
    active: false,
    verified: false,
    createdAt: "",
    updatedAt: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const user: UserDTO | undefined = await getUserWithUserName(
        params.userName
      );

      if (user !== undefined) {
        setUser(user);
        setEditedUser(user);
      }
    };

    fetchData();
  }, [params.userName]);

  const handleOpenEditMode = () => {
    toastWithIcon("You enter in edit mode.", "✍️");
    setEditMode(true);
  };

  const handleCloseEditMode = () => {
    toastWithIcon("You are back to view mode.", "👀");
    setEditMode(false);
    setEditedUser(user);
  };

  const handleEditUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedUser({ ...editedUser, [event.target.name]: event.target.value });
  };

  const handleEditUserGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedUser({ ...editedUser, [event.target.name]: event.target.value });
  };

  const handleUpdateUserFirstName = async () => {
    const user: UserDTO | undefined = await updateUserFirstName(
      params.userName,
      editedUser.firstName
    );

    if (user !== undefined) {
      success("Successfully changed the user's first name.");

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      error("Failed to change the user's first name at this time.");
    }
  };

  const handleUpdateUserMiddleName = async () => {
    const user: UserDTO | undefined = await updateUserMiddleName(
      params.userName,
      editedUser.middleName
    );

    if (user !== undefined) {
      success("Successfully changed the user's middle name.");

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      error("Failed to change the user's middle name at this time.");
    }
  };

  const handleUpdateUserLastName = async () => {
    const user: UserDTO | undefined = await updateUserLastName(
      params.userName,
      editedUser.lastName
    );

    if (user !== undefined) {
      success("Successfully changed the user's last name.");

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      error("Failed to change the user's last name at this time.");
    }
  };

  const handleUpdateUserPhoneNumber = async () => {
    const user: UserDTO | undefined = await updateUserPhoneNumber(
      params.userName,
      editedUser.phone
    );

    if (user !== undefined) {
      success("Successfully changed the user's phone number.");

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      error("Failed to change the user's phone number at this time.");
    }
  };

  const handleUpdateUserAge = async () => {
    const user: UserDTO | undefined = await updateUserAge(
      params.userName,
      editedUser.age.toString()
    );

    if (user !== undefined) {
      success("Successfully changed the user's age.");

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      error("Failed to change the user's age at this time.");
    }
  };

  const handleUpdateUserGender = async () => {
    const user: UserDTO | undefined = await updateUserGender(
      params.userName,
      editedUser.gender.toString()
    );

    if (user !== undefined) {
      success("Successfully changed the user's gender.");

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      error("Failed to change the user's gender at this time.");
    }
  };

  const normalizeDateTime = (dateTime: string): React.ReactNode => {
    const newDateTime = new Date(dateTime);

    return <p>{newDateTime.toLocaleDateString()}</p>;
  };

  return (
    <div className="md:flex">
      <SideBar
        userName={user.userName}
        archived={user.archived}
        active={user.active}
        admin={user.admin}
        verified={user.verified}
      />
      <div
        id="user-profile"
        className="flex-1 mx-2 my-4 p-4 bg-white rounded-xl"
      >
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
          {editMode ? (
            <span
              onClick={() => {
                handleCloseEditMode();
              }}
              className="mx-2 text-xl cursor-pointer hover:text-gray-400 hover:transition hover:ease-in-out hover:delay-150 hover:hover:-translate-y-2"
            >
              {icons.circleXmark}
            </span>
          ) : (
            <span
              onClick={() => {
                handleOpenEditMode();
              }}
              className="mx-2 text-xl cursor-pointer hover:text-gray-400 hover:transition hover:ease-in-out hover:delay-150 hover:hover:-translate-y-2"
            >
              {icons.squaredPen}
            </span>
          )}
        </div>
        <div className="mx-auto py-3 space-y-3 grid grid-cols-3 gap-x-3">
          <div className="my-4">
            <label htmlFor="firstName">First name</label>
            {editMode &&
            editedUser.firstName !== "" &&
            editedUser.firstName !== user.firstName ? (
              <span
                onClick={() => {
                  handleUpdateUserFirstName();
                }}
                className="mx-4 rounded-full cursor-pointer hover:text-gray-400"
              >
                {icons.circleCheck}
              </span>
            ) : (
              <span></span>
            )}
            {editMode ? (
              <input
                id="firstName"
                name="firstName"
                onChange={(event) => {
                  handleEditUser(event);
                }}
                placeholder={user.firstName}
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            ) : (
              <p
                id="firstName"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              >
                {user.firstName}
              </p>
            )}
          </div>
          <div className="my-4">
            <label htmlFor="middleName">Middle name</label>
            {editMode &&
            editedUser.middleName !== "" &&
            editedUser.middleName !== user.middleName ? (
              <span
                onClick={() => {
                  handleUpdateUserMiddleName();
                }}
                className="mx-4 rounded-full cursor-pointer hover:text-gray-400"
              >
                {icons.circleCheck}
              </span>
            ) : (
              <span></span>
            )}
            {editMode ? (
              <input
                id="middleName"
                name="middleName"
                onChange={(event) => {
                  handleEditUser(event);
                }}
                placeholder={user.middleName}
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            ) : (
              <p
                id="middleName"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              >
                {user.middleName}
              </p>
            )}
          </div>
          <div className="my-4">
            <label htmlFor="lastName">Last name</label>
            {editMode &&
            editedUser.lastName !== "" &&
            editedUser.lastName !== user.lastName ? (
              <span
                onClick={() => {
                  handleUpdateUserLastName();
                }}
                className="mx-4 rounded-full cursor-pointer hover:text-gray-400"
              >
                {icons.circleCheck}
              </span>
            ) : (
              <span></span>
            )}
            {editMode ? (
              <input
                id="lastName"
                name="lastName"
                onChange={(event) => {
                  handleEditUser(event);
                }}
                placeholder={user.lastName}
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            ) : (
              <p
                id="lastName"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              >
                {user.lastName}
              </p>
            )}
          </div>
          <div className="my-4">
            <label htmlFor="email">Email address</label>
            {editMode && editedUser.email !== user.email ? (
              <span className="mx-4 rounded-full cursor-pointer hover:text-gray-400">
                {icons.circleCheck}
              </span>
            ) : (
              <span></span>
            )}
            {editMode ? (
              <input
                disabled
                id="email"
                name="email"
                placeholder={user.email}
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none cursor-not-allowed"
              />
            ) : (
              <p
                id="email"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              >
                {user.email}
              </p>
            )}
          </div>
          <div className="my-4">
            <label htmlFor="address">Residential address</label>
            {editMode && editedUser.address !== user.address ? (
              <span className="mx-4 rounded-full cursor-pointer hover:text-gray-400">
                {icons.circleCheck}
              </span>
            ) : (
              <span></span>
            )}
            {editMode ? (
              <input
                disabled
                id="address"
                name="address"
                placeholder={renderUserAddress(user.address)}
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none cursor-not-allowed"
              />
            ) : (
              <p
                id="address"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              >
                {renderUserAddress(user.address)}
              </p>
            )}
          </div>
          <div className="my-4">
            <label htmlFor="phone">Phone number</label>
            {editMode &&
            editedUser.phone !== "" &&
            editedUser.phone !== user.phone ? (
              <span
                onClick={() => {
                  handleUpdateUserPhoneNumber();
                }}
                className="mx-4 rounded-full cursor-pointer hover:text-gray-400"
              >
                {icons.circleCheck}
              </span>
            ) : (
              <span></span>
            )}
            {editMode ? (
              <input
                id="phone"
                name="phone"
                type="number"
                onChange={(event) => {
                  handleEditUser(event);
                }}
                placeholder={user.phone}
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            ) : (
              <p
                id="phone"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              >
                {user.phone}
              </p>
            )}
          </div>
          <div className="my-4">
            <label htmlFor="age">Age</label>
            {editMode && editedUser.age !== 0 && editedUser.age !== user.age ? (
              <span
                onClick={() => {
                  handleUpdateUserAge();
                }}
                className="mx-4 rounded-full cursor-pointer hover:text-gray-400"
              >
                {icons.circleCheck}
              </span>
            ) : (
              <span></span>
            )}
            {editMode ? (
              <input
                id="age"
                name="age"
                onChange={(event) => {
                  handleEditUser(event);
                }}
                placeholder={user.age.toString()}
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            ) : (
              <p
                id="age"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              >
                {user.age}
              </p>
            )}
          </div>
          <div className="my-4">
            <label htmlFor="position">Position</label>
            {editMode && editedUser.position !== user.position ? (
              <span className="mx-4 rounded-full cursor-pointer hover:text-gray-400">
                {icons.circleCheck}
              </span>
            ) : (
              <span></span>
            )}
            {editMode ? (
              <input
                disabled
                id="position"
                name="position"
                placeholder={renderUserPosition(user.position)}
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none cursor-not-allowed"
              />
            ) : (
              <p
                id="position"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              >
                {renderUserPosition(user.position)}
              </p>
            )}
          </div>
        </div>
        <div className="mx-auto py-3 space-y-3 grid grid-cols-3 gap-x-3">
          <fieldset className="my-4">
            <div className="flex">
              <legend>Gender</legend>
              {editMode &&
              parseInt(editedUser.gender.toString()) !==
                parseInt(user.gender.toString()) ? (
                <span
                  onClick={() => {
                    handleUpdateUserGender();
                  }}
                  className="mx-4 rounded-full cursor-pointer hover:text-gray-400"
                >
                  {icons.circleCheck}
                </span>
              ) : (
                <span></span>
              )}
            </div>
            <div className="my-2">
              {editMode ? (
                <input
                  value={0}
                  id="male"
                  type="radio"
                  name="gender"
                  className="accent-gray-400"
                  onChange={(event) => handleEditUserGender(event)}
                />
              ) : (
                <input
                  value={0}
                  id="male"
                  type="radio"
                  name="gender"
                  className="accent-gray-400"
                  checked={user.gender === 0}
                  onChange={(event) => handleEditUserGender(event)}
                />
              )}
              <label htmlFor="male" className="mx-4">
                Male
              </label>
            </div>
            <div className="my-2">
              {editMode ? (
                <input
                  value={1}
                  id="female"
                  type="radio"
                  name="gender"
                  className="accent-gray-400"
                  onChange={(event) => handleEditUserGender(event)}
                />
              ) : (
                <input
                  value={1}
                  id="female"
                  type="radio"
                  name="gender"
                  className="accent-gray-400"
                  checked={user.gender === 1}
                  onChange={(event) => handleEditUserGender(event)}
                />
              )}
              <label htmlFor="female" className="mx-4">
                Female
              </label>
            </div>
            <div className="my-2">
              {editMode ? (
                <input
                  value={2}
                  id="other"
                  type="radio"
                  name="gender"
                  className="accent-gray-400"
                  onChange={(event) => handleEditUserGender(event)}
                />
              ) : (
                <input
                  value={2}
                  id="other"
                  type="radio"
                  name="gender"
                  className="accent-gray-400"
                  checked={user.gender === 2}
                  onChange={(event) => handleEditUserGender(event)}
                />
              )}
              <label htmlFor="other" className="mx-4">
                Other
              </label>
            </div>
          </fieldset>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex mt-2">
            <span className="mx-4">Created at:</span>
            <span className="">{normalizeDateTime(user.createdAt)}</span>
          </div>
          <div className="flex mt-2">
            <span className="mx-4">Updated at:</span>
            <span>{normalizeDateTime(user.updatedAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
