import * as request from "@/utils/http";

import { Product } from "@/models";

const getProductsWithQuery = async (SKU: string = "") => {
  try {
    const url = "/products";
    const params = new URLSearchParams([["SKU", SKU]]);

    const response = await request.get(url, { params });

    const productsData: {
      statusCode: number;
      message: string;
      data?: Array<Product>;
    } = response;

    if (productsData.statusCode === 200) {
      return productsData;
    }
  } catch (error) {
    console.log(error);
  }
};

const getProducts = async () => {
  try {
    const url = "/products/get-all-products";

    const response = await request.get(url);

    const productsData: {
      statusCode: number;
      message: string;
      data: Array<Product>;
    } = response;

    if (productsData.statusCode === 200) {
      return productsData;
    }
  } catch (error) {
    console.log(error);
  }
};

const getArchivedProducts = async () => {
  try {
    const url = "/products/get-all-archived-products";

    const response = await request.get(url);

    const archivedProductsData: {
      statusCode: number;
      message: string;
      data: Array<Product>;
    } = response;

    if (archivedProductsData.statusCode === 200) {
      return archivedProductsData;
    }
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async (product: {
  SKU: string;
  UPC: string;
  name: string;
  brand: string;
  forGender: string;
  category: Array<string>;
  size: Array<string>;
  color: Array<string>;
  originalPrice: string;
  salePrice: string;
  unit: string;
  initialInventory: string;
  minimumInventory: string;
  maximumInventory: string;
  storageLocation: Array<string>;
}) => {
  try {
    const url = "/products/create-product";

    const response = await request.post(url, product);

    const createdProductData: {
      statusCode: number;
      message: string;
      data: Array<Product>;
    } = response.data;

    console.log(createdProductData);

    if (createdProductData.statusCode === 200) {
      return createdProductData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export {
  getProductsWithQuery,
  getProducts,
  getArchivedProducts,
  createProduct,
};
