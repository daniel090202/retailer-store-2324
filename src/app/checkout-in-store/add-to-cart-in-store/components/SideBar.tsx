"use client";

import Image from "next/image";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import icons from "@/assets/Icons";
import images from "@/assets/Images";

import { appRoutes } from "@/config/pathConfig";
import { setCartCustomer } from "@/lib/redux/features";
import { useAppSelector, useAppDispatch } from "@/lib/redux/store";
import {
  getProductsWithSKU,
  getCustomersWithQuery,
  getProductsWithUPC,
} from "@/services";

import { Product, Customer, ProductDetail } from "@/models";
import Button from "@/components/Button";

import CreateCustomer from "./CreateCustomer";
import SearchProductTippy from "./SearchProductTippy";
import SearchCustomerTippy from "./SearchCustomerTippy";

const SideBar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [searchProduct, setSearchProduct] = useState("");
  const [searchCustomer, setSearchCustomer] = useState("");
  const [customerPayment, setCustomerPayment] = useState<string>("0");
  const [createCustomerModal, setCreateCustomerModal] = useState(false);

  const [productResult, setProductResult] = useState<Product>();
  const [customersResult, setCustomersResult] = useState<Array<Customer>>();
  const [productDetailsResult, setProductDetailsResult] =
    useState<Array<ProductDetail>>();

  const cartProductsData:
    | {
        product: Product;
        productDetail: ProductDetail;
        purchasedAmount: number;
      }[]
    | [] = useAppSelector((state) => {
    return state.cartReducer.cart.allProducts;
  });

  const customer: Customer | undefined = useAppSelector((state) => {
    return state.cartReducer.cart.customer;
  });

  const totalExpense = cartProductsData.reduce(
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
      const productDetailsData:
        | {
            statusCode: number;
            message: string;
            data?: Array<ProductDetail>;
          }
        | undefined = await getProductsWithSKU(searchProduct);

      if (
        productDetailsData?.data !== undefined &&
        productDetailsData.data.length > 0 &&
        searchProduct.length > 0
      ) {
        const productData:
          | {
              statusCode: number;
              message: string;
              data?: Array<Product>;
            }
          | undefined = await getProductsWithUPC(
          productDetailsData.data[0].UPC
        );

        if (productData?.data !== undefined && productData.data.length > 0) {
          setProductResult(productData.data[0]);
          setProductDetailsResult(productDetailsData.data);
        }
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
        | undefined = await getCustomersWithQuery(searchCustomer);

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
    setProductDetailsResult(undefined);
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

  const handleForwardOrder = () => {
    if (cartProductsData.length <= 0 || customerPayment === "0") {
      return;
    }

    router.push(appRoutes.checkout.inStore.confirmOrder);
  };

  return (
    <aside className="md:w-1/4 md:mx-2 md:my-4 text-xl font-medium rounded-xl">
      <SearchProductTippy
        productResult={productResult}
        productDetailsResult={productDetailsResult}
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
                setProductDetailsResult(undefined);
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
        <div className="my-4 p-4 shadow-xl text-base bg-white rounded-xl flex flex-col">
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
          <div className="flex">
            <div className="mr-4 border rounded-full p-3 cursor-pointer">
              <Image
                src={images.maleDefaultProfilePicture}
                width={32}
                height={32}
                alt="User's profile picture."
              />
            </div>
            <div className="mb-2 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">
                  {customer.customerName}
                </span>
                <span>{customer.phone}</span>
              </div>
              <span>{customer.address}</span>
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
          <div className="flex items-center my-4 px-2 bg-white border rounded-xl shadow-xl">
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
      <div className="p-4 rounded-xl border-2">
        <div className="my-2 flex justify-between">
          <span>Total products:</span>
          <span>{cartProductsData.length}</span>
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
      <CreateCustomer
        createCustomerModal={createCustomerModal}
        setCreateCustomerModal={setCreateCustomerModal}
      />
    </aside>
  );
};

export default SideBar;
