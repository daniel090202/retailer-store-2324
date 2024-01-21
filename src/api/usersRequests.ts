import {
  getAllUsersStart,
  getAllUsersSuccess,
  getAllUsersFailed,
  getAllArchivedUsersStart,
  getAllArchivedUsersSuccess,
  getAllArchivedUsersFailed,
} from "@/lib/redux/features";
import { getAllUsers, getAllArchivedUsers, postUser } from "@/services";

import { User } from "@/models";
import { AppDispatch } from "@/lib/redux/store";

const createUser = async (createdUser: {
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  age: string;
  address: string;
  gender: string;
  position: string;
  phone: string;
}): Promise<User | undefined> => {
  try {
    const user: User | undefined = await postUser(createdUser);

    return user;
  } catch (error) {
    console.error(error);
  }
};

const readAllUsers = async (dispatch: AppDispatch) => {
  dispatch(getAllUsersStart());

  try {
    const usersData = (await getAllUsers()) as {
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

const readAllArchivedUsers = async (dispatch: AppDispatch) => {
  dispatch(getAllArchivedUsersStart());

  try {
    const archivedUsersData = (await getAllArchivedUsers()) as {
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

export { createUser, readAllUsers, readAllArchivedUsers };
