"use client";

import Image from "next/image";

import icons from "@/assets/Icons";
import images from "@/assets/Images";
import { renderProductCategory } from "@/services/productServices";

const Product = ({ params }: { params: { id: string } }) => {
  const product = {
    barcode: "SWEATER0001",
    name: "Christmas Eve cardigan 2023",
    category: 2,
    color: ["#E0BBE4", "#957DAD", "#D291BC"],
    size: ["XS", "S", "L", "XL", "2XL", "3XL", "4XL"],
    originalPrice: 300000,
    salePrice: 350000,
    remainStock: 3,
    soldAmount: 6,
  };

  return (
    <div className="flex-1 h-[600px] mx-2 my-4 p-4 bg-white rounded-xl overflow-y-scroll">
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
      <div className="mx-auto py-3 space-y-3 grid grid-cols-2 gap-x-4">
        <div className="my-4">
          <label htmlFor="barcode">Stock keeping unit barcode</label>
          <p
            id="barcode"
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          >
            {product.barcode}
          </p>
        </div>
        <div className="my-4">
          <label htmlFor="category">Category</label>
          <p
            id="category"
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          >
            {renderProductCategory(product.category)}
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
          <label htmlFor="remainStock">Remain stock</label>
          <p
            id="remainStock"
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          >
            {product.remainStock}
          </p>
        </div>
        <div className="my-4">
          <label htmlFor="soldAmount">Sold amount</label>
          <p
            id="soldAmount"
            className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
          >
            {product.soldAmount}
          </p>
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
    </div>
  );
};

export default Product;
