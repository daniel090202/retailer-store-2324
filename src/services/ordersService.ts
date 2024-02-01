import * as request from "@/utils/http";

import { Order } from "@/models";

const getOrdersWithID = async (orderID: string = "") => {
  try {
    const url = "/orders/get-orders-with-ID";
    const params = new URLSearchParams([["ID", orderID]]);

    const response = await request.get(url, { params });

    const ordersData: {
      statusCode: number;
      message: string;
      data?: Array<Order>;
    } = response;

    if (ordersData.statusCode === 200) {
      return ordersData;
    }
  } catch (error) {
    console.log(error);
  }
};

const getOrdersWithPhone = async (customerPhone: string = "") => {
  try {
    const url = "/orders/get-orders-with-phone";
    const params = new URLSearchParams([["customerPhone", customerPhone]]);

    const response = await request.get(url, { params });

    const ordersData: {
      statusCode: number;
      message: string;
      data?: Array<Order>;
    } = response;

    if (ordersData.statusCode === 200) {
      return ordersData;
    }
  } catch (error) {
    console.log(error);
  }
};

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

export { getOrdersWithID, getOrdersWithPhone, createOrder };
