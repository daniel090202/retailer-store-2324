"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import icons from "@/assets/Icons";
import images from "@/assets/Images";

import { getProductsWithUPC } from "@/services";
import { renderProductUnit, renderProductCategory } from "@/utils";

import { Product as ProductDTO } from "@/models";

import Table from "./components/Table";
import SideBar from "./components/SideBar";

const Product = ({ params }: { params: { UPC: string } }) => {
  const [product, setProduct] = useState<ProductDTO>({
    SKU: "",
    UPC: "",
    name: "",
    brand: "",
    forGender: 0,
    category: [],
    originalPrice: 0,
    salePrice: 0,
    unit: 0,
    productDetails: [
      {
        UPC: "",
        SKU: "",
        size: "",
        color: "",
        initialInventory: 0,
        minimumInventory: 0,
        maximumInventory: 0,
        remainInventory: 0,
        soldQuantity: 0,
        storageLocation: [],
        displayLocation: [],
      },
    ],
    active: false,
    archived: false,
    verified: false,
    createdAt: "",
    updatedAt: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const productsData:
        | {
            statusCode: number;
            message: string;
            data?: Array<ProductDTO>;
          }
        | undefined = await getProductsWithUPC(params.UPC);

      if (productsData !== undefined && productsData.data !== undefined) {
        setProduct(productsData.data[0]);
      }
    };

    fetchData();
  }, []);

  const normalizeDateTime = (dateTime: string): React.ReactNode => {
    const newDateTime = new Date(dateTime);

    return <p>{newDateTime.toLocaleDateString()}</p>;
  };

  return (
    <div className="md:flex">
      <SideBar
        active={product.active}
        archived={product.archived}
        verified={product.verified}
      />
      <div className="flex-1 mx-2 my-4 p-4 bg-white rounded-xl overflow-y-scroll">
        <div className="flex justify-start items-center">
          <span
            onClick={() => window.history.back()}
            className="mr-4 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-200"
          >
            {icons.arrowLeft}
          </span>
          <div className="flex justify-center items-center">
            <div className="shadow-lg border rounded-xl p-3 cursor-pointer">
              <Image
                src={images.logo}
                width={40}
                height={40}
                alt="User's profile picture."
              />
            </div>
            <h1 className="mx-4 text-2xl font-bold">{product.name}</h1>
          </div>
        </div>
        <div className="mx-auto py-4 space-y-3 grid grid-cols-3 gap-x-3">
          <div className="my-4">
            <label htmlFor="UPC">Universal product code</label>
            <p
              id="UPC"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {product.UPC}
            </p>
          </div>
          <div className="my-4">
            <label htmlFor="brand">Brand</label>
            <p
              id="brand"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {product.brand}
            </p>
          </div>
          <div className="my-4">
            <label htmlFor="unit">Unit</label>
            <p
              id="unit"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {renderProductUnit(product.unit)}
            </p>
          </div>
          <div className="my-4">
            <label htmlFor="originalPrice">Original price</label>
            <p
              id="originalPrice"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {product.originalPrice.toLocaleString()} VND
            </p>
          </div>
          <div className="my-4">
            <label htmlFor="salePrice">Sale price</label>
            <p
              id="salePrice"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {product.salePrice.toLocaleString()} VND
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <label htmlFor="category">Category</label>
          <div id="category" className="mt-2 flex items-center">
            {product.category.map((category, index) => {
              return (
                <div
                  key={index}
                  className="mr-4 p-4 border rounded-xl shadow-xl bg-gray-100"
                >
                  {renderProductCategory(category)}
                </div>
              );
            })}
          </div>
        </div>
        <Table product={product} />
        <div className="flex flex-col items-end">
          <div className="flex mt-2">
            <span className="mx-4">Created at:</span>
            <span className="">{normalizeDateTime(product.createdAt)}</span>
          </div>
          <div className="flex mt-2">
            <span className="mx-4">Updated at:</span>
            <span>{normalizeDateTime(product.updatedAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
