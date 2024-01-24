"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import icons from "@/assets/Icons/index";

import { appRoutes } from "@/config/pathConfig";
import { getProductsWithQuery } from "@/services";
import { useAppSelector } from "@/lib/redux/store";

import { Product } from "@/models";
import Button from "@/components/Button";

import SearchTippy from "./SearchTippy";

const SideBar = () => {
  const router = useRouter();

  const [searchProduct, setSearchProduct] = useState("");
  const [customerPayment, setCustomerPayment] = useState<string>("0");
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

  const exchange = parseFloat(customerPayment) - totalExpense;

  useEffect(() => {
    const fetchData = async () => {
      const productsData:
        | {
            statusCode: number;
            message: string;
            data?: Array<Product>;
          }
        | undefined = await getProductsWithQuery(searchProduct);

      if (
        productsData?.data !== undefined &&
        productsData.data.length > 0 &&
        searchProduct.length > 0
      ) {
        setProductsResult(productsData.data);
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

  const handleInputCustomerPayment = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const customerPaymentInput = event.target.value;

    if (customerPaymentInput.length <= 0 || customerPaymentInput === "") {
      setCustomerPayment("0");
    } else {
      setCustomerPayment(event.target.value);
    }
  };

  const handleForwardOrder = () => {
    router.push(appRoutes.checkout.inStore.confirmOrder);
  };

  return (
    <aside className="md:w-1/4 md:mx-2 md:my-4 text-xl font-medium rounded-xl">
      <SearchTippy productsResult={productsResult}>
        <div className="flex items-center my-4 px-2 bg-white border rounded-xl shadow-xl">
          <input
            id="product"
            name="product"
            value={searchProduct}
            placeholder="Product's stock keeping unit"
            onChange={(event) => handleInputSearchProduct(event)}
            className="flex-1 p-4 bg-transparent outline-none"
          />
          {searchProduct.length > 0 ? (
            <span
              className="p-4 text-gray-400 cursor-pointer"
              onClick={() => {
                setProductsResult(undefined);
                setSearchProduct("");
              }}
            >
              {icons.cross}
            </span>
          ) : (
            <span></span>
          )}
        </div>
      </SearchTippy>
      <div className="flex items-center my-4 px-2 bg-white border rounded-xl shadow-xl">
        <input
          type="number"
          id="customerPayment"
          name="customerPayment"
          value={parseFloat(customerPayment) !== 0 ? customerPayment : ""}
          placeholder="Customer payment"
          onChange={(event) => handleInputCustomerPayment(event)}
          className="flex-1 p-4 bg-transparent outline-none"
        />
        {parseFloat(customerPayment) !== 0 ? (
          <span
            className="p-4 text-gray-400 cursor-pointer"
            onClick={() => {
              setCustomerPayment("0");
            }}
          >
            {icons.cross}
          </span>
        ) : (
          <span></span>
        )}
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
          <span>{parseFloat(customerPayment).toLocaleString()}</span>
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
