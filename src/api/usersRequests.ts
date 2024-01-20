import {
  getAllUsersStart,
  getAllUsersSuccess,
  getAllUsersFailed,
  getAllArchivedUsersStart,
  getAllArchivedUsersSuccess,
  getAllArchivedUsersFailed,
} from "@/lib/redux/features";
import { getUsers, getArchivedUsers } from "@/services";

import { User } from "@/models";
import { AppDispatch } from "@/lib/redux/store";

const getAllUsers = async (dispatch: AppDispatch) => {
  dispatch(getAllUsersStart());

  try {
    const usersData = (await getUsers()) as {
      statusCode: number;
      message: string;
      data: Array<User>;
    };

    dispatch(getAllUsersSuccess(usersData));
  } catch (error) {
    console.log(error);
    dispatch(getAllUsersFailed());
  }
};

const getAllArchivedUsers = async (dispatch: AppDispatch) => {
  dispatch(getAllArchivedUsersStart());

  try {
    const archivedUsersData = (await getArchivedUsers()) as {
      statusCode: number;
      message: string;
      data: Array<User>;
    };

    dispatch(getAllArchivedUsersSuccess(archivedUsersData));
  } catch (error) {
    console.log(error);
    dispatch(getAllArchivedUsersFailed());
  }
};

export { getAllUsers, getAllArchivedUsers };