"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import icons from "@/assets/Icons";
import images from "@/assets/Images";
import {
  getCustomerWithPhoneNumber,
  updateCustomerName,
  updateCustomerEmailAddress,
  updateCustomerResidentialAddress,
  updateCustomerPhoneNumber,
  updateCustomerAge,
  updateCustomerGender,
} from "@/services";
import { appRoutes } from "@/config";
import { error, success, toastWithIcon } from "@/lib/hot-toast";

import { Customer } from "@/models";

import SideBar from "../components/SideBar";

const CustomerProfile = ({ params }: { params: { phone: string } }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedCustomer, setEditedCustomer] = useState<Customer>({
    email: "",
    phone: "",
    age: 0,
    address: "",
    gender: 0,
    customerName: "",
    accountLevel: 0,
    active: false,
    block: false,
    verified: false,
    createdAt: "",
    updatedAt: "",
  });
  const [customer, setCustomer] = useState<Customer>({
    email: "",
    phone: "",
    age: 0,
    address: "",
    gender: 0,
    customerName: "",
    accountLevel: 0,
    active: false,
    block: false,
    verified: false,
    createdAt: "",
    updatedAt: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const customersData:
        | {
            statusCode: number;
            message: string;
            data?: Customer;
          }
        | undefined = await getCustomerWithPhoneNumber(params.phone);

      if (customersData?.data !== undefined) {
        setCustomer(customersData.data);
      }
    };

    fetchData();
  }, [params.phone]);

  const handleOpenEditMode = () => {
    toastWithIcon("You enter in edit mode.", "✍️");
    setEditMode(true);
  };

  const handleCloseEditMode = () => {
    toastWithIcon("You are back to view mode.", "👀");
    setEditMode(false);
    setEditedCustomer(customer);
  };

  const handleEditTextCustomerProperties = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditedCustomer({
      ...editedCustomer,
      [event.target.name]: event.target.value,
    });
  };

  const handleEditNumericCustomerProperties = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    if (value !== "" && value.length > 0) {
      setEditedCustomer({
        ...editedCustomer,
        [event.target.name]: parseInt(event.target.value),
      });
    } else {
      setEditedCustomer({
        ...editedCustomer,
        [event.target.name]: 0,
      });
    }
  };

  const handleEditCustomerGender = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditedCustomer({
      ...editedCustomer,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdateCustomerName = () => {
    return;
  };

  const handleUpdateCustomerEmailAddress = async () => {
    const customer: Customer | undefined = await updateCustomerEmailAddress(
      params.phone,
      editedCustomer.email
    );

    if (customer !== undefined) {
      success(
        `Successfully changed the customer's email address as ${customer.email}.`
      );

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      error("Failed to change the customer's email address at this time.");
    }
  };

  const handleUpdateCustomerResidentialAddress = async () => {
    const customer: Customer | undefined =
      await updateCustomerResidentialAddress(
        params.phone,
        editedCustomer.address
      );

    if (customer !== undefined) {
      success(
        `Successfully changed the customer's residential address as ${customer.address}.`
      );

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      error(
        "Failed to change the customer's residential address at this time."
      );
    }
  };

  const handleUpdateCustomerPhoneNumber = async () => {
    const customer: Customer | undefined = await updateCustomerPhoneNumber(
      params.phone,
      editedCustomer.phone
    );

    if (customer !== undefined) {
      success(
        `Successfully changed the customer's phone number as ${customer.phone}.`
      );

      setTimeout(() => {
        window.location.href = `${appRoutes.getCustomerPath(customer.phone)}`;
      }, 4000);
    } else {
      error("Failed to change the customer's phone numbers at this time.");
    }
  };

  const handleUpdateCustomerAge = async () => {
    const customer: Customer | undefined = await updateCustomerAge(
      params.phone,
      editedCustomer.age.toString()
    );

    if (customer !== undefined) {
      success(`Successfully changed the customer's age as ${customer.age}.`);

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      error("Failed to change the customer's age at this time.");
    }
  };

  const handleUpdateCustomerGender = async () => {
    const user: Customer | undefined = await updateCustomerGender(
      params.phone,
      editedCustomer.gender.toString()
    );

    if (user !== undefined) {
      success(
        `Successfully changed the customer's gender as ${customer.gender}.`
      );

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      error("Failed to change the customer's gender at this time.");
    }
  };

  const normalizeDateTime = (dateTime: string): React.ReactNode => {
    const newDateTime = new Date(dateTime);

    return <p>{newDateTime.toLocaleDateString()}</p>;
  };

  return (
    <div className="md:flex">
      <SideBar
        customerPhone={customer.phone}
        accountLevel={customer.accountLevel}
        active={customer.active}
        block={customer.block}
        verified={customer.verified}
      />
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
            <h1 className="mx-4 text-2xl font-bold">{customer.customerName}</h1>
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
        <div className="mx-auto py-3 space-y-4 grid grid-cols-2 gap-x-2">
          <div className="my-4">
            <label htmlFor="email">Email address</label>
            {editMode &&
            editedCustomer.email !== "" &&
            editedCustomer.email !== customer.email ? (
              <span
                onClick={() => {
                  handleUpdateCustomerEmailAddress();
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
                id="email"
                name="email"
                onChange={(event) => {
                  handleEditTextCustomerProperties(event);
                }}
                placeholder={customer.email}
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            ) : (
              <p
                id="email"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              >
                {customer.email}
              </p>
            )}
          </div>
          <div className="my-4">
            <label htmlFor="address">Residential address</label>
            {editMode &&
            editedCustomer.address !== "" &&
            editedCustomer.address !== customer.address ? (
              <span
                onClick={() => {
                  handleUpdateCustomerResidentialAddress();
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
                id="address"
                name="address"
                onChange={(event) => {
                  handleEditTextCustomerProperties(event);
                }}
                placeholder={customer.address}
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            ) : (
              <p
                id="address"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              >
                {customer.address}
              </p>
            )}
          </div>
          <div className="my-4">
            <label htmlFor="phone">Phone number</label>
            {editMode &&
            editedCustomer.phone !== "" &&
            editedCustomer.phone !== customer.phone ? (
              <span
                onClick={() => {
                  handleUpdateCustomerPhoneNumber();
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
                onChange={(event) => {
                  handleEditTextCustomerProperties(event);
                }}
                placeholder={customer.phone}
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            ) : (
              <p
                id="phone"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              >
                {customer.phone}
              </p>
            )}
          </div>
          <div className="my-4">
            <label htmlFor="age">Age</label>
            {editMode &&
            editedCustomer.age !== 0 &&
            editedCustomer.age !== customer.age ? (
              <span
                onClick={() => {
                  handleUpdateCustomerAge();
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
                  handleEditNumericCustomerProperties(event);
                }}
                placeholder={customer.age.toString()}
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            ) : (
              <p
                id="age"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              >
                {customer.age}
              </p>
            )}
          </div>
          <fieldset className="my-4">
            <div className="flex">
              <legend>Gender</legend>
              {editMode &&
              parseInt(editedCustomer.gender.toString()) !==
                parseInt(customer.gender.toString()) ? (
                <span
                  onClick={() => {
                    handleUpdateCustomerGender();
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
                  onChange={(event) => handleEditCustomerGender(event)}
                />
              ) : (
                <input
                  value={0}
                  id="male"
                  type="radio"
                  name="gender"
                  className="accent-gray-400"
                  checked={customer.gender === 0}
                  onChange={(event) => handleEditCustomerGender(event)}
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
                  onChange={(event) => handleEditCustomerGender(event)}
                />
              ) : (
                <input
                  value={1}
                  id="female"
                  type="radio"
                  name="gender"
                  className="accent-gray-400"
                  checked={customer.gender === 1}
                  onChange={(event) => handleEditCustomerGender(event)}
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
                  onChange={(event) => handleEditCustomerGender(event)}
                />
              ) : (
                <input
                  value={2}
                  id="other"
                  type="radio"
                  name="gender"
                  className="accent-gray-400"
                  checked={customer.gender === 2}
                  onChange={(event) => handleEditCustomerGender(event)}
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
            <span className="">{normalizeDateTime(customer.createdAt)}</span>
          </div>
          <div className="flex mt-2">
            <span className="mx-4">Updated at:</span>
            <span>{normalizeDateTime(customer.updatedAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
