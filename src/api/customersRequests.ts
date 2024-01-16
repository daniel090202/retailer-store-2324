import {
  getAllCustomersStart,
  getAllCustomersSuccess,
  getAllCustomersFailed,
} from "@/lib/redux/features";

import { getCustomers } from "@/services";

import { Customer } from "@/models";
import { AppDispatch } from "@/lib/redux/store";

const getAllCustomers = async (dispatch: AppDispatch) => {
  dispatch(getAllCustomersStart());

  try {
    const customersData = (await getCustomers()) as {
      statusCode: number;
      message: string;
      data: Array<Customer>;
      accessToken: string;
    };

    dispatch(getAllCustomersSuccess(customersData));
  } catch (error) {
    console.log(error);
    dispatch(getAllCustomersFailed());
  }
};

export { getAllCustomers };
