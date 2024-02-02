import {
  getAllUsersStart,
  getAllUsersSuccess,
  getAllUsersFailed,
  getAllArchivedUsersStart,
  getAllArchivedUsersSuccess,
  getAllArchivedUsersFailed,
} from "@/lib/redux/features";
import {
  getAllUsers as readAllUsers,
  getAllArchivedUsers as readAllArchivedUsers,
  postUser,
} from "@/services";

import { User } from "@/models";
import { AppDispatch } from "@/lib/redux/store";

const getAllUsers = async (pageNumber: string, dispatch: AppDispatch) => {
  dispatch(getAllUsersStart());

  try {
    const usersData = (await readAllUsers(pageNumber)) as {
      statusCode: number;
      message: string;
      data?: {
        totalUser: number;
        totalPage: number;
        allUsers: Array<User>;
      };
    };

    dispatch(getAllUsersSuccess(usersData));
  } catch (error) {
    console.log(error);
    dispatch(getAllUsersFailed());
  }
};

const getAllArchivedUsers = async (
  pageNumber: string,
  dispatch: AppDispatch
) => {
  dispatch(getAllArchivedUsersStart());

  try {
    const archivedUsersData = (await readAllArchivedUsers(pageNumber)) as {
      statusCode: number;
      message: string;
      data?: {
        totalPage: number;
        totalArchivedUser: number;
        allArchivedUsers: Array<User>;
      };
    };

    dispatch(getAllArchivedUsersSuccess(archivedUsersData));
  } catch (error) {
    console.log(error);
    dispatch(getAllArchivedUsersFailed());
  }
};

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

export { createUser, getAllUsers, getAllArchivedUsers };
