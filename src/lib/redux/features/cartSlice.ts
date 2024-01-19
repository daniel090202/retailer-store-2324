import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "@/models/dto";

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
    setCartCustomer: (state, action: PayloadAction<string>) => {
      state.cart.customer = action.payload;
    },
    setCartItem: (state, action: PayloadAction<Product>) => {
      const productData = state.cart.allProducts.find(
        (product) => product.product.SKU === action.payload.SKU
      );

      if (productData === undefined) {
        state.cart.allProducts.push({
          product: action.payload,
          purchasedAmount: 1,
        });
      }
    },
    increaseCartItem: (state, action: PayloadAction<string>) => {
      for (const productData of state.cart.allProducts) {
        const product = productData.product;

        if (product.SKU === action.payload) {
          productData.purchasedAmount += 1;
        }
      }
    },
    decreaseCartItem: (state, action: PayloadAction<string>) => {
      for (const productData of state.cart.allProducts) {
        const product = productData.product;

        if (product.SKU === action.payload) {
          productData.purchasedAmount -= 1;
        }
      }
    },
    removeCartItem: (state, action: PayloadAction<string>) => {
      for (const productData of state.cart.allProducts) {
        const product = productData.product;
        const productIndex = state.cart.allProducts.indexOf(productData);

        if (product.SKU === action.payload) {
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
