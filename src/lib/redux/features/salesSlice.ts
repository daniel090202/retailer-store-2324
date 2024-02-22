import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  sales: {
    error: false,
    sales: undefined,
    isFetching: false,
  } as SalesState,
} as SalesInitialState;

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    getSalesStart: (state) => {
      state.sales.isFetching = true;
    },
    getSalesSuccess: (
      state,
      action: PayloadAction<{
        totalPage: number;
        totalOrders: number;
        totalRevenue: number;
        totalAmount: number;
        salesData: Array<{
          date: number;
          month: number;
          year: number;
          day: string;
          totalOrders: number;
          totalRevenue: number;
          totalAmount: number;
        }>;
      }>
    ) => {
      state.sales.error = false;
      state.sales.isFetching = false;
      state.sales.sales = action.payload;
    },
    getSalesFailed: (state) => {
      state.sales.error = true;
      state.sales.isFetching = false;
    },
  },
});

export const { getSalesStart, getSalesSuccess, getSalesFailed } =
  salesSlice.actions;

export default salesSlice.reducer;
