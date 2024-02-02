import * as request from "@/utils/http";

import { Product, ProductDetail } from "@/models";

const getProductsWithSKU = async (SKU: string = "", filter: string = "all") => {
  try {
    const url = "/products/get-product-with-sku";
    const params = new URLSearchParams([
      ["SKU", SKU],
      ["filter", filter],
    ]);

    const response = await request.get(url, { params });

    const productsData: {
      statusCode: number;
      message: string;
      data?: Array<ProductDetail>;
    } = response;

    if (productsData.statusCode === 200) {
      return productsData;
    }
  } catch (error) {
    console.log(error);
  }
};

const getProductsWithUPC = async (UPC: string = "", filter: string = "all") => {
  try {
    const url = "/products/get-product-with-upc";
    const params = new URLSearchParams([
      ["UPC", UPC],
      ["filter", filter],
    ]);

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

const getProducts = async (pageNumber: string) => {
  try {
    const url = "/products/get-all-products";
    const params = new URLSearchParams([["page", pageNumber]]);

    const response = await request.get(url, { params });

    const productsData: {
      statusCode: number;
      message: string;
      data?: {
        totalPage: number;
        totalProduct: number;
        allProducts: Array<Product>;
      };
    } = response;

    if (productsData.statusCode === 200) {
      return productsData;
    }
  } catch (error) {
    console.log(error);
  }
};

const getArchivedProducts = async (pageNumber: string) => {
  try {
    const url = "/products/get-all-archived-products";
    const params = new URLSearchParams([["page", pageNumber]]);

    const response = await request.get(url, { params });

    const archivedProductsData: {
      statusCode: number;
      message: string;
      data?: {
        totalPage: number;
        totalArchivedProduct: number;
        allArchivedProducts: Array<Product>;
      };
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
  originalPrice: string;
  salePrice: string;
  unit: string;
  details: Array<{
    size: string;
    color: string;
    initialInventory: string;
    minimumInventory: string;
    maximumInventory: string;
    storageLocation: Array<string>;
  }>;
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
  getProductsWithSKU,
  getProductsWithUPC,
  getProducts,
  getArchivedProducts,
  createProduct,
};
