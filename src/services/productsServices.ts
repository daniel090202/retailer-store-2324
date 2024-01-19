import * as request from "@/utils/http";

import { Product } from "@/models";

const getProduct = async (SKU: string = "", name: string = "") => {
  try {
    const url = "/products";
    const params = new URLSearchParams([
      ["SKU", SKU],
      ["name", name],
    ]);

    const response = await request.get(url, { params });

    const productsData: {
      statusCode: number;
      message: string;
      data: Array<Product>;
    } = response;

    if (productsData.statusCode === 200) {
      return productsData.data;
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

export { getProduct, getProducts };
