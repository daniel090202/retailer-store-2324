import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "@/models/dto";

const initialState = {
  products: {
    error: false,
    allProducts: undefined,
    isFetching: false,
  } as ProductsState,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getAllProductsStart: (state) => {
      state.products.isFetching = true;
    },
    getAllProductsSuccess: (
      state,
      action: PayloadAction<{
        statusCode: number;
        message: string;
        data: Array<Product>;
      }>
    ) => {
      state.products.error = false;
      state.products.isFetching = false;
      state.products.allProducts = action.payload;
    },
    getAllProductsFailed: (state) => {
      state.products.error = true;
      state.products.isFetching = false;
    },
  },
});

export const {
  getAllProductsStart,
  getAllProductsSuccess,
  getAllProductsFailed,
} = productsSlice.actions;

export default productsSlice.reducer;
