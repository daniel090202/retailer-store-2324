import {
  getAllArchivedProductsStart,
  getAllArchivedProductsSuccess,
  getAllArchivedProductsFailed,
} from "@/lib/redux/features";

import { getArchivedProducts } from "@/services";

import { Product } from "@/models";
import { AppDispatch } from "@/lib/redux/store";

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
    dispatch(getAllArchivedProductsFailed());
  }
};

export { getAllArchivedProducts };
