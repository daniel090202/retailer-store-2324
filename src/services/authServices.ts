import * as request from "@/utils/httpRequests";

import { User } from "@/dto";

const login = async (account: { userName: string; password: string }) => {
  try {
    const url = "/user/login";

    const response = await request.post(url, account);
    const user: User = response.data;

    return user;
  } catch (error) {
    console.log(error);
  }
};

export { login };
