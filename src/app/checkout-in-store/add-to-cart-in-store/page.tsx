"use client";

import { useAppSelector } from "@/lib/redux/store";

import { Product, ProductDetail } from "@/models";

import Card from "./components/Card";

const Counter = () => {
  const productsInCartData:
    | {
        product: Product;
        productDetail: ProductDetail;
        purchasedAmount: number;
      }[]
    | [] = useAppSelector((state) => {
    return state.cartReducer.cart.allProducts;
  });

  const renderEmptyCart = () => {
    if (productsInCartData.length <= 0) {
      return (
        <div className="h-full flex justify-center items-center">
          <span className="text-6xl font-medium text-white">Empty cart...</span>
        </div>
      );
    }
  };
  const renderCartProducts = () => {
    return productsInCartData?.map((productInCartData, index) => {
      return <Card key={index} productData={productInCartData} />;
    });
  };

  return (
    <div className="flex-1 h-[800px] mx-2 my-4 p-4 border-2 rounded-xl overflow-y-scroll">
      {renderEmptyCart()}
      <div className="grid grid-cols-4 gap-4">{renderCartProducts()}</div>
    </div>
  );
};

export default Counter;
