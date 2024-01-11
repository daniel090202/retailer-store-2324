import * as request from "@/utils/http";

import { Product } from "@/models";

const getProducts = async () => {
  try {
    const url = "/products/get-all-products";

    const response = await request.get(url);

    const productsData: {
      statusCode: number;
      message: string;
      data: Array<Product>;
      accessToken: string;
    } = response;

    if (productsData.statusCode === 200) {
      return productsData;
    }
  } catch (error) {
    console.log(error);
  }
};

export { getProducts };
