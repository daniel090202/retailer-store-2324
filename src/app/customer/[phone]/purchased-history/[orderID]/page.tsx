"use client";

import { useState, useEffect } from "react";

import icons from "@/assets/Icons";
import { getOrdersWithID } from "@/services";

import { Order } from "@/models";

import SideBar from "./components/SideBar";
import PurchasedHistoryDetailsTable from "../components/PurchasedHistoryDetailsTable";

const PurchasedHistory = ({
  params,
}: {
  params: { phone: string; orderID: number };
}) => {
  const [order, setOrder] = useState<Order>();

  const orderDetails = order?.orderDetails;

  const totalAmount = orderDetails?.reduce(
    (totalAmount, currentOrderDetails) =>
      totalAmount + currentOrderDetails.purchasedQuantity,
    0
  );

  useEffect(() => {
    const fetchData = async () => {
      const ordersData:
        | {
            statusCode: number;
            message: string;
            data?: Array<Order>;
          }
        | undefined = await getOrdersWithID(params.orderID.toString());

      if (ordersData?.data !== undefined) {
        setOrder(ordersData.data[0]);
      }
    };

    fetchData();
  }, [params.orderID, params.phone]);

  const renderOrderNotes = () => {
    if (order?.notes && order?.notes.length > 0) {
      return order.notes;
    }

    return "No comments";
  };

  const normalizeDateTime = (dateTime?: string): React.ReactNode => {
    if (!dateTime) {
      return;
    }

    const newDateTime = new Date(dateTime);

    return <p>{newDateTime.toLocaleDateString()}</p>;
  };

  return (
    <div className="md:flex">
      <SideBar
        customerPayment={order?.customerPayment}
        exchange={order?.exchange}
        paymentStatus={order?.paymentStatus}
        shipmentBarcode={order?.shipmentBarcode}
        totalAmount={order?.totalAmount}
        totalDiscount={order?.totalDiscount}
        totalExpense={order?.totalExpense}
      />
      <div className="flex-1 flex flex-col mx-2 my-4 p-4 h-[680px] bg-white rounded-xl">
        <div className="flex justify-start items-center">
          <span
            onClick={() => window.history.back()}
            className="mr-4 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-200"
          >
            {icons.arrowLeft}
          </span>
          <h1 className="my-2 text-2xl font-bold flex justify-center">
            <span>Order:</span>
            <span className="mx-2">{`#0000000000${order?.id}`}</span>
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-x-4">
          <div className="my-2">
            <span className="text-lg font-bold">Taken at:</span>
            <span className="mx-4">{order?.counterID}</span>
          </div>
          <div className="my-2">
            <span className="text-lg font-bold">Total added coupons:</span>
            <span className="mx-4 text-lg">
              {order?.couponsAmount.toLocaleString()}
            </span>
            <span>coupon(s)</span>
          </div>
          <div className="my-2">
            <span className="text-lg font-bold">Taken by:</span>
            <span className="mx-4">{order?.cashierUserName}</span>
          </div>
          <div className="my-2">
            <span className="text-lg font-bold">
              Total items of this order:
            </span>
            <span className="mx-4 text-lg">
              {totalAmount?.toLocaleString()}
            </span>
            <span>item(s)</span>
          </div>
          <div className="my-2">
            <span className="text-lg font-bold">Notes:</span>
            <span className="mx-4">{renderOrderNotes()}</span>
          </div>
        </div>
        <div className="flex-1">
          <PurchasedHistoryDetailsTable orderDetails={order?.orderDetails} />
        </div>
        <div className="flex flex-col items-end">
          <div className="flex mt-2">
            <span className="mx-4">Created at:</span>
            <span className="">{normalizeDateTime(order?.createdAt)}</span>
          </div>
          <div className="flex mt-2">
            <span className="mx-4">Updated at:</span>
            <span>{normalizeDateTime(order?.updatedAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasedHistory;
