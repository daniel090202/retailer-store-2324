import * as request from "@/utils/http";

import { Customer } from "@/models";

const getCustomersWithQuery = async (
  phone: string = "",
  filter: string = ""
) => {
  try {
    const url = "/customers";

    const params = new URLSearchParams([
      ["phone", phone],
      ["filter", filter],
    ]);

    const response = await request.get(url, { params });

    const customerData: {
      statusCode: number;
      message: string;
      data?: Array<Customer>;
    } = response;

    if (customerData.statusCode === 200) {
      return customerData;
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

const getArchivedCustomers = async () => {
  try {
    const url = "/customers/get-all-archived-customers";

    const response = await request.get(url);

    const archivedCustomersData: {
      statusCode: number;
      message: string;
      data: Array<Customer>;
      accessToken: string;
    } = response;

    if (archivedCustomersData.statusCode === 200) {
      return archivedCustomersData;
    }
  } catch (error) {
    console.log(error);
  }
};

const createCustomer = async (user: {
  email: string;
  phone: string;
  age: number;
  address: string;
  gender: number;
  customerName: string;
  accountLevel: number;
}): Promise<Customer | undefined> => {
  try {
    const url = "/customers/create-customer";

    const response = await request.post(url, user);

    const userData: {
      statusCode: number;
      message: string;
      data?: Customer;
    } = response.data;

    if (userData.statusCode === 200) {
      return userData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export {
  getCustomersWithQuery,
  getCustomers,
  getArchivedCustomers,
  createCustomer,
};
