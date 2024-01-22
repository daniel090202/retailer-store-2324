"use client";

import { useAppSelector } from "@/lib/redux/store";

import { Product } from "@/models";

import Table from "./components/Table";

const ConfirmOrder = () => {
  const productsInCartData:
    | Array<{
        product: Product;
        purchasedAmount: number;
      }>
    | undefined = useAppSelector((state) => {
    return state.cartReducer.cart.allProducts;
  });

  return (
    <div className="flex-1 mx-2 my-4 p-4 h-[680px] bg-white rounded-xl">
      <h1 className="my-2 text-2xl font-bold flex justify-center">
        Order confirmation
      </h1>
      <div className="flex justify-between">
        <div className="my-2">
          <span>Total products in the cart:</span>
          <span className="mx-4 text-lg">
            {productsInCartData?.length.toLocaleString()}
          </span>
          <span>item(s)</span>
        </div>
      </div>
      <Table productsInCartData={productsInCartData} />
    </div>
  );
};

export default ConfirmOrder;
