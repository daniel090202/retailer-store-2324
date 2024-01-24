import {
  getAllProductsStart,
  getAllProductsSuccess,
  getAllProductsFailed,
  getAllArchivedProductsStart,
  getAllArchivedProductsSuccess,
  getAllArchivedProductsFailed,
} from "@/lib/redux/features";

import { getProducts, getArchivedProducts } from "@/services";

import { Product } from "@/models";
import { AppDispatch } from "@/lib/redux/store";

const getAllProducts = async (dispatch: AppDispatch) => {
  dispatch(getAllProductsStart());

  try {
    const productsData = (await getProducts()) as {
      statusCode: number;
      message: string;
      data: Array<Product>;
    };

    dispatch(getAllProductsSuccess(productsData));
  } catch (error) {
    console.log(error);
    dispatch(getAllProductsFailed());
  }
};

const getAllArchivedProducts = async (dispatch: AppDispatch) => {
  dispatch(getAllArchivedProductsStart());

  try {
    const archivedProductsData = (await getArchivedProducts()) as {
      statusCode: number;
      message: string;
      data: Array<Product>;
    };

    dispatch(getAllArchivedProductsSuccess(archivedProductsData));
  } catch (error) {
    console.log(error);
    dispatch(getAllArchivedProductsFailed());
  }
};

export { getAllProducts, getAllArchivedProducts };
