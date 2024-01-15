import {
  getAllUsersStart,
  getAllUsersSuccess,
  getAllUsersFailed,
} from "@/lib/redux/features";

import { getUsers } from "@/services";

import { User } from "@/models";
import { AppDispatch } from "@/lib/redux/store";

const getAllUsers = async (dispatch: AppDispatch) => {
  dispatch(getAllUsersStart());

  try {
    const productsData = (await getUsers()) as {
      statusCode: number;
      message: string;
      data: Array<User>;
      accessToken: string;
    };

    dispatch(getAllUsersSuccess(productsData));
  } catch (error) {
    console.log(error);
    dispatch(getAllUsersFailed());
  }
};

export { getAllUsers };