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

const blockCustomer = async (phone: string): Promise<Customer | undefined> => {
  try {
    const url = "/customers/block-customer";

    const response = await request.patch(url, { phone });

    const blockedCustomerData: {
      statusCode: number;
      message: string;
      data?: Customer;
    } = response.data;

    if (blockedCustomerData.statusCode === 200) {
      return blockedCustomerData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const unblockCustomer = async (
  phone: string
): Promise<Customer | undefined> => {
  try {
    const url = "/customers/unblock-customer";

    const response = await request.patch(url, { phone });

    const unblockedCustomerData: {
      statusCode: number;
      message: string;
      data?: Customer;
    } = response.data;

    if (unblockedCustomerData.statusCode === 200) {
      return unblockedCustomerData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const updateCustomerName = async (
  phone: string,
  customerName: string
): Promise<Customer | undefined> => {
  try {
    const url = "/customers/update-customer-name";

    const response = await request.patch(url, { phone, customerName });

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

const updateCustomerEmailAddress = async (
  phone: string,
  email: string
): Promise<Customer | undefined> => {
  try {
    const url = "/customers/update-customer-email-address";

    const response = await request.patch(url, { phone, email });

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

const updateCustomerResidentialAddress = async (
  phone: string,
  address: string
): Promise<Customer | undefined> => {
  try {
    const url = "/customers/update-customer-residential-address";

    const response = await request.patch(url, { phone, address });

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

const updateCustomerPhoneNumber = async (
  previousPhone: string,
  updatedPhone: string
): Promise<Customer | undefined> => {
  try {
    const url = "/customers/update-customer-phone-number";

    const response = await request.patch(url, { previousPhone, updatedPhone });

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

const updateCustomerAge = async (
  phone: string,
  age: string
): Promise<Customer | undefined> => {
  try {
    const url = "/customers/update-customer-age";

    const response = await request.patch(url, { phone, age });

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

const updateCustomerGender = async (
  phone: string,
  gender: string
): Promise<Customer | undefined> => {
  try {
    const url = "/customers/update-customer-gender";

    const response = await request.patch(url, { phone, gender });

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
  blockCustomer,
  unblockCustomer,
  updateCustomerName,
  updateCustomerEmailAddress,
  updateCustomerResidentialAddress,
  updateCustomerPhoneNumber,
  updateCustomerAge,
  updateCustomerGender,
};
