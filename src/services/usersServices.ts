import * as request from "@/utils/http";

import { User } from "@/models";

const getUsers = async () => {
  try {
    const url = "/users/get-all-users";

    const response = await request.get(url);

    const usersData: {
      statusCode: number;
      message: string;
      data: Array<User>;
      accessToken: string;
    } = response;

    if (usersData.statusCode === 200) {
      return usersData;
    }
  } catch (error) {
    console.log(error);
  }
};

export { getUsers };
