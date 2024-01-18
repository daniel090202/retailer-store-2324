import * as request from "@/utils/http";

import { Customer } from "@/models";

const getCustomer = async (phone: string) => {
  try {
    const url = "/customers";
    const params = new URLSearchParams([["phone", phone]]);

    const response = await request.get(url, { params });

    const customerData: {
      statusCode: number;
      message: string;
      data: Customer;
    } = response;

    if (customerData.statusCode === 200) {
      return customerData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const getCustomers = async () => {
  try {
    const url = "/customers/get-all-customers";

    const response = await request.get(url);

    const customersData: {
      statusCode: number;
      message: string;
      data: Array<Customer>;
      accessToken: string;
    } = response;

    if (customersData.statusCode === 200) {
      return customersData;
    }
  } catch (error) {
    console.log(error);
  }
};

export { getCustomer, getCustomers };
