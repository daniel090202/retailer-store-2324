import { OrderDetail } from "../dto";

declare global {
  interface IOrder {
    id: number;
    customerPhone: string;
    customerPayment: number;
    customerPaymentMethod: number;
    counterID: string;
    cashierUserName: string;
    couponsAmount: number;
    addedCoupons: Array<string>;
    totalExpense: number;
    totalAmount: number;
    totalDiscount: number;
    exchange: number;
    notes: string;
    paymentStatus: number;
    shipmentBarcode: string;
    coupons: Array<string>;
    orderDetails: Array<OrderDetail>;
    createdAt: string;
    updatedAt: string;
  }
}

export type { IOrder };
