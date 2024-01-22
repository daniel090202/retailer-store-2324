"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import icons from "@/assets/Icons";
import images from "@/assets/Images";

import { getCustomersWithQuery } from "@/services";
import { renderCustomerGender } from "@/utils";
import { Customer as CustomerDTO } from "@/models";

import SideBar from "./components/SideBar";

const Customer = ({ params }: { params: { phone: string } }) => {
  const [customer, setCustomer] = useState<CustomerDTO>({
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
            data?: Array<CustomerDTO>;
          }
        | undefined = await getCustomersWithQuery(params.phone);

      if (customersData !== undefined && customersData.data !== undefined) {
        setCustomer(customersData.data[0]);
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
      <SideBar
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
        </div>
        <div className="mx-auto py-3 space-y-4 grid grid-cols-2 gap-x-2">
          <div className="my-4">
            <label htmlFor="email">Email address</label>
            <p
              id="email"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {customer.email}
            </p>
          </div>
          <div className="my-4">
            <label htmlFor="address">Residential address</label>
            <p
              id="address"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {customer.address}
            </p>
          </div>
          <div className="my-4">
            <label htmlFor="phone">Phone number</label>
            <p
              id="phone"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {customer.phone}
            </p>
          </div>
          <div className="my-4">
            <label htmlFor="age">Age</label>
            <p
              id="age"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {customer.age}
            </p>
          </div>
          <div className="my-4">
            <label htmlFor="gender">Gender</label>
            <p
              id="gender"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {renderCustomerGender(customer.gender)}
            </p>
          </div>
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

export default Customer;
