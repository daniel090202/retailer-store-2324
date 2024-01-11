import {
  logInFail,
  logOutFail,
  logInStart,
  logOutStart,
  logInSuccess,
  logOutSuccess,
} from "@/lib/redux/features";

import { login } from "@/services";
import { appRoutes } from "@/config";

import { User } from "@/models/dto";
import { AppDispatch } from "@/lib/redux/store";

const loginUser = async (
  router: any,
  dispatch: AppDispatch,
  account: { userName: string; password: string }
) => {
  dispatch(logInStart());

  try {
    const userData = (await login(account)) as {
      statusCode: number;
      message: string;
      data: User;
      accessToken: string;
    };

    dispatch(logInSuccess(userData));

    router.push(appRoutes.home);
  } catch (error) {
    dispatch(logInFail());
  }
};

export { loginUser };
