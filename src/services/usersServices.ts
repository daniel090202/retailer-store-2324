import * as request from "@/utils/http";

import { User } from "@/models";

const getUsersWithQuery = async (userName: string) => {
  try {
    const url = "/users";
    const params = new URLSearchParams([["userName", userName]]);

    const response = await request.get(url, { params });

    const usersData: {
      statusCode: number;
      message: string;
      data?: Array<User>;
    } = response;

    if (usersData.statusCode === 200) {
      return usersData;
    }
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async () => {
  try {
    const url = "/users/get-all-users";

    const response = await request.get(url);

    const usersData: {
      statusCode: number;
      message: string;
      data?: Array<User>;
    } = response;

    if (usersData.statusCode === 200) {
      return usersData;
    }
  } catch (error) {
    console.log(error);
  }
};

const getAllArchivedUsers = async () => {
  try {
    const url = "/users/get-all-archived-users";

    const response = await request.get(url);

    const archivedUsersData: {
      statusCode: number;
      message: string;
      data?: Array<User>;
    } = response;

    if (archivedUsersData.statusCode === 200) {
      return archivedUsersData;
    }
  } catch (error) {
    console.log(error);
  }
};

const postUser = async (user: {
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
    const url = "/users/create-user";

    const response = await request.post(url, user);

    const userData: {
      statusCode: number;
      message: string;
      data?: User;
    } = response.data;

    if (userData.statusCode === 200) {
      return userData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export { getUsersWithQuery, getAllUsers, getAllArchivedUsers, postUser };
