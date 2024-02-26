"use client";

import Image from "next/image";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import icons from "@/assets/Icons";
import images from "@/assets/Images";

import { error } from "@/lib/hot-toast";
import { appRoutes } from "@/config/pathConfig";
import { setCartCustomer } from "@/lib/redux/features";
import { allPaymentMethods, renderPaymentMethod } from "@/utils";
import { useAppSelector, useAppDispatch } from "@/lib/redux/store";
import {
  createOrder,
  getProductWithUPC,
  getProductsWithSKU,
  getAllCustomersWithPhoneNumber,
} from "@/services";

import Button from "@/app/components/Button";
import { User, Product, Customer, ProductDetail } from "@/models";

import CreateCustomer from "./CreateCustomer";
import SearchProductTippy from "./SearchProductTippy";
import SearchCustomerTippy from "./SearchCustomerTippy";

const SideBar = () => {
  const session = useSession();
  const dispatch = useAppDispatch();

  const [searchProduct, setSearchProduct] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("0");
  const [searchCustomer, setSearchCustomer] = useState("");
  const [customerPayment, setCustomerPayment] = useState<string>("0");
  const [createCustomerModal, setCreateCustomerModal] = useState(false);

  const [productResult, setProductResult] = useState<Product>();
  const [customersResult, setCustomersResult] = useState<Array<Customer>>();
  const [productsWithEachDetailResult, setProductsWithEachDetailResult] =
    useState<
      Array<{
        product: Product;
        detail: ProductDetail;
      }>
    >();

  const counterID = "MTV9834009";

  const user: User | undefined = session.data?.user;

  const cartProductsData:
    | Array<{
        product: Product;
        productDetail: ProductDetail;
        purchasedAmount: number;
      }>
    | undefined = useAppSelector((state) => {
    return state.cartReducer.cart.allProducts;
  });

  const customer: Customer | undefined = useAppSelector((state) => {
    return state.cartReducer.cart.customer;
  });

  const productDetails = cartProductsData?.map((cartProductData) => {
    return {
      productSKU: cartProductData.productDetail.SKU,
      purchasedQuantity: cartProductData.purchasedAmount,
      totalExpense:
        cartProductData.product.salePrice * cartProductData.purchasedAmount,
      notes: "",
    };
  });

  const totalProductsInCart =
    cartProductsData?.reduce((productTotalPrice, currentProduct) => {
      return productTotalPrice + currentProduct.purchasedAmount;
    }, 0) ?? 0;

  const totalExpense =
    cartProductsData?.reduce((productTotalPrice, currentProduct) => {
      return (
        productTotalPrice +
        currentProduct.product.salePrice * currentProduct.purchasedAmount
      );
    }, 0) ?? 0;

  const exchange = parseFloat(customerPayment) - totalExpense;

  useEffect(() => {
    const fetchData = async () => {
      if (searchProduct.length > 0) {
        const productsWithEachDetail:
          | Array<{
              product: Product;
              detail: ProductDetail;
            }>
          | undefined = await getProductsWithSKU(searchProduct);
        setProductsWithEachDetailResult(productsWithEachDetail);
      }
    };

    fetchData();
  }, [searchProduct]);

  useEffect(() => {
    const fetchData = async () => {
      const customersData:
        | {
            statusCode: number;
            message: string;
            data?: Array<Customer>;
          }
        | undefined = await getAllCustomersWithPhoneNumber(searchCustomer);

      if (
        customersData?.data !== undefined &&
        customersData.data.length > 0 &&
        searchCustomer.length > 0
      ) {
        setCustomersResult(customersData.data);
      }
    };

    fetchData();
  }, [searchCustomer]);

  const handleRemoveCustomerInformation = () => {
    setSearchCustomer("");
    setCustomersResult(undefined);
    dispatch(setCartCustomer(undefined));
  };

  const handleInputSearchProduct = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProductsWithEachDetailResult(undefined);
    setSearchProduct(event.target.value);
  };

  const handleInputSearchCustomer = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomersResult(undefined);
    setSearchCustomer(event.target.value);
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

  const handlePaymentMethodSelectCheckout = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPaymentMethod(event.target.value);
  };

  const handleForwardOrder = async () => {
    if (cartProductsData !== undefined && cartProductsData?.length <= 0) {
      error("Your cart is empty!");
      return;
    }

    if (customerPayment === "0") {
      error("Customer payment is required.");
      return;
    }

    if (parseInt(customerPayment) < totalExpense) {
      error("Customer payment is not satisfied.");
      return;
    }

    if (customer === undefined) {
      error("Customer can not be empty.");
      return;
    }

    if (productDetails === undefined) {
      error("You have not selected any items.");
      return;
    }

    const order: {
      customerPhone: string;
      customerPayment: number;
      customerPaymentMethod: number;
      counterID: string;
      cashierUserName: string | undefined;
      couponsAmount: number;
      totalExpense: number;
      totalAmount: number;
      totalDiscount: number;
      exchange: number;
      notes: string;
      paymentStatus: number;
      shipmentBarcode: string;
      coupons: Array<string>;
      orderDetails: Array<{
        productSKU: string;
        purchasedQuantity: number;
        totalExpense: number;
        notes: string;
      }>;
    } = {
      customerPhone: customer.phone,
      customerPayment: parseInt(customerPayment),
      customerPaymentMethod: parseInt(paymentMethod),
      counterID: counterID,
      cashierUserName: user?.userName,
      couponsAmount: 0,
      totalExpense: totalExpense,
      totalAmount: totalProductsInCart,
      totalDiscount: 0,
      exchange: exchange,
      notes: "",
      paymentStatus: 1,
      shipmentBarcode: "0000000000",
      coupons: [],
      orderDetails: productDetails,
    };

    const confirmedOrder = await createOrder(order);

    if (confirmedOrder !== undefined) {
      const path = `${appRoutes.customers.all}?page=1`;

      window.location.href = path;
    } else {
      error("Transaction failed.");
    }
  };

  return (
    <aside className="md:w-1/4 md:mx-2 md:mb-4 text-xl font-medium rounded-xl">
      <SearchProductTippy
        productsWithEachDetailResult={productsWithEachDetailResult}
      >
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
                setProductsWithEachDetailResult(undefined);
                setSearchProduct("");
              }}
            >
              {icons.cross}
            </span>
          ) : (
            <span></span>
          )}
        </div>
      </SearchProductTippy>
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
      {customer !== undefined ? (
        <div className="my-2 p-4 shadow-xl text-base bg-white rounded-xl flex flex-col">
          <div className="mb-2 flex justify-between items-center">
            <span className="text-lg font-bold uppercase">
              Customer information
            </span>
            <span
              onClick={() => handleRemoveCustomerInformation()}
              className="px-2 py-1 text-sm rounded-full cursor-pointer hover:bg-gray-200"
            >
              {icons.cross}
            </span>
          </div>
          <div className="flex items-center">
            <div className="mr-4 border rounded-full p-3 cursor-pointer">
              <Image
                src={images.maleDefaultProfilePicture}
                width={32}
                height={32}
                alt="User's profile picture."
              />
            </div>
            <div className="flex-1 mb-2 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Full name:</span>
                <span>{customer.customerName}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Phone number:</span>
                <span>{customer.phone}</span>
              </div>
              <div className="flex flex-col justify-between">
                <span className="text-lg font-bold">Address:</span>
                <span>{customer.address}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <SearchCustomerTippy
          customersResult={customersResult}
          setSearchCustomer={setSearchCustomer}
          setCustomersResult={setCustomersResult}
          createCustomerModal={createCustomerModal}
          setCreateCustomerModal={setCreateCustomerModal}
        >
          <div className="flex items-center my-2 px-2 bg-white border rounded-xl shadow-xl">
            <input
              id="product"
              name="product"
              value={searchCustomer}
              placeholder="Customer's phone number"
              onChange={(event) => handleInputSearchCustomer(event)}
              className="flex-1 p-4 bg-transparent outline-none"
            />
            {searchCustomer.length > 0 ? (
              <span
                className="p-4 text-gray-400 cursor-pointer"
                onClick={() => {
                  setCustomersResult(undefined);
                  setSearchCustomer("");
                }}
              >
                {icons.cross}
              </span>
            ) : (
              <span></span>
            )}
          </div>
        </SearchCustomerTippy>
      )}
      <select
        id="accountLevel"
        name="accountLevel"
        value={paymentMethod}
        onChange={(event) => handlePaymentMethodSelectCheckout(event)}
        className="w-full p-4 my-2 border rounded-xl shadow-xl cursor-pointer outline-none appearance-none"
      >
        <option value="-1" hidden>
          Select a kind of payment method
        </option>

        {allPaymentMethods.map((paymentMethod, index) => {
          return (
            <option key={index} value={index}>
              {paymentMethod}
            </option>
          );
        })}
      </select>
      <div className="my-2 p-4 rounded-xl border-2">
        <div className="my-2 flex justify-between">
          <span>Total products:</span>
          <span>{totalProductsInCart}</span>
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
        <div className="my-2 flex justify-between">
          <span>Method:</span>
          <span>{renderPaymentMethod(parseInt(paymentMethod))}</span>
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
        Confirm order
      </Button>
      <CreateCustomer
        createCustomerModal={createCustomerModal}
        setCreateCustomerModal={setCreateCustomerModal}
      />
    </aside>
  );
};

export default SideBar;
