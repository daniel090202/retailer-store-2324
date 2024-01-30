"use client";

import Image from "next/image";

import images from "@/assets/Images";

import { useAppSelector } from "@/lib/redux/store";

import { Customer } from "@/models";

const SideBar = () => {
  const customer: Customer | undefined = useAppSelector((state) => {
    return state.cartReducer.cart.customer;
  });

  return (
    <aside className="md:w-1/4 md:mx-2 md:my-4 text-xl font-medium rounded-xl">
      {customer !== undefined ? (
        <div className="p-4 shadow-xl text-base bg-white rounded-xl flex flex-col">
          <div className="mb-2 flex justify-between items-center">
            <span className="text-lg font-bold uppercase">
              Customer information
            </span>
          </div>
          <div className="flex">
            <div className="mr-4 border rounded-full p-3 cursor-pointer">
              <Image
                src={images.maleDefaultProfilePicture}
                width={32}
                height={32}
                alt="User's profile picture."
              />
            </div>
            <div className="mb-2 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">
                  {customer.customerName}
                </span>
                <span>{customer.phone}</span>
              </div>
              <span>{customer.address}</span>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </aside>
  );
};

export default SideBar;
