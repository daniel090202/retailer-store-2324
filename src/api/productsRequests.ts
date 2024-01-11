import {
  getAllProductsStart,
  getAllProductsSuccess,
  getAllProductsFailed,
} from "@/lib/redux/features";

import { getProducts } from "@/services";

import { Product } from "@/models/dto";
import { AppDispatch } from "@/lib/redux/store";

const getAllProducts = async (dispatch: AppDispatch) => {
  dispatch(getAllProductsStart());

  try {
    const productsData = (await getProducts()) as {
      statusCode: number;
      message: string;
      data: Array<Product>;
      accessToken: string;
    };

    dispatch(getAllProductsSuccess(productsData));
  } catch (error) {
    console.log(error);
    dispatch(getAllProductsFailed());
  }
};

export { getAllProducts };
