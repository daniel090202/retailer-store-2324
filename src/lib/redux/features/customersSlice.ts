import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Customer } from "@/models/dto";

const initialState = {
  customers: {
    error: false,
    allCustomers: undefined,
    isFetching: false,
  } as CustomersState,
} as CustomersInitialState;

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    getAllCustomersStart: (state) => {
      state.customers.isFetching = true;
    },
    getAllCustomersSuccess: (
      state,
      action: PayloadAction<{
        statusCode: number;
        message: string;
        data?: Array<Customer>;
      }>
    ) => {
      state.customers.error = false;
      state.customers.isFetching = false;
      state.customers.allCustomers = action.payload;
    },
    getAllCustomersFailed: (state) => {
      state.customers.error = true;
      state.customers.isFetching = false;
    },
  },
});

export const {
  getAllCustomersStart,
  getAllCustomersSuccess,
  getAllCustomersFailed,
} = customersSlice.actions;

export default customersSlice.reducer;
