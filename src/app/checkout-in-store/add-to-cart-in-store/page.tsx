"use client";

import { useAppSelector } from "@/lib/redux/store";

import { Product } from "@/models";

import Card from "./components/Card";

const Counter = () => {
  const productsData:
    | {
        product: Product;
        purchasedAmount: number;
      }[]
    | [] = useAppSelector((state) => {
    return state.cartReducer.cart.allProducts;
  });

  const renderEmptyCart = () => {
    if (productsData.length <= 0) {
      return (
        <div className="h-full flex justify-center items-center">
          <span className="text-6xl font-medium text-white">Empty cart...</span>
        </div>
      );
    }
  };
  const renderCartProducts = () => {
    return productsData?.map((productData, index) => {
      return <Card key={index} productData={productData} />;
    });
  };

  return (
    <div className="flex-1 h-[680px] mx-2 my-4 p-4 border-2 rounded-xl overflow-y-scroll">
      {renderEmptyCart()}
      <div className="grid grid-cols-4 gap-4">{renderCartProducts()}</div>
    </div>
  );
};

export default Counter;
