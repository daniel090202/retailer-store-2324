"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import icons from "@/assets/Icons";
import images from "@/assets/Images";

import {
  getProductWithUPC,
  updateProductUPC,
  updateProductBrand,
  updateProductOriginalPrice,
  updateProductSalePrice,
} from "@/services";
import { appRoutes } from "@/config";
import { error, success, toastWithIcon } from "@/lib/hot-toast";
import { renderProductUnit, renderProductCategory } from "@/utils";

import { Product as ProductDTO } from "@/models";

import Table from "./components/Table";
import SideBar from "./components/SideBar";

const Product = ({ params }: { params: { UPC: string } }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedProduct, setEditedProduct] = useState<ProductDTO>({
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
            data?: ProductDTO;
          }
        | undefined = await getProductWithUPC(params.UPC);

      if (productsData?.data !== undefined) {
        setProduct({
          ...productsData.data,
          productDetails: [...productsData.data.productDetails],
        });
        setEditedProduct({
          ...productsData.data,
          productDetails: [...productsData.data.productDetails],
        });
      }
    };

    fetchData();
  }, [params.UPC]);

  const handleOpenEditMode = () => {
    toastWithIcon("You enter in edit mode.", "✍️");
    setEditMode(true);
  };

  const handleCloseEditMode = () => {
    toastWithIcon("You are back to view mode.", "👀");
    setEditMode(false);
    setEditedProduct(product);
  };

  const handleEditProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedProduct({
      ...editedProduct,
      [event.target.name]: event.target.value,
    });
  };

  const handleEditProductNumberProperties = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    if (value !== "" && value.length > 0) {
      setEditedProduct({
        ...editedProduct,
        [event.target.name]: parseInt(event.target.value),
      });
    } else {
      setEditedProduct({
        ...editedProduct,
        [event.target.name]: 0,
      });
    }
  };

  const handleUpdateProductUPC = async () => {
    const user: ProductDTO | undefined = await updateProductUPC(
      params.UPC,
      editedProduct.UPC
    );

    if (user !== undefined) {
      success("Successfully changed the product's UPC.");

      setTimeout(() => {
        window.location.href = `${appRoutes.product}/${user.UPC}`;
      }, 4000);
    } else {
      error("Failed to change the product's UPC at this time.");
    }
  };

  const handleUpdateProductBrand = async () => {
    const user: ProductDTO | undefined = await updateProductBrand(
      params.UPC,
      editedProduct.brand
    );

    if (user !== undefined) {
      success("Successfully changed the product's brand.");

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      error("Failed to change the product's brand at this time.");
    }
  };

  const handleUpdateProductOriginalPrice = async () => {
    const user: ProductDTO | undefined = await updateProductOriginalPrice(
      params.UPC,
      editedProduct.originalPrice.toString()
    );

    if (user !== undefined) {
      success("Successfully changed the product's original price.");

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      error("Failed to change the product's original price at this time.");
    }
  };

  const handleUpdateProductSalePrice = async () => {
    const user: ProductDTO | undefined = await updateProductSalePrice(
      params.UPC,
      editedProduct.salePrice.toString()
    );

    if (user !== undefined) {
      success("Successfully changed the product's sale price.");

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      error("Failed to change the product's sale price at this time.");
    }
  };

  const normalizeDateTime = (dateTime: string): React.ReactNode => {
    const newDateTime = new Date(dateTime);

    return <p>{newDateTime.toLocaleDateString()}</p>;
  };

  return (
    <div className="md:flex">
      {!editMode ? (
        <SideBar
          UPC={product.UPC}
          archived={product.archived}
          active={product.active}
          verified={product.verified}
        />
      ) : (
        <div></div>
      )}
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
          {editMode ? (
            <span
              onClick={() => {
                handleCloseEditMode();
              }}
              className="mx-2 text-xl cursor-pointer hover:text-gray-400 hover:transition hover:ease-in-out hover:delay-150 hover:hover:-translate-y-2"
            >
              {icons.circleXmark}
            </span>
          ) : (
            <span
              onClick={() => {
                handleOpenEditMode();
              }}
              className="mx-2 text-xl cursor-pointer hover:text-gray-400 hover:transition hover:ease-in-out hover:delay-150 hover:hover:-translate-y-2"
            >
              {icons.squaredPen}
            </span>
          )}
        </div>
        <div className="mx-auto py-4 space-y-3 grid grid-cols-3 gap-x-3">
          <div className="my-4">
            <label htmlFor="UPC">Universal product code</label>
            {editMode &&
            editedProduct.UPC !== "" &&
            editedProduct.UPC !== product.UPC ? (
              <span
                onClick={() => {
                  handleUpdateProductUPC();
                }}
                className="mx-4 rounded-full cursor-pointer hover:text-gray-400"
              >
                {icons.circleCheck}
              </span>
            ) : (
              <span></span>
            )}
            {editMode ? (
              <input
                id="UPC"
                name="UPC"
                onChange={(event) => {
                  handleEditProduct(event);
                }}
                placeholder={product.UPC}
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            ) : (
              <p
                id="UPC"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              >
                {product.UPC}
              </p>
            )}
          </div>
          <div className="my-4">
            <label htmlFor="brand">Brand</label>
            {editMode &&
            editedProduct.brand !== "" &&
            editedProduct.brand !== product.brand ? (
              <span
                onClick={() => {
                  handleUpdateProductBrand();
                }}
                className="mx-4 rounded-full cursor-pointer hover:text-gray-400"
              >
                {icons.circleCheck}
              </span>
            ) : (
              <span></span>
            )}
            {editMode ? (
              <input
                id="brand"
                name="brand"
                onChange={(event) => {
                  handleEditProduct(event);
                }}
                placeholder={product.brand}
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            ) : (
              <p
                id="brand"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              >
                {product.brand}
              </p>
            )}
          </div>
          <div className="my-4">
            <label htmlFor="unit">Unit</label>
            {editMode && editedProduct.unit !== product.unit ? (
              <span
                onClick={() => {
                  handleUpdateProductBrand();
                }}
                className="mx-4 rounded-full cursor-pointer hover:text-gray-400"
              >
                {icons.circleCheck}
              </span>
            ) : (
              <span></span>
            )}
            {editMode ? (
              <input
                disabled
                id="unit"
                name="unit"
                value={renderProductUnit(product.unit)}
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none cursor-not-allowed"
              />
            ) : (
              <p
                id="unit"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              >
                {renderProductUnit(product.unit)}
              </p>
            )}
          </div>
          <div className="my-4">
            <label htmlFor="originalPrice">Original price</label>
            {editMode &&
            editedProduct.originalPrice !== 0 &&
            editedProduct.originalPrice !== product.originalPrice ? (
              <span
                onClick={() => {
                  handleUpdateProductOriginalPrice();
                }}
                className="mx-4 rounded-full cursor-pointer hover:text-gray-400"
              >
                {icons.circleCheck}
              </span>
            ) : (
              <span></span>
            )}
            {editMode ? (
              <input
                type="number"
                id="originalPrice"
                name="originalPrice"
                onChange={(event) => {
                  handleEditProductNumberProperties(event);
                }}
                placeholder={`${product.originalPrice.toLocaleString()} VND`}
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            ) : (
              <p
                id="originalPrice"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              >
                {product.originalPrice.toLocaleString()} VND
              </p>
            )}
          </div>
          <div className="my-4">
            <label htmlFor="salePrice">Sale price</label>
            {editMode &&
            editedProduct.salePrice !== 0 &&
            editedProduct.salePrice !== product.salePrice ? (
              <span
                onClick={() => {
                  handleUpdateProductSalePrice();
                }}
                className="mx-4 rounded-full cursor-pointer hover:text-gray-400"
              >
                {icons.circleCheck}
              </span>
            ) : (
              <span></span>
            )}
            {editMode ? (
              <input
                type="number"
                id="salePrice"
                name="salePrice"
                onChange={(event) => {
                  handleEditProductNumberProperties(event);
                }}
                placeholder={`${product.salePrice.toLocaleString()} VND`}
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              />
            ) : (
              <p
                id="salePrice"
                className="w-full p-4 my-2 border rounded-xl shadow-xl outline-none"
              >
                {product.salePrice.toLocaleString()} VND
              </p>
            )}
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
        <Table
          product={product}
          editMode={editMode}
          editedProduct={editedProduct}
          setEditedProduct={setEditedProduct}
        />
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
