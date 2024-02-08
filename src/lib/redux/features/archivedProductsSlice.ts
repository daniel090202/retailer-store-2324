import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "@/models";

const initialState = {
  archivedProducts: {
    error: false,
    allArchivedProducts: undefined,
    isFetching: false,
  } as ArchivedProductsState,
} as ArchivedProductsInitialState;

const productsSlice = createSlice({
  name: "archivedProducts",
  initialState,
  reducers: {
    getAllArchivedProductsStart: (state) => {
      state.archivedProducts.isFetching = true;
    },
    getAllArchivedProductsSuccess: (
      state,
      action: PayloadAction<{
        statusCode: number;
        message: string;
        data?: {
          totalPage: number;
          totalArchivedProduct: number;
          allArchivedProducts: Array<Product>;
        };
      }>
    ) => {
      state.archivedProducts.error = false;
      state.archivedProducts.isFetching = false;
      state.archivedProducts.allArchivedProducts = action.payload;
    },
    getAllArchivedProductsFailed: (state) => {
      state.archivedProducts.error = true;
      state.archivedProducts.isFetching = false;
    },
  },
});

export const {
  getAllArchivedProductsStart,
  getAllArchivedProductsSuccess,
  getAllArchivedProductsFailed,
} = productsSlice.actions;

export default productsSlice.reducer;
