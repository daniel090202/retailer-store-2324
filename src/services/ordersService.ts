import * as request from "@/utils/http";

import { Order } from "@/models";

const createOrder = async (order: {
  customerPhone: string;
  customerPayment: number;
  customerPaymentMethod: number;
  counterID: string;
  cashierUserName: string | undefined;
  couponsAmount: number;
  totalExpense: number;
  totalAmount: number;
  totalDiscount: number;
  exchange: number;
  notes: string;
  paymentStatus: number;
  shipmentBarcode: string;
  coupons: Array<string>;
  orderDetails: Array<{
    productSKU: string;
    purchasedQuantity: number;
    totalExpense: number;
    notes: string;
  }>;
}): Promise<Order | undefined> => {
  try {
    const url = "/orders/create-order";

    const response = await request.post(url, order);

    const orderData: {
      statusCode: number;
      message: string;
      data?: Order;
    } = response.data;

    if (orderData.statusCode === 200) {
      return orderData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export { createOrder };
