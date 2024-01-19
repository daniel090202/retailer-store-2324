"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import icons from "@/assets/Icons";
import images from "@/assets/Images";

import { getProduct } from "@/services";
import {
  renderProductUnit,
  renderProductCategory,
  renderProductStorageLocation,
  renderProductDisplayLocation,
} from "@/utils";
import { Product as ProductDTO } from "@/models";

import SideBar from "./components/SideBar";

const Product = ({ params }: { params: { SKU: string } }) => {
  const [product, setProduct] = useState<ProductDTO>({
    SKU: "",
    UPC: "",
    name: "",
    brand: "",
    forGender: 0,
    category: [],
    size: [],
    color: [],
    originalPrice: 0,
    salePrice: 0,
    unit: 0,
    initialInventory: 0,
    minimumInventory: 0,
    maximumInventory: 0,
    remainInventory: 0,
    soldQuantity: 0,
    storageLocation: [],
    displayLocation: [],
    active: false,
    archived: false,
    verified: false,
    createdAt: "",
    updatedAt: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const products: Array<ProductDTO> | undefined = await getProduct(
        params.SKU
      );

      if (products !== undefined) {
        const product = products[0];
        setProduct(product);
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
        <span
          onClick={() => window.history.back()}
          className="px-2 py-1 rounded-full cursor-pointer hover:bg-gray-200"
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
        <div className="mx-auto py-3 space-y-3 grid grid-cols-4 gap-x-4">
          <div className="my-4">
            <label htmlFor="SKU">Stock keeping unit</label>
            <p
              id="SKU"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {product.SKU}
            </p>
          </div>
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
            <label htmlFor="name">Name</label>
            <p
              id="name"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {product.name}
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
          <div className="my-4">
            <label htmlFor="initialInventory">Remain inventory</label>
            <p
              id="initialInventory"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {product.initialInventory}
            </p>
          </div>
          <div className="my-4">
            <label htmlFor="minimumInventory">Minimum inventory</label>
            <p
              id="minimumInventory"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {product.minimumInventory}
            </p>
          </div>
          <div className="my-4">
            <label htmlFor="maximumInventory">Maximum inventory</label>
            <p
              id="maximumInventory"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {product.minimumInventory}
            </p>
          </div>
          <div className="my-4">
            <label htmlFor="createdAt">Created at</label>
            <div
              id="createdAt"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {normalizeDateTime(product.createdAt)}
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="updatedAt">Updated at</label>
            <div
              id="updatedAt"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {normalizeDateTime(product.updatedAt)}
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="soldQuantity">Sold quantity</label>
            <p
              id="soldQuantity"
              className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
            >
              {product.soldQuantity}
            </p>
          </div>
        </div>
        <div className="mx-auto py-3 space-y-3 grid grid-cols-3 gap-x-3">
          <div className="my-4">
            <label htmlFor="category">Category</label>
            <div id="category" className="mt-2 flex items-center">
              {product.category.map((category, index) => {
                return (
                  <div
                    key={index}
                    className="mr-4 p-4 border rounded-xl shadow-xl hover:bg-gray-200"
                  >
                    {renderProductCategory(category)}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="size">Size</label>
            <div id="size" className="mt-2 flex items-center">
              {product.size.map((size, index) => {
                return (
                  <div
                    key={index}
                    className="mr-4 p-4 border rounded-xl shadow-xl hover:bg-gray-200"
                  >
                    {size}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="color">Color</label>
            <div id="color" className="mt-4 flex items-center">
              {product.color.map((color, index) => {
                return (
                  <div
                    key={index}
                    style={{ backgroundColor: color }}
                    className={"mr-4 p-4 border rounded-full shadow-xl"}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="my-4">
          <label htmlFor="storageLocation">Storage location</label>
          <div id="storageLocation" className="mt-4 flex items-center">
            {product.storageLocation.map((storageLocation, index) => {
              return (
                <div
                  key={index}
                  className="mr-4 p-4 border rounded-xl shadow-xl hover:bg-gray-200"
                >
                  {renderProductStorageLocation(storageLocation)}
                </div>
              );
            })}
          </div>
        </div>
        <div className="my-4">
          <label htmlFor="displayLocation">Storage location</label>
          <div id="displayLocation" className="mt-4 flex items-center">
            {product.displayLocation.map((displayLocation, index) => {
              return (
                <div
                  key={index}
                  className="mr-4 p-4 border rounded-xl shadow-xl hover:bg-gray-200"
                >
                  {renderProductDisplayLocation(displayLocation)}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
