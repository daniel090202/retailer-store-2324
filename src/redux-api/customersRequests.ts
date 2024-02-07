import {
  getAllArchivedCustomersStart,
  getAllArchivedCustomersSuccess,
  getAllArchivedCustomersFailed,
} from "@/lib/redux/features";

import { getArchivedCustomers } from "@/services";

import { Customer } from "@/models";
import { AppDispatch } from "@/lib/redux/store";

const getAllArchivedCustomers = async (
  pageNumber: string,
  dispatch: AppDispatch
) => {
  dispatch(getAllArchivedCustomersStart());

  try {
    const archivedCustomersData = (await getArchivedCustomers(pageNumber)) as {
      statusCode: number;
      message: string;
      data?: {
        totalPage: number;
        totalArchivedCustomer: number;
        allArchivedCustomers: Array<Customer>;
      };
    };

    dispatch(getAllArchivedCustomersSuccess(archivedCustomersData));
  } catch (error) {
    console.log(error);
    dispatch(getAllArchivedCustomersFailed());
  }
};

export { getAllArchivedCustomers };
