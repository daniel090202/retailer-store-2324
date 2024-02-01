"use client";

import { useState, useEffect } from "react";

import icons from "@/assets/Icons";
import { getOrdersWithPhone, getCustomersWithQuery } from "@/services";

import { Order, Customer } from "@/models";

import SideBar from "./components/SideBar";
import PurchasedHistoryTable from "../components/PurchasedHistoryTable";

const PurchasedHistory = ({ params }: { params: { phone: string } }) => {
  const [orders, setOrders] = useState<Array<Order>>();
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
            data?: Array<Customer>;
          }
        | undefined = await getCustomersWithQuery(params.phone);

      if (customersData?.data !== undefined) {
        setCustomer(customersData.data[0]);
      }

      const ordersData:
        | {
            statusCode: number;
            message: string;
            data?: Array<Order>;
          }
        | undefined = await getOrdersWithPhone(params.phone);

      if (ordersData?.data !== undefined) {
        setOrders(ordersData.data);
      }
    };

    fetchData();
  }, [params.phone]);

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
      <div className="flex-1 mx-2 my-4 p-4 h-[680px] bg-white rounded-xl">
        <div className="flex justify-start items-center">
          <span
            onClick={() => window.history.back()}
            className="mr-4 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-200"
          >
            {icons.arrowLeft}
          </span>
          <h1 className="my-2 text-2xl font-bold flex justify-center">
            Purchase history
          </h1>
        </div>
        <div className="flex flex-col justify-between">
          <div className="my-2">
            <span className="text-lg font-bold">Full name:</span>
            <span className="mx-4">{customer.customerName}</span>
          </div>
          <div className="my-2">
            <span className="text-lg font-bold">Phone number:</span>
            <span className="mx-4">{customer.phone}</span>
          </div>
          <div className="my-2">
            <span className="text-lg font-bold">
              Total orders of this customer in the store:
            </span>
            <span className="mx-4 text-lg">
              {orders?.length.toLocaleString()}
            </span>
            <span>order(s)</span>
          </div>
        </div>
        <PurchasedHistoryTable orders={orders} customerPhone={customer.phone} />
      </div>
    </div>
  );
};

export default PurchasedHistory;
