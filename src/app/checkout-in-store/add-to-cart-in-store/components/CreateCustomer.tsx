import { useState } from "react";

import icons from "@/assets/Icons";

import Modal from "@/components/Modal";
import Button from "@/components/Button";

import { createCustomer } from "@/services";
import { allCustomerLevels } from "@/utils";
import { appRoutes } from "@/config/pathConfig";

const CreateCustomer = ({
  createCustomerModal,
  setCreateCustomerModal,
}: {
  createCustomerModal: boolean;
  setCreateCustomerModal: (value: boolean) => void;
}) => {
  const [accountLevel, setAccountLevel] = useState("-1");

  const [customer, setCustomer] = useState<{
    email: string;
    phone: string;
    age: number;
    address: string;
    gender: number;
    customerName: string;
    accountLevel: number;
  }>({
    email: "",
    phone: "",
    age: 0,
    address: "",
    gender: 0,
    customerName: "",
    accountLevel: 0,
  });

  const handleInputCustomer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomer({ ...customer, [event.target.name]: event.target.value });
  };

  const handleGenderRadioCustomer = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomer({ ...customer, [event.target.name]: event.target.value });
  };

  const handleAccountLevelSelectCustomer = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAccountLevel(event.target.value);
    setCustomer({ ...customer, [event.target.name]: event.target.value });
  };

  const handleCreateCustomer = async () => {
    await createCustomer(customer);
    setCreateCustomerModal(!createCustomerModal);

    window.location.href = appRoutes.customers.all;
  };

  return createCustomerModal ? (
    <Modal modal={createCustomerModal} setCloseModal={setCreateCustomerModal}>
      <div className="my-2 flex justify-between">
        <h1 className="text-2xl">New customer details</h1>
        <span
          className="px-2 py-1 rounded-full cursor-pointer hover:bg-gray-200"
          onClick={() => setCreateCustomerModal(!createCustomerModal)}
        >
          {icons.cross}
        </span>
      </div>
      <hr />
      <div className="mx-auto py-3 space-y-3 grid grid-cols-3 gap-x-3">
        <div className="my-4">
          <label htmlFor="customerName">Full name</label>
          <div className="flex justify-start items-center">
            <input
              type="text"
              id="customerName"
              name="customerName"
              placeholder="Customer's full name"
              onChange={(event) => handleInputCustomer(event)}
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            />
          </div>
        </div>
        <div className="my-4">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Customer's email address"
            onChange={(event) => handleInputCustomer(event)}
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          />
        </div>
        <div className="my-4">
          <label htmlFor="phone">Phone number</label>
          <input
            id="phone"
            name="phone"
            type="number"
            placeholder="Customer's phone number"
            onChange={(event) => handleInputCustomer(event)}
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          />
        </div>
        <div className="my-4">
          <label htmlFor="age">Age</label>
          <input
            id="age"
            name="age"
            type="number"
            placeholder="Customer's age"
            onChange={(event) => handleInputCustomer(event)}
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          />
        </div>
        <div className="my-4">
          <label htmlFor="address">Residential address</label>
          <input
            id="address"
            type="text"
            name="address"
            placeholder="Customer's residential address"
            onChange={(event) => handleInputCustomer(event)}
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          />
        </div>
        <div className="mr-4 my-4 flex flex-col">
          <label htmlFor="accountLevel">Customer account level</label>
          <select
            id="accountLevel"
            name="accountLevel"
            value={accountLevel}
            onChange={(event) => handleAccountLevelSelectCustomer(event)}
            className="w-full p-4 my-2 border rounded-xl shadow-xl cursor-pointer outline-none appearance-none"
          >
            <option value="-1" hidden>
              Select a kind of level
            </option>

            {allCustomerLevels.map((customerLevel, index) => {
              return (
                <option key={index} value={index}>
                  {customerLevel}
                </option>
              );
            })}
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
            onChange={(event) => handleGenderRadioCustomer(event)}
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
            onChange={(event) => handleGenderRadioCustomer(event)}
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
            onChange={(event) => handleGenderRadioCustomer(event)}
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
          onClick={() => handleCreateCustomer()}
        >
          Create customer
        </Button>
      </div>
    </Modal>
  ) : (
    <div></div>
  );
};

export default CreateCustomer;
