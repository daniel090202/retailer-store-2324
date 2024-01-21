"use client";

import { useState, useEffect } from "react";

import Button from "@/components/Button";

import { Product } from "@/models";

import { getProduct } from "@/services";
import { useAppSelector } from "@/lib/redux/store";

import SearchTippy from "./SearchTippy";

const SideBar = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const [customerPayment, setCustomerPayment] = useState(200000);
  const [productsResult, setProductsResult] = useState<Array<Product>>();

  const productsData:
    | {
        product: Product;
        purchasedAmount: number;
      }[]
    | [] = useAppSelector((state) => {
    return state.cartReducer.cart.allProducts;
  });

  const totalExpense = productsData.reduce(
    (productTotalPrice, currentProduct) => {
      return (
        productTotalPrice +
        currentProduct.product.salePrice * currentProduct.purchasedAmount
      );
    },
    0
  );

  const exchange = customerPayment - totalExpense;

  useEffect(() => {
    const fetchData = async () => {
      const products: Array<Product> | undefined = await getProduct(
        searchProduct
      );

      if (products !== undefined) {
        setProductsResult(products);
      }
    };

    fetchData();
  }, [searchProduct]);

  const handleInputSearchProduct = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProductsResult(undefined);
    setSearchProduct(event.target.value);
  };

  const handleForwardOrder = () => {
    return;
  };

  return (
    <aside className="md:w-1/4 md:mx-2 md:my-4 text-xl font-medium rounded-xl">
      <div className="my-4">
        <SearchTippy productsResult={productsResult}>
          <input
            id="product"
            name="product"
            placeholder="Product's stock keeping unit"
            onChange={(event) => handleInputSearchProduct(event)}
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          />
        </SearchTippy>
      </div>
      <div className="p-4 rounded-xl border-2">
        <div className="my-2 flex justify-between">
          <span>Total products:</span>
          <span>{productsData.length}</span>
        </div>
        <div className="my-2 flex justify-between">
          <span>Total expense:</span>
          <span>{totalExpense.toLocaleString()}</span>
        </div>
        <div className="my-2 flex justify-between">
          <span>Payment:</span>
          <span>{customerPayment.toLocaleString()}</span>
        </div>
        <div className="my-2 flex justify-between">
          <span>Coupons:</span>
          <span>0</span>
        </div>
        <hr className="my-2" />
        <div className="my-2 flex justify-between">
          <span>Exchange:</span>
          <span>{exchange.toLocaleString()}</span>
        </div>
      </div>
      <Button
        leftIcon=""
        rightIcon=""
        className="w-full my-4 p-4 text-xl"
        onClick={() => handleForwardOrder()}
      >
        Forward
      </Button>
    </aside>
  );
};

export default SideBar;
