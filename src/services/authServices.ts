import * as request from "@/utils/http";

import { User } from "@/models";

const login = async (account: { userName: string; password: string }) => {
  try {
    const url = "/user/login";

    const response = await request.post(url, account);

    const userData: {
      statusCode: number;
      message: string;
      data: User;
      accessToken: string;
    } = response.data;

    if (userData.statusCode === 200) {
      return userData;
    }
  } catch (error) {
    console.log(error);
  }
};

const verify = async (accessToken: string) => {
  try {
    const url = "/users/me";

    const options = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };

    const response = await request.get(url, options);

    const userData: {
      statusCode: number;
      message: string;
      data: User;
      accessToken: string;
    } = response.data;

    if (userData.statusCode === 200) {
      return userData;
    }
  } catch (error) {
    console.log(error);
  }
};

export { login, verify };
