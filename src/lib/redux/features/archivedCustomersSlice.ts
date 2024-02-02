import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Customer } from "@/models/dto";

const initialState = {
  archivedCustomers: {
    error: false,
    allArchivedCustomers: undefined,
    isFetching: false,
  } as ArchivedCustomersState,
} as ArchivedCustomersInitialState;

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    getAllArchivedCustomersStart: (state) => {
      state.archivedCustomers.isFetching = true;
    },
    getAllArchivedCustomersSuccess: (
      state,
      action: PayloadAction<{
        statusCode: number;
        message: string;
        data?: {
          totalPage: number;
          totalArchivedCustomer: number;
          allArchivedCustomers: Array<Customer>;
        };
      }>
    ) => {
      state.archivedCustomers.error = false;
      state.archivedCustomers.isFetching = false;
      state.archivedCustomers.allArchivedCustomers = action.payload;
    },
    getAllArchivedCustomersFailed: (state) => {
      state.archivedCustomers.error = true;
      state.archivedCustomers.isFetching = false;
    },
  },
});

export const {
  getAllArchivedCustomersStart,
  getAllArchivedCustomersSuccess,
  getAllArchivedCustomersFailed,
} = customersSlice.actions;

export default customersSlice.reducer;
