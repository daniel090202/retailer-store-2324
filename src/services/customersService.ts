import * as request from "@/utils/http";

import { Customer } from "@/models";

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

export { getCustomers };
