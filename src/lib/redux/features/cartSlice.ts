import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product, Customer, ProductDetail } from "@/models";

const initialState = {
  cart: {
    customer: undefined,
    allProducts: [],
  } as CartState,
} as CartInitialState;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartCustomer: (state, action: PayloadAction<Customer | undefined>) => {
      state.cart.customer = action.payload;
    },
    setCartItem: (
      state,
      action: PayloadAction<{ product: Product; productDetail: ProductDetail }>
    ) => {
      const productData = state.cart.allProducts.find(
        (product) =>
          product.productDetail.SKU === action.payload.productDetail.SKU
      );

      if (productData === undefined) {
        state.cart.allProducts.push({
          product: action.payload.product,
          productDetail: action.payload.productDetail,
          purchasedAmount: 1,
        });
      }
    },
    increaseCartItem: (state, action: PayloadAction<string>) => {
      for (const productData of state.cart.allProducts) {
        const productDetail = productData.productDetail;

        if (
          productDetail.SKU === action.payload &&
          productData.purchasedAmount < productDetail.remainInventory
        ) {
          productData.purchasedAmount += 1;
        }
      }
    },
    decreaseCartItem: (state, action: PayloadAction<string>) => {
      for (const productData of state.cart.allProducts) {
        const productDetail = productData.productDetail;

        if (productDetail.SKU === action.payload) {
          productData.purchasedAmount -= 1;
        }
      }
    },
    removeCartItem: (state, action: PayloadAction<string>) => {
      for (const productData of state.cart.allProducts) {
        const productDetail = productData.productDetail;
        const productIndex = state.cart.allProducts.indexOf(productData);

        if (productDetail.SKU === action.payload) {
          state.cart.allProducts.splice(productIndex, 1);
        }
      }
    },
  },
});

export const {
  setCartItem,
  removeCartItem,
  setCartCustomer,
  decreaseCartItem,
  increaseCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;
