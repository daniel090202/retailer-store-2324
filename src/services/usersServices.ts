import * as request from "@/utils/http";

import { User } from "@/models";

const getUserWithUserName = async (userName: string = "") => {
  try {
    const url = "/users/get-user-with-username";
    const params = new URLSearchParams([["userName", userName]]);

    const response = await request.get(url, { params });

    const usersData: {
      statusCode: number;
      message: string;
      data?: User;
    } = response;

    if (usersData.statusCode === 200) {
      return usersData;
    }
  } catch (error) {
    console.log(error);
  }
};

const getUsersWithUserName = async (
  pageNumber: string = "1",
  userName: string = "",
  filter: string = "",
  archivedUserStatus: string = "unarchived"
) => {
  try {
    const url = "/users/get-users-with-username";
    const params = new URLSearchParams([
      ["page", pageNumber],
      ["userName", userName],
      ["filter", filter],
      ["archivedUserStatus", archivedUserStatus],
    ]);

    const response = await request.get(url, { params });

    const usersData: {
      statusCode: number;
      message: string;
      data?: {
        totalUser: number;
        totalPage: number;
        allUsers: Array<User>;
      };
    } = response;

    if (usersData.statusCode === 200) {
      return usersData;
    }
  } catch (error) {
    console.log(error);
  }
};

const getAllArchivedUsers = async (pageNumber: string) => {
  try {
    const url = "/users/get-all-archived-users";
    const params = new URLSearchParams([["page", pageNumber]]);

    const response = await request.get(url, { params });

    const archivedUsersData: {
      statusCode: number;
      message: string;
      data?: {
        totalPage: number;
        totalArchivedUser: number;
        allArchivedUsers: Array<User>;
      };
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

export {
  getUserWithUserName,
  getUsersWithUserName,
  getAllArchivedUsers,
  postUser,
};
