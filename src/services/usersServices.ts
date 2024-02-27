import * as request from "@/utils/http";

import { User } from "@/models";

const getCurrentUser = async (accessToken: string) => {
  try {
    const url = "/users/me";
    const params = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };

    const response = await request.get(url, params);

    const usersData: {
      statusCode: number;
      message: string;
      data?: User;
    } = response;

    if (usersData.statusCode === 200) {
      return usersData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

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
      return usersData.data;
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

const blockUser = async (userName: string): Promise<User | undefined> => {
  try {
    const url = "/users/block-user";

    const response = await request.patch(url, { userName });

    const blockedUserData: {
      statusCode: number;
      message: string;
      data?: User;
    } = response.data;

    if (blockedUserData.statusCode === 200) {
      return blockedUserData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const unblockUser = async (userName: string): Promise<User | undefined> => {
  try {
    const url = "/users/unblock-user";

    const response = await request.patch(url, { userName });

    const unblockedUserData: {
      statusCode: number;
      message: string;
      data?: User;
    } = response.data;

    if (unblockedUserData.statusCode === 200) {
      return unblockedUserData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const changePassword = async (
  userName: string,
  newPassword: string,
  previousPassword: string
): Promise<User | undefined> => {
  try {
    const url = "/users/change-password";

    const response = await request.patch(url, {
      userName,
      newPassword,
      previousPassword,
    });

    const unblockedUserData: {
      statusCode: number;
      message: string;
      data?: User;
    } = response.data;

    if (unblockedUserData.statusCode === 200) {
      return unblockedUserData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const updateUserFirstName = async (
  userName: string,
  firstName: string
): Promise<User | undefined> => {
  try {
    const url = "/users/update-user-first-name";

    const response = await request.patch(url, { userName, firstName });

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

const updateUserMiddleName = async (
  userName: string,
  middleName: string
): Promise<User | undefined> => {
  try {
    const url = "/users/update-user-middle-name";

    const response = await request.patch(url, { userName, middleName });

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

const updateUserLastName = async (
  userName: string,
  lastName: string
): Promise<User | undefined> => {
  try {
    const url = "/users/update-user-last-name";

    const response = await request.patch(url, { userName, lastName });

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

const updateUserPhoneNumber = async (
  userName: string,
  phone: string
): Promise<User | undefined> => {
  try {
    const url = "/users/update-user-phone-number";

    const response = await request.patch(url, { userName, phone });

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

const updateUserAge = async (
  userName: string,
  age: string
): Promise<User | undefined> => {
  try {
    const url = "/users/update-user-age";

    const response = await request.patch(url, { userName, age });

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

const updateUserGender = async (
  userName: string,
  gender: string
): Promise<User | undefined> => {
  try {
    const url = "/users/update-user-gender";

    const response = await request.patch(url, { userName, gender });

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
  getCurrentUser,
  getUserWithUserName,
  getUsersWithUserName,
  getAllArchivedUsers,
  postUser,
  blockUser,
  unblockUser,
  changePassword,
  updateUserFirstName,
  updateUserMiddleName,
  updateUserLastName,
  updateUserPhoneNumber,
  updateUserAge,
  updateUserGender,
};
