import { useState } from "react";

import icons from "@/assets/Icons";
import { createUser } from "@/redux-api";
import { appRoutes } from "@/config/pathConfig";

import Modal from "@/app/components/Modal";
import Button from "@/app/components/Button";

const CreateUser = ({
  createUserModal,
  setCreateUserModal,
}: {
  createUserModal: boolean;
  setCreateUserModal: (value: boolean) => void;
}) => {
  const [address, setAddress] = useState("-1");
  const [position, setPosition] = useState("-1");

  const [user, setUser] = useState<{
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    age: string;
    address: string;
    gender: string;
    position: string;
    phone: string;
  }>({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    age: "",
    address: "",
    gender: "",
    position: "",
    phone: "",
  });

  const handleInputUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleAddressSelectUser = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAddress(event.target.value);
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handlePositionSelectUser = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPosition(event.target.value);
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleGenderRadioUser = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleCreateUser = async () => {
    await createUser(user);

    setCreateUserModal(!createUserModal);

    window.location.href = appRoutes.users.all;
  };

  return createUserModal ? (
    <Modal modal={createUserModal} setCloseModal={setCreateUserModal}>
      <div className="my-2 flex justify-between">
        <h1 className="text-2xl">New user profile</h1>
        <span
          className="px-2 py-1 rounded-full cursor-pointer hover:bg-gray-200"
          onClick={() => setCreateUserModal(false)}
        >
          {icons.cross}
        </span>
      </div>
      <hr />
      <div className="mx-auto py-3 space-y-3 grid grid-cols-4 gap-x-4">
        <div className="my-4">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First name"
            onChange={(event) => handleInputUser(event)}
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          />
        </div>
        <div className="my-4">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last name"
            onChange={(event) => handleInputUser(event)}
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          />
        </div>
        <div className="my-4">
          <label htmlFor="middleName">Middle name</label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            placeholder="Middle name"
            onChange={(event) => handleInputUser(event)}
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          />
        </div>
        <div className="my-4">
          <label htmlFor="age">Age</label>
          <input
            id="age"
            name="age"
            type="number"
            placeholder="User's age"
            onChange={(event) => handleInputUser(event)}
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          />
        </div>
        <div className="my-4">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="number"
            placeholder="User's phone"
            onChange={(event) => handleInputUser(event)}
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          />
        </div>
        <div className="my-4">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="User's email"
            onChange={(event) => handleInputUser(event)}
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          />
        </div>
      </div>
      <div className="mx-auto py-3 space-y-3 grid grid-cols-4 gap-x-4">
        <div className="my-4">
          <label htmlFor="address">Residential address</label>
          <select
            id="address"
            name="address"
            value={address}
            onChange={(event) => handleAddressSelectUser(event)}
            className="w-full p-4 my-2 border rounded-xl shadow-xl cursor-pointer outline-none appearance-none"
          >
            <option value="-1" hidden>
              Select an address
            </option>
            <option value="0">Ho Chi Minh</option>
            <option value="1">Binh Duong</option>
            <option value="2">Dong Nai</option>
          </select>
        </div>
        <div className="my-4 ">
          <label htmlFor="position">Position</label>
          <select
            id="position"
            name="position"
            value={position}
            onChange={(event) => handlePositionSelectUser(event)}
            className="w-full p-4 my-2 border rounded-xl shadow-xl cursor-pointer outline-none appearance-none"
          >
            <option value="-1" hidden>
              Select a position
            </option>
            <option value="0">Administrator</option>
            <option value="1">Accountant</option>
            <option value="2">Sales assistant</option>
          </select>
        </div>
      </div>
      <fieldset className="my-4">
        <legend>Select a gender</legend>
        <div className="my-2">
          <input
            type="radio"
            id="male"
            name="gender"
            value="0"
            className="accent-gray-400"
            defaultChecked
            onChange={(event) => handleGenderRadioUser(event)}
          />
          <label htmlFor="male" className="mx-4">
            Male
          </label>
        </div>
        <div className="my-2">
          <input
            type="radio"
            id="female"
            name="gender"
            value="1"
            className="accent-gray-400"
            onChange={(event) => handleGenderRadioUser(event)}
          />
          <label htmlFor="female" className="mx-4">
            Female
          </label>
        </div>
        <div className="my-2">
          <input
            type="radio"
            id="other"
            name="gender"
            value="2"
            className="accent-gray-400"
            onChange={(event) => handleGenderRadioUser(event)}
          />
          <label htmlFor="other" className="mx-4">
            Other
          </label>
        </div>
      </fieldset>
      <hr />
      <div className="flex justify-center">
        <Button
          leftIcon={icons.plus}
          rightIcon=""
          className="mt-4 p-4"
          onClick={() => handleCreateUser()}
        >
          Create user
        </Button>
      </div>
    </Modal>
  ) : (
    <div></div>
  );
};

export default CreateUser;
