import {
  getAllCustomersStart,
  getAllCustomersSuccess,
  getAllCustomersFailed,
  getAllArchivedCustomersStart,
  getAllArchivedCustomersSuccess,
  getAllArchivedCustomersFailed,
} from "@/lib/redux/features";

import { getCustomers, getArchivedCustomers } from "@/services";

import { Customer } from "@/models";
import { AppDispatch } from "@/lib/redux/store";

const getAllCustomers = async (dispatch: AppDispatch) => {
  dispatch(getAllCustomersStart());

  try {
    const customersData = (await getCustomers()) as {
      statusCode: number;
      message: string;
      data: Array<Customer>;
    };

    dispatch(getAllCustomersSuccess(customersData));
  } catch (error) {
    console.log(error);
    dispatch(getAllCustomersFailed());
  }
};

const getAllArchivedCustomers = async (dispatch: AppDispatch) => {
  dispatch(getAllArchivedCustomersStart());

  try {
    const archivedCustomersData = (await getArchivedCustomers()) as {
      statusCode: number;
      message: string;
      data: Array<Customer>;
    };

    dispatch(getAllArchivedCustomersSuccess(archivedCustomersData));
  } catch (error) {
    console.log(error);
    dispatch(getAllArchivedCustomersFailed());
  }
};

export { getAllCustomers, getAllArchivedCustomers };
