"use client";

import { renderPaymentStatus, renderPaymentMethod } from "@/utils";

const SideBar = ({
  customerPayment = 0,
  exchange = 0,
  paymentStatus = 0,
  shipmentBarcode = null,
  totalAmount = 0,
  totalDiscount = 0,
  totalExpense = 0,
}: {
  customerPayment?: number;
  exchange?: number;
  paymentStatus?: number;
  shipmentBarcode?: string | null;
  totalAmount?: number;
  totalDiscount?: number;
  totalExpense?: number;
}) => {
  return (
    <aside className="md:w-1/4 md:mx-2 md:my-4 text-xl font-medium rounded-xl">
      <div className="p-4 rounded-xl border-2">
        <h1 className="text-center">Order status</h1>
        <hr className="my-2" />
        <div className="my-2 flex justify-between">
          <span>Shipment barcode:</span>
          <span>{shipmentBarcode !== null ? shipmentBarcode : "In store"}</span>
        </div>
        <div className="my-2 flex justify-between">
          <span>Payment status:</span>
          <span>{renderPaymentStatus(paymentStatus)}</span>
        </div>
        <hr className="my-2" />
        <div className="my-2 flex justify-between">
          <span>Total quantity:</span>
          <span>{totalAmount.toLocaleString()}</span>
        </div>
        <div className="my-2 flex justify-between">
          <span>Customer payment:</span>
          <span>{customerPayment?.toLocaleString()}</span>
        </div>
        <div className="my-2 flex justify-between">
          <span>Total discount:</span>
          <span>{totalDiscount.toLocaleString()}</span>
        </div>
        <div className="my-2 flex justify-between">
          <span>Total expense:</span>
          <span>{totalExpense.toLocaleString()}</span>
        </div>
        <hr className="my-2" />
        <div className="my-2 flex justify-between">
          <span>Exchange:</span>
          <span>{exchange.toLocaleString()}</span>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
