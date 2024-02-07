import * as request from "@/utils/http";

import { Customer } from "@/models";

const getCustomerWithPhoneNumber = async (phone: string = "") => {
  try {
    const url = "/customers/get-customer-with-phone-number";
    const params = new URLSearchParams([["phone", phone]]);

    const response = await request.get(url, { params });

    const customerData: {
      statusCode: number;
      message: string;
      data?: Customer;
    } = response;

    if (customerData.statusCode === 200) {
      return customerData;
    }
  } catch (error) {
    console.log(error);
  }
};

const getCustomersWithPhoneNumber = async (
  pageNumber: string = "1",
  phone: string = "",
  filter: string = "",
  archivedCustomerStatus: string = "unarchived"
) => {
  try {
    const url = "/customers/get-customers-with-phone-number";

    const params = new URLSearchParams([
      ["page", pageNumber],
      ["phone", phone],
      ["filter", filter],
      ["archivedCustomerStatus", archivedCustomerStatus],
    ]);

    const response = await request.get(url, { params });

    const customerData: {
      statusCode: number;
      message: string;
      data?: {
        totalPage: number;
        totalCustomer: number;
        allCustomers: Array<Customer>;
      };
    } = response;

    if (customerData.statusCode === 200) {
      return customerData;
    }
  } catch (error) {
    console.log(error);
  }
};

const getAllCustomersWithPhoneNumber = async (phone: string = "") => {
  try {
    const url = "/customers/get-all-customers-with-phone-number";
    const params = new URLSearchParams([["phone", phone]]);

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

const getArchivedCustomers = async (pageNumber: string) => {
  try {
    const url = "/customers/get-all-archived-customers";
    const params = new URLSearchParams([["page", pageNumber]]);

    const response = await request.get(url, { params });

    const archivedCustomersData: {
      statusCode: number;
      message: string;
      data?: {
        totalPage: number;
        totalArchivedCustomer: number;
        allArchivedCustomers: Array<Customer>;
      };
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
  getCustomerWithPhoneNumber,
  getCustomersWithPhoneNumber,
  getAllCustomersWithPhoneNumber,
  getArchivedCustomers,
  createCustomer,
};
