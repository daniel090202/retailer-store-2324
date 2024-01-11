import * as request from "@/utils/httpRequests";

import { User } from "@/models/dto";

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
    return error;
  }
};

export { login };
