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

const getAllProducts = async (pageNumber: string, dispatch: AppDispatch) => {
  dispatch(getAllProductsStart());

  try {
    const allProductsData = (await getProducts(pageNumber)) as {
      statusCode: number;
      message: string;
      data?: {
        totalPage: number;
        totalProduct: number;
        allProducts: Array<Product>;
      };
    };

    dispatch(getAllProductsSuccess(allProductsData));
  } catch (error) {
    console.log(error);
    dispatch(getAllProductsFailed());
  }
};

const getAllArchivedProducts = async (
  pageNumber: string,
  dispatch: AppDispatch
) => {
  dispatch(getAllArchivedProductsStart());

  try {
    const archivedProductsData = (await getArchivedProducts(pageNumber)) as {
      statusCode: number;
      message: string;
      data?: {
        totalPage: number;
        totalArchivedProduct: number;
        allArchivedProducts: Array<Product>;
      };
    };

    dispatch(getAllArchivedProductsSuccess(archivedProductsData));
  } catch (error) {
    console.log(error);
    dispatch(getAllArchivedProductsFailed());
  }
};

export { getAllProducts, getAllArchivedProducts };
